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
    image: "public/scissors.svg",
    name: "Scissors",
    win: ["Paper", "Lizard"],
    lose: ["Spock", "Rock"],
  },
  Lizard: {
    image: "public/lizard.svg",
    name: "Lizard",
    win: ["Paper", "Spock"],
    lose: ["Scissors", "Rock"],
  },
  Rock: {
    image: "public/rock.svg",
    name: "Rock",
    win: ["Scissors", "Lizard"],
    lose: ["Spock", "Paper"],
  },
  Paper: {
    image: "public/paper.svg",
    name: "Paper",
    win: ["Rock", "Spock"],
    lose: ["Lizard", "Scissors"],
  },
  Spock: {
    image: "public/spock.svg",
    name: "Spock",
    win: ["Rock", "Scissors"],
    lose: ["Lizard", "Paper"],
  },
} as GameData;

export default data;
