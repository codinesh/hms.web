import {
  ArrowDownIcon
} from '@heroicons/react/outline'
import {ArrowUpIcon} from '@heroicons/react/solid'
import clsx from 'clsx'
import {GetStaticProps} from 'next'
import {useRouter} from 'next/dist/client/router'
import React, {useState} from 'react'
import ApiHelper from '../../src/ApiHelper'
import AssignRoomSlideIn from '../../src/components/AssignRoomSlideIn'
import SearchBox from '../../src/components/SearchBox'
import constants from '../../src/const'
import Room, {RoomOccupancy} from '../../src/models/Room'
import {useGlobalState} from '../../src/store/GlobalStore'
import {
  LoadingStateAction,
  useLoadingDispatch
} from '../../src/store/LoadingStore'
import {PageProps} from '../../src/types/PageProps'

export const getStaticProps: GetStaticProps = async (context) => {
  const rooms = await ApiHelper.getItems<Room>(constants.availableRooms)
  if (!rooms) {
    return {
      notFound: true,
    }
  }

  let pageProps: PageProps<Room[]> = {
    pageContent: rooms,
  }

  return {
    props: {...pageProps},
    revalidate: 1,
  }
}

const RoomPage: React.FC<PageProps<Room[]>> = (props) => {
  const {pageContent: rooms} = props
  const [filteredRooms, setFilteredRooms] = useState([...rooms])
  const router = useRouter()
  const [loading, setloading] = useState(false)
  const [open, setOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState<Room>()
  const dispatch = useLoadingDispatch()
  const {wards} = useGlobalState()

  const addRoom = async (room: RoomOccupancy) => {
    dispatch({type: LoadingStateAction.Busy})
    await ApiHelper.postItem<RoomOccupancy, number>(constants.addRooom, room)
    dispatch({type: LoadingStateAction.Idle})

    refreshData()
  }

  const refreshData = () => {
    router.replace(router.asPath)
  }

  const closeSlideIn = (isOpen: boolean) => {
    setOpen(isOpen)
    setSelectedRoom(undefined)
  }

  const search = async (a: string) => {
    dispatch({type: LoadingStateAction.Busy})
    let results = await ApiHelper.getItems<Room>(
      `${constants.roomSearchUrl}${a}`
    )
    dispatch({type: LoadingStateAction.Idle})

    setFilteredRooms(results)
  }

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between items-center'>
        <SearchBox
          className=''
          placeholderText='search rooms'
          onSearch={search}
          onClear={() => { }}
        />

        <AssignRoomSlideIn
          onSubmit={addRoom}
          onUpdate={addRoom}
          onClose={() => { }}
          room={selectedRoom!}
          open={open || selectedRoom != undefined}
          setOpen={closeSlideIn}
        />

      </div>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className=' py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className=' min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    <div className='flex'>
                      <span className='inline'>Id</span>
                      {loading ? (
                        <ArrowUpIcon className='inline' width='16' />
                      ) : (
                        <ArrowDownIcon className='inline' width='16' />
                      )}
                    </div>
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Floor number
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Bed number
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Building id
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Ward type
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {filteredRooms.map((room) => (
                  <tr
                    className={clsx(
                      'hover:bg-gray-100 cursor-pointer select-none'
                    )}
                    key={room.id}
                    onDoubleClick={(e) => {
                      setSelectedRoom(room)
                      setOpen(true)
                    }}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {room.id}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {room.floorNumber}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {room.bedNumber}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {room.buildingId}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {wards.find((w) => w.id === room.wardType)?.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomPage
