'use client'
import { useState } from 'react';
import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,
  } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

import { Study } from '@/app/lib/definitions';
import { fetchStudyData } from '@/app/lib/data2';
import { join } from 'path';
import Link from 'next/link';
  
  const iconMap = {
    collected: BanknotesIcon,
    customers: UserGroupIcon,
    pending: ClockIcon,
    invoices: InboxIcon,
  };
  
 /* export default async function CardWrapper() {
    return (
      <>
        {/* NOTE: comment in this code when you get to this point in the course *}
  
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> *}
      </>
    );
  }
*/
  
export default async function StudyCard( {study}: {study: string}) {
  const studyData = await fetchStudyData(study)
  try{
    const data = {
      name: studyData.name,
      sponsor: studyData.sponsor,
      websites: studyData.websites
    }
    return <GoodCard studyData={data}/>
  } catch (err) {
    return <BadCard />
  }

    { /*return (
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          <h3 className="ml-2 text-sm font-medium">{studyData.name}</h3>
          <p className='ml-2 text-sm font-small'>{studyData.sponsor}</p>
        </div>
      </div>
    ); */}
  }

const GoodCard = ({studyData}: Study) => {
  const [expanded, setExpanded] = useState(false)
  
  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
  <div className="rounded-xl bg-gray-50 p-2 shadow-sm" onClick={handleToggleExpand}>
    <div className="flex p-4">
      <h3 className="ml-2 text-sm font-medium">{studyData.name}</h3>
      <p className='ml-2 text-sm font-small'>{studyData.sponsor}</p>
    </div>
    {expanded && (
        <div className="ml-2 text-sm font-small">
          <h4>Study Websites:</h4>
          <ul>
            {studyData.websites.map((website, index) => (
              <li key={index}>
                <Link href={website} target="_blank" >
                  {website}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <p>{expanded ? 'Collapse' : 'Expand'}</p>
  </div>)
}

const BadCard = () => {
  return (<div className="rounded-xl bg-gray-50 p-2 shadow-sm">
    <div className="flex p-4">
      <h3 className="ml-2 text-sm font-medium">Study Data not found</h3>
    </div>
  </div> )
}
  