import { Bomb } from '../../src/npm-starter-kit';

const bomb = new Bomb({
  time: 5,
  countDownCb: (time) => {
    console.log(`Bomb will explode in ${time} seconds`);
  },
  blowUpCb: () => {
    console.log('Boom!!!!!');
  },
});
console.log(bomb);
