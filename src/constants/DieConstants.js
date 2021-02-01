import iconsArr from "./IconsDataStructure";
import randomIconSelector from "../components/RandomIconSelector";
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
  all: {
    images: iconsArr,
  },
  random: {
    images: randomIconSelector(dieSides.SIX.sides),
  },
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
  // all icons from action theme
  test: {
    images: [
      // "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/alt_route-24px.svg", //this image doesn't load from CDN
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/brush-24px.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/directions_run-24px.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/directions_walk-24px.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/edit-black-18dp.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/emoji_objects-24px.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/grass-24px.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/headset-24px.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/highlight-24px.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/music_note-24px.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/remove_red_eye-24px.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/security-24px.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/straighten-24px.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/sync-24px.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/toys-24px.svg",
      "https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/watch-24px.svg",
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
