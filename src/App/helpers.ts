export interface IUsernames {
  player1: string;
  player2: string;
}
export interface IScores {
  playerOneScore: number;
  playerTwoScore: number;
}

export const defaultUsernames: IUsernames = {
  player1: "",
  player2: "",
};

export const defaultScoreBoard: IScores = {
  playerOneScore: 0,
  playerTwoScore: 0,
};
export interface RulesMap {
  Rock: string[];
  Paper: string[];
  Scissors: string[];
  Spock: string[];
  Lizard: string[];
}
export const rulesMap: RulesMap = {
  Rock: ["Scissors", "Lizard"],
  Paper: ["Rock", "Spock"],
  Scissors: ["Paper", "Lizard"],
  Spock: ["Scissors", "Rock"],
  Lizard: ["Paper", "Spock"],
};


export const getSavedScores = () => {
  const saved = localStorage.getItem("scoreBoard");
  return !saved ? defaultScoreBoard : (JSON.parse(saved) as IScores);
};
export const getSavedUsernames = () => {
  const saved = localStorage.getItem("usernames");
  return !saved ? defaultUsernames : (JSON.parse(saved) as IUsernames);
};

export const getSavedGameStatus = () => {
  const saved = localStorage.getItem("gameStarted");
  return !saved ? false : (JSON.parse(saved) as boolean);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
