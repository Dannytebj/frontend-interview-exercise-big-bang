interface IProps {
  label: string;
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

export const ChoiceSelect = ({ label, value, onChangeHandler }: IProps) => {
  return (
    <div>
      <label
        htmlFor="HeadlineAct"
        className="block text-sm font-medium text-gray-900"
      >
        {label}
      </label>

      <select
        className="mt-1.5 w-full p-2 border rounded  text-gray-700 sm:text-sm disabled:cursor-not-allowed"
        value={value}
        onChange={onChangeHandler}
        disabled={value !== ""}
      >
        <option value="">Please select</option>
        {choices.map((choice, i) => (
          <option value={choice} key={i}>
            {choice}
          </option>
        ))}
      </select>
    </div>
  );
};
