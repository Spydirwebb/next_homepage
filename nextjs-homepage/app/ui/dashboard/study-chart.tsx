import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { Study } from '@/app/lib/definitions';
import  StudyCard  from './study-card';
import { fetchStudyData } from '@/app/lib/data2';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function StudyChart({
  studies,
}: {
  studies: string[];
}) {
  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Studies
      </h2>
      {studies.map((study, k) => 
         <p key={k}>
          <StudyCard study={study}/>
        </p>
      )} 
    </div>
  );
}
