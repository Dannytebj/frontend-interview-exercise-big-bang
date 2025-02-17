interface IProps {
  label: string;
  btnHandler: () => void;
  disabled?: boolean;
  style?: string;
}
export const Button = ({ label, btnHandler, disabled, style }: IProps) => {
  return (
    <button
      className={`ml-4 px-4 py-2 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed ${style}`}
      onClick={btnHandler}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
