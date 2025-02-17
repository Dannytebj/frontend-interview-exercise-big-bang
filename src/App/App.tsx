import { useEffect, useState } from "react";
import { ChoiceSelect } from "./components/ChoiceSelect";
import {
  rulesMap,
  RulesMap,
  getSavedUsernames,
  getSavedScores,
  clearLocalStorage,
  getSavedGameStatus,
} from "./helpers";
import { UserHeader } from "./components/UserHeader";
import { Intro } from "./components/Intro";
import { Button } from "./components/Button";
import "./App.css";

function App() {
  const [gameStarted, setGameStarted] = useState(() => getSavedGameStatus());
  const [hasPlayedRound, sethasPlayedRound] = useState(false);
  const [usernames, setUsernames] = useState(() => getSavedUsernames());
  const [scoreBoard, setScoreBoard] = useState(() => getSavedScores());
  const [player1Choice, setPlayer1Choice] = useState("");
  const [player2Choice, setPlayer2Choice] = useState("");

  useEffect(() => {
    localStorage.setItem("usernames", JSON.stringify(usernames));
    localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));
    localStorage.setItem("gameStarted", JSON.stringify(gameStarted));
  }, [usernames, scoreBoard, gameStarted]);

  const { player1, player2 } = usernames;
  const { playerOneScore, playerTwoScore } = scoreBoard;

  const handleGameStarted = () => {
    setGameStarted(true);
  };
  const handleSetUsernames = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernames({ ...usernames, [e.target.name]: e.target.value });
  };

  function getWinner() {
    sethasPlayedRound(true);
    if (player1Choice === player2Choice) {
      alertUser("It's a Tie!!, Play Again ?");
      return "Tie";
    }

    const pOneWins = rulesMap[player1Choice as keyof RulesMap];
    if (pOneWins.includes(player2Choice)) {
      setScoreBoard({ ...scoreBoard, playerOneScore: playerOneScore + 1 });
      alertUser(`${player1} won this round, Play Again ?`);
      return player1;
    } else {
      setScoreBoard({ ...scoreBoard, playerTwoScore: playerTwoScore + 1 });
      alertUser(`${player2} won this round, Play Again ?`);
      return player2;
    }
  }

  const alertUser = (message: string) => {
    if (confirm(message)) {
      handleNextRound();
    }
  };

  const handleNextRound = () => {
    setPlayer1Choice("");
    setPlayer2Choice("");
    sethasPlayedRound(false);
  };

  const resetGame = () => {
    clearLocalStorage();
    location.reload();
  };

  return (
    <div className="container mx-auto px-4 my-auto py-4">
      {!gameStarted && (
        <Intro
          usernames={usernames}
          handleSetUsernames={handleSetUsernames}
          startGame={handleGameStarted}
        />
      )}
      <div
        className={`mt-4 p-6 rounded-lg transition-all duration-500 ease-in-out 
          ${
            gameStarted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }
        `}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
          <UserHeader player={player1} playerScore={playerOneScore} />
          <UserHeader player={player2} playerScore={playerTwoScore} />
        </div>
        {gameStarted && (
          <div className="text-black h-auto mt-4 p-6 bg-white rounded">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-6 rounded">
                <ChoiceSelect
                  label={player1}
                  value={player1Choice}
                  onChangeHandler={(e) => setPlayer1Choice(e.target.value)}
                />
              </div>
              <div className="bg-gray-100 p-6 rounded">
                <ChoiceSelect
                  label={player2}
                  value={player2Choice}
                  onChangeHandler={(e) => setPlayer2Choice(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-center my-4">
              <Button label="Play" btnHandler={getWinner} style="bg-blue-500" />
              <Button
                label="Next round"
                btnHandler={handleNextRound}
                disabled={!hasPlayedRound}
                style="bg-blue-500"
              />
              <Button
                label="Reset Game"
                btnHandler={resetGame}
                style="bg-red-500"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
