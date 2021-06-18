import {
  ArrowDownIcon,
  CheckIcon,
  PencilIcon,
  TrashIcon,
  UserAddIcon,
} from '@heroicons/react/outline';
import { ArrowUpIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import ApiHelper from '../../src/ApiHelper';
import AddPatientSlideIn from '../../src/components/AddPatientSlideIn';
import SearchBox from '../../src/components/SearchBox';
import constants from '../../src/const';
import Patient from '../../src/models/Patient';
import { PageProps } from '../../src/types/PageProps';

export const getStaticProps: GetStaticProps = async (context) => {
  const patients = await ApiHelper.getItem<Patient[]>(constants.patientUrl);

  if (!patients) {
    return {
      notFound: true,
    };
  }

  let pageProps: PageProps<Patient[]> = {
    pageContent: patients,
  };

  return {
    props: { ...pageProps },
  };
};

const PatientPage: React.FC<PageProps<Patient[]>> = (props) => {
  const { pageContent: patients } = props;
  const [filteredPatients, setFilteredPatients] = useState([...patients]);
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [open, setOpen] = useState(false);

  const search = (a: string) => {
    setFilteredPatients(patients.filter((d) => !d.fullName.search(a)));
  };

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center'>
        <SearchBox
          className='pb-4'
          placeholderText='search patients'
          onSearch={(a: string) => {
            search(a);
            return { id: a };
          }}
          onClear={() => {}}
        />

        <AddPatientSlideIn open={open} setOpen={setOpen} />

        <button
          type='button'
          onClick={() => {
            setOpen(true);
          }}
          className='inline-flex items-center px-2 py-2 border 
          border-transparent shadow-sm text-sm font-medium rounded-md
           text-white bg-gray-600 hover:bg-gray-700 
           focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-gray-500'>
          <UserAddIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
          Add patient
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
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Name
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Email
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Phone Number
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Age
                  </th>
                  <th
                    scope='col'
                    className='hover:bg-gray-200 hover:cursor-pointer px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Gender
                  </th>
                  <th scope='col' className='relative px-6 py-3'>
                    <span className='sr-only'>Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {filteredPatients.map((patient) => (
                  <tr
                    className={clsx(
                      'hover:bg-gray-100 cursor-pointer select-none'
                    )}
                    key={patient.id}
                    onDoubleClick={(e) => {
                      setloading(true);
                      router.push(`/patient/${patient.id}`);
                    }}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                      {patient.id}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {patient.fullName}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {patient.contactNumber}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {patient.email}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {patient.age}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                      {patient.gender}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                      <a
                        href={`/patient/${patient.id}`}
                        className='text-gray-600 bg-red-300 hover:text-gray-900'>
                        <TrashIcon className='w-5 h-5 ' aria-hidden='true' />
                      </a>
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

export default PatientPage;
