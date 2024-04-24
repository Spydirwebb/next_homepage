import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,
  } from '@heroicons/react/24/outline';
  import { lusitana } from '@/app/ui/fonts';

  import { Study } from '@/app/lib/definitions';
import { fetchStudyData } from '@/app/lib/data2';
  
  const iconMap = {
    collected: BanknotesIcon,
    customers: UserGroupIcon,
    pending: ClockIcon,
    invoices: InboxIcon,
  };
  
  export default async function CardWrapper() {
    return (
      <>
        {/* NOTE: comment in this code when you get to this point in the course */}
  
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </>
    );
  }
  
  export function StudyCard({
    study
  }: {
    study: string
  }) {
    const studyData = fetchStudyData(study)
    return (
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          <h3 className="ml-2 text-sm font-medium">{study}</h3>
        </div>
      </div>
    );
  }
  