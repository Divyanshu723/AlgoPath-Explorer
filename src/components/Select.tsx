import { ChangeEvent } from "react";

export function Select({
  value,
  onChange,
  options,
  label,
  isDisabled,
}: {
  value: string | number;
  label: string;
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string | number; name: string }[];
  isDisabled?: boolean;
}) {
  return (
    <div className="flex flex-col items-start gap-2">
      <label className="text-sm font-medium text-gray-300 ml-1" htmlFor={label}>
        {label}
      </label>
      <select
        disabled={isDisabled}
        className={`bg-gray-800 border border-gray-600 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200 text-white p-2 min-w-[200px] sm:min-w-full ${
          isDisabled ? "bg-gray-600 cursor-not-allowed" : "hover:bg-gray-700"
        }`}
        id={label}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
