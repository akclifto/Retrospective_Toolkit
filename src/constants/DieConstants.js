//Contains information about different types of dice that can be used
import barChart from '../resources/bar_chart.png';
import bubbleChart from '../resources/bubble_chart.png';
import highlight from '../resources/highlight.png';
import insertEmoticon from '../resources/insert_emoticon.png';
import insertPhoto from '../resources/insert_photo.png';
import cloudQueue from '../resources/cloud_queue.png';
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
  Action: {
    name: 'Action',
    images: [
      barChart,
      bubbleChart,
      highlight,
      insertEmoticon,
      insertPhoto,
      cloudQueue

      // 'https://d1g31diwtzkeb3.cloudfront.net/DiceThemes/Action/bar_chart.png',
      // 'https://d1g31diwtzkeb3.cloudfront.net/DiceThemes/Action/bubble_chart.png',
      // 'https://d1g31diwtzkeb3.cloudfront.net/DiceThemes/Action/cloud_queue.png',
      // 'https://d1g31diwtzkeb3.cloudfront.net/DiceThemes/Action/highlight.png',
      // 'https://d1g31diwtzkeb3.cloudfront.net/DiceThemes/Action/insert_emoticon.png',
      // 'https://d1g31diwtzkeb3.cloudfront.net/DiceThemes/Action/insert_photo.png',
    ]
  }

}

export {dieSides as sides, dieThemes as themes} ;