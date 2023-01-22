import dayjs from "dayjs";

export default function generateDaysFromYearBegin() {
   const firstDayOfTheYear = dayjs().startOf("year");
   const today = new Date();
   const dates = [];
   let compare = firstDayOfTheYear;
   while (compare.isBefore(today)) {
      dates.push(compare.toDate());
      compare = compare.add(1, "day");
   }
   return dates;
}
