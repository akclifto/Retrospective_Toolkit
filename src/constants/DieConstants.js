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
        url: 'https://ghcdn.rawgit.org/akclifto/Retrospective_Toolkit/chris-threejs/src/resources/bar_chart.png'
      },
      {
        name: "Bubble Chart",
        url: 'https://ghcdn.rawgit.org/akclifto/Retrospective_Toolkit/chris-threejs/src/resources/bubble_chart.png'
      },
      {
        name: "Cloud Queue",
        url: 'https://ghcdn.rawgit.org/akclifto/Retrospective_Toolkit/chris-threejs/src/resources/cloud_queue.png'
      },
      {
        name: "Highlight",
        url: 'https://ghcdn.rawgit.org/akclifto/Retrospective_Toolkit/chris-threejs/src/resources/highlight.png'
      },
      {
        name: "Insert Emoticon",
        url: 'https://ghcdn.rawgit.org/akclifto/Retrospective_Toolkit/chris-threejs/src/resources/insert_emoticon.png'
      },
      {
        name: "Insert Photo",
        url: 'https://ghcdn.rawgit.org/akclifto/Retrospective_Toolkit/chris-threejs/src/resources/insert_photo.png'
      }
    ]
  }
}

/*
      'https://d1g31diwtzkeb3.cloudfront.net/DiceThemes/Action/bar_chart.png',
      'https://d1g31diwtzkeb3.cloudfront.net/DiceThemes/Action/bubble_chart.png',
      'https://d1g31diwtzkeb3.cloudfront.net/DiceThemes/Action/cloud_queue.png',
      'https://d1g31diwtzkeb3.cloudfront.net/DiceThemes/Action/highlight.png',
      'https://d1g31diwtzkeb3.cloudfront.net/DiceThemes/Action/insert_emoticon.png',
      'https://d1g31diwtzkeb3.cloudfront.net/DiceThemes/Action/insert_photo.png'
*/

export {dieSides as sides, dieThemes as themes} ;