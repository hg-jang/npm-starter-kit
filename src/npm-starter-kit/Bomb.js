/**
 * @typedef {Object} BombOptions
 * @property {Number} [time=10]
 * @property {Boolean} [isActivated=true]
 * @property {Boolean} [isExploded=false]
 * @property {Function} [countDownCb]
 */

class Bomb {
  /**
   * @param {BombOptions} [options]
   */
  constructor(options) {
    options = options || {};

    /**
     * @type {Boolean}
     * @private
     * is bomb activated
     */
    this._isActivated = options.isActivated || true;

    /**
     * @type {Boolean}
     * @private
     * is bomb exploded
     */
    this._isExploded = options.isExploded || false;

    this._countDownCb = options.countDownCb;

    /**
     * @type {Number}
     * time to blow up in seconds
     */
    this.time = options.time || 10;

    if (this._isActivated) {
      this._startCountDown(this._countDownCb);
    }
  }

  /**
   * @private
   * @param {Function} [countDownCb]
   */
  _startCountDown(countDownCb) {
    let interval = setInterval(() => {
      if (this._isExploded) {
        clearInterval(interval);
        return;
      }

      this.time--;
      if (countDownCb) countDownCb(this.time);

      if (this.time === 0) {
        this.blowUp();
      }
    }, 1000);
  }

  /**
   * @returns {Number}
   */
  defuse() {
    return this.time;
  }

  /**
   * @param {Number} time
   */
  setTime(time) {
    this.time = time;

    return this;
  }

  /**
   * @returns {Number}
   */
  getTime() {
    return this.time;
  }

  blowUp() {
    console.log('Boom!');
    this._isExploded = true;
  }
}

export default Bomb;
