import {
  ArrowDownIcon,
  ArrowUpIcon,
  UserAddIcon,
} from '@heroicons/react/outline';
import clsx from 'clsx';
import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import ApiHelper from '../../src/ApiHelper';
import AddAppointmentSlideIn from '../../src/components/AddAppointmentSlideIn';
import DropdownSearch from '../../src/components/DropdownSearch';
import SearchBox from '../../src/components/SearchBox';
import constants from '../../src/const';
import { dateUtils } from '../../src/helpers/JSUtils';
import { AddAppointment, Appointment } from '../../src/models/Appointment';
import Doctor from '../../src/models/Doctor';
import Gender from '../../src/models/Gender';
import HealthCondition from '../../src/models/HealthCondition';
import Patient from '../../src/models/Patient';
import { useGlobalState } from '../../src/store/GlobalStore';
import { PageProps } from '../../src/types/PageProps';

export const getStaticProps: GetStaticProps = async (context) => {
  const appointments = await ApiHelper.getItem<Appointment[]>(
    constants.appointmentUrl
  );

  if (!appointments) {
    return {
      notFound: true,
    };
  }

  let pageProps: PageProps<Appointment[]> = {
    pageContent: appointments,
  };

  return {
    props: { ...pageProps },
  };
};

const AppointmentPage: React.FC<
  PageProps<{
    appointments: Appointment[];
    doctors: Doctor[];
    patients: Patient[];
  }>
> = (props) => {
  const { appointments } = props.pageContent;
  const [filteredAppointment, setFilteredAppointments] = useState([
    ...appointments,
  ]);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment>();
  const [loading, setloading] = useState(false);
  const [open, setOpen] = useState(false);

  const search = async (a: string) => {
    console.log(a.length, (a?.length ?? 0) == 0);
    if ((a?.length ?? 0) == 0) {
      setFilteredAppointments([...appointments]);
    } else {
      let results = await ApiHelper.getItem<Appointment[]>(
        `${constants.appointmentUrl}${a}`
      );

      setFilteredAppointments(results);
    }
  };

  const addAppointment = async (appointment: AddAppointment) => {
    return false;
  };

  const editAppointment = async (appointment: AddAppointment) => {
    return false;
  };

  const closeSlideIn = (isOpen: boolean) => {
    setOpen(isOpen);
    setSelectedAppointment(undefined);
  };

  const { patients, doctors } = useGlobalState();

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <SearchBox
            className='pb-4'
            placeholderText='search appointments'
            onSearch={(a: string) => {
              search(a);
              return { id: a };
            }}
            onClear={() => {}}
          />
        </div>
        <AddAppointmentSlideIn
          onSubmit={addAppointment}
          onUpdate={editAppointment}
          onClose={() => {}}
          appointment={
            selectedAppointment != undefined
              ? {
                  patientId: selectedAppointment?.patientId,
                  doctorId: selectedAppointment?.doctorId,
                  id: selectedAppointment.id,
                  appointmentDate: selectedAppointment.appointmentDate,
                  appointmentTime: selectedAppointment.appointmentDate,
                }
              : undefined
          }
          open={open || selectedAppointment != undefined}
          setOpen={closeSlideIn}
        />
        <button
          type='button'
          onClick={() => {
            setOpen(true);
          }}
          className='flex-shrink  inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-gray-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  sm:ml-3 sm:w-auto sm:text-sm'>
          <UserAddIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
          Appointment
        </button>
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
                    className=' hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Patient name
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Doctor name
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    gender
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Contact number
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Appointment time
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Health conditions
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {filteredAppointment.map((appointment) => (
                  <tr
                    onDoubleClick={() => {
                      setSelectedAppointment(appointment);
                    }}
                    className={clsx(
                      'hover:bg-gray-100 cursor-pointer select-none'
                    )}
                    key={appointment.id}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {appointment.id}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {appointment.patientName}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {appointment.doctorName}
                    </td>

                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {Gender[appointment.patientGender]}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {appointment.contactNumber}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {dateUtils.geLocalDateTimeString(
                        appointment.appointmentDate
                      )}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {appointment.healthConditions &&
                        appointment.healthConditions.map((x) => (
                          <span
                            key={x}
                            className=' inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 text-opacity-75'>
                            {HealthCondition[x]}
                          </span>
                        ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
