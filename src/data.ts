
type Card = {
  image: string;
  name: string;
  win: string[];
  lose: string[];
}

export type CardT = {
  Scissors: {
      image: string;
      name: string;
      win: string[];
      lose: string[];
  }
}

export type GameData = {
  key:string
  Scissors: Card;
  Lizard: Card;
  Rock: Card;
  Paper: Card;
  Spock: Card;
}

const data = {
  Scissors: {
    image: "scissors.svg",
    name: "Scissors",
    win: ["Paper", "Lizard"],
    lose: ["Spock", "Rock"],
  },
  Lizard: {
    image: "lizard.svg",
    name: "Lizard",
    win: ["Paper", "Spock"],
    lose: ["Scissors", "Rock"],
  },
  Rock: {
    image: "/rock.svg",
    name: "Rock",
    win: ["Scissors", "Lizard"],
    lose: ["Spock", "Paper"],
  },
  Paper: {
    image: "/paper.svg",
    name: "Paper",
    win: ["Rock", "Spock"],
    lose: ["Lizard", "Scissors"],
  },
  Spock: {
    image: "/spock.svg",
    name: "Spock",
    win: ["Rock", "Scissors"],
    lose: ["Lizard", "Paper"],
  },
} as GameData;

export default data;
