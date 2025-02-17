import { IUsernames } from "../helpers";
import { UserInput } from "./UserInput";
import automataLogo from "../../assets/automata.png";

interface IProps {
  usernames: IUsernames;
  startGame: () => void;
  handleSetUsernames: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Intro = ({ usernames, startGame, handleSetUsernames }: IProps) => {
  const { player1, player2 } = usernames;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <a href="https://automata.tech/" target="_blank" rel="noreferrer">
        <img
          src={String(automataLogo)}
          className="w-16 md:w-32 lg:w-48"
          alt="Automata logo"
        />
      </a>

      <h1>Frontend Exercise</h1>
      <h2>Rock, Paper, Scissors, Lizard, Spock</h2>
      <UserInput
        player={player1}
        playerName="player1"
        handleSetUsernames={handleSetUsernames}
      />
      <UserInput
        player={player2}
        playerName="player2"
        handleSetUsernames={handleSetUsernames}
      />
      <button
        onClick={startGame}
        className="rounded-sm border border-indigo-600 px-12 py-3 my-4 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden"
      >
        Start Game
      </button>
    </div>
  );
};
