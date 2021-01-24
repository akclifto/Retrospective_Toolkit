//Contains information about different types of dice that can be used

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
  }
}

const dieThemes = {
  action: {
    title: "action",
    images: [
      {
        name: "Bar Chart",
        url: 'https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/brush-24px.svg'
      },
      {
        name: "Bubble Chart",
        url: 'https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/directions_run-24px.svg'
      },
      {
        name: "Cloud Queue",
        url: 'https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/directions_walk-24px.svg'
      },
      {
        name: "Highlight",
        url: 'https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/edit-black-18dp.svg'
      },
      {
        name: "Insert Emoticon",
        url: 'https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/alt_route-24px.svg'
      },
      {
        name: "Insert Photo",
        url: 'https://d1g31diwtzkeb3.cloudfront.net/Dice/Themes/Action/emoji_objects-24px.svg'
      }
    ]
  }
}

export {dieSides as sides, dieThemes as themes} ;
