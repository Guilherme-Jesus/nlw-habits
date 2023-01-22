import generateDaysFromYearBegin from "../../utils/generate-days-from-year-begin";
import HabitDay from "../Habit/HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const summaryDates = generateDaysFromYearBegin();
console.log(summaryDates);
const minimSummaryDatesSize = 18 * 7; // 18 weeks
const amountOfDaysToFill = minimSummaryDatesSize - summaryDates.length; // 18 weeks - 12 weeks = 6 weeks

export function SummaryTable() {
   return (
      <div className="w-full flex">
         <div className="grid grid-rows-7 grid-flow-row gap-3">
            {weekDays.map((day, index) => (
               <div
                  key={`${day}-${index}`}
                  className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
               >
                  {day}
               </div>
            ))}
         </div>
         <div className="grid grid-rows-7 grid-flow-col gap-3">
            {summaryDates.map((date) => {
               return <HabitDay key={date.toString()} />;
            })}
            {amountOfDaysToFill > 0 &&
               Array.from({ length: amountOfDaysToFill }).map((_, i) => {
                  return (
                     <div
                        key={i}
                        className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
                     />
                  );
               })}
         </div>
      </div>
   );
}
