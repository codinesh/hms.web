import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { GetStaticProps } from "next";
import React from "react";
import constants from "../../src/const";
import Patient from "../../src/models/Patient";

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${constants.baseApiUrl}${constants.patientUrl}`);
  const patients: Patient[] = await res.json();

  if (!patients) {
    return {
      notFound: true,
    };
  }

  return {
    props: { patients }, // will be passed to the page component as props
  };
};

const PatientPage: React.FC<{ patients: Patient[] }> = (props) => {
  const { patients } = props;

  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Id
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Email
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Pone Number
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Age
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Gender
                  </th>
                  <th scope='col' className='relative px-6 py-3'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {patients.map((patient) => (
                  <tr
                    className='hover:bg-gray-100 cursor-pointer select-none'
                    key={patient.email}
                    onDoubleClick={() => {
                      console.log("clicked");
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
                        className='text-gray-600 bg-red-300 hover:text-indigo-900'>
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
