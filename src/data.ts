
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
};

export default data;

