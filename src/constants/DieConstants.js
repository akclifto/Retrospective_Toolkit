// Contains information about different types of dice that can be used

const dieSides = {
  FOUR: {
    sides: 4,
    chance: 1 / 4,
  },
  SIX: {
    sides: 6,
    chance: 1 / 6,
  },
  EIGHT: {
    sides: 8,
    chance: 1 / 8,
  },
  TEN: {
    sides: 10,
    chance: 1 / 10,
  },
  TWELVE: {
    sides: 12,
    chance: 1 / 12,
  },
  TWENTY: {
    sides: 20,
    chance: 1 / 20,
  },
};

const dieThemes = {
  action: {
    images: [
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/brush-24px.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/grass-24px.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/sync-24px.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/watch-24px.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/toys-24px.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/directions_walk-24px.svg",
    ],
  },
};

/*
      "https://ghcdn.rawgit.org/akclifto/Retrospective_Toolkit/master/src/resources/bar_chart.png",
      "https://ghcdn.rawgit.org/akclifto/Retrospective_Toolkit/master/src/resources/bubble_chart.png",
      "https://ghcdn.rawgit.org/akclifto/Retrospective_Toolkit/master/src/resources/cloud_queue.png",
      "https://ghcdn.rawgit.org/akclifto/Retrospective_Toolkit/master/src/resources/highlight.png",
      "https://ghcdn.rawgit.org/akclifto/Retrospective_Toolkit/master/src/resources/insert_emoticon.png",
      "https://ghcdn.rawgit.org/akclifto/Retrospective_Toolkit/master/src/resources/insert_photo.png",
*/

export { dieSides as sides, dieThemes as themes };
