interface IProps {
  player: string;
  playerScore: number;
}

export const UserHeader = ({ player, playerScore }: IProps) => {
  return (
    <div className="player-details mt-4 p-6 bg-white rounded-lg shadow-lg flex justify-center">
      <h1 className="text-xl">
        {player} has won {playerScore}{" "}
        {playerScore > 1 || playerScore === 0 ? "games" : "game"}
      </h1>
    </div>
  );
};
