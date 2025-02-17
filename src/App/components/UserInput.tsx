interface IProps {
  player: string;
  playerName: string;
  handleSetUsernames: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserInput = ({
  player,
  playerName,
  handleSetUsernames,
}: IProps) => {
  return (
    <div className="player-details mt-4 p-6 bg-white rounded-lg shadow-lg flex justify-center text-black">
      <input
        type="text"
        placeholder={`Set ${playerName} name`}
        className="p-2 border rounded mr-4"
        value={player}
        name={playerName}
        onChange={handleSetUsernames}
      />
    </div>
  );
};
