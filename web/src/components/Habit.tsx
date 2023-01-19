import "./Habit.css";

interface HabitProps {
   completed: number;
}
const Habit = ({ completed }: HabitProps) => {
   return (
      <p className="bg-zinc-900 w-10 text-white rounded m-2 text-center flex items-center justify-center">
         {completed}
      </p>
   );
};

export default Habit;
