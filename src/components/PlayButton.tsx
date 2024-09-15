import { MouseEventHandler } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

export function PlayButton({
  handlerRunVisualizer,
  isDisabled,
  isGraphVisualized,
}: {
  isDisabled: boolean;
  isGraphVisualized: boolean;
  handlerRunVisualizer: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      disabled={isDisabled}
      onClick={handlerRunVisualizer}
      className={`disabled:pointer-events-none disabled:opacity-50
      transition-all ease-in-out rounded-full p-3 shadow-md border-none 
      focus:outline-none focus:ring-4 focus:ring-opacity-50 
      ${
        isDisabled
          ? "cursor-not-allowed bg-gray-400"
          : "bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 active:ring-green-500"
      }
      ${
        !isDisabled && "hover:shadow-lg transform hover:scale-105 active:scale-95"
      }
    `}
    >
      {isGraphVisualized ? (
        <GrPowerReset className="w-6 h-6 text-white" />
      ) : (
        <BsFillPlayFill className="w-6 h-6 text-white" />
      )}
    </button>
  );
}
