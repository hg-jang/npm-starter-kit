/**
 * @typedef {Object} BombOptions
 * @property {Number} [time=10]
 * @property {Boolean} [isActivated=true]
 * @property {Boolean} [isExploded=false]
 * @property {countDownCb} [countDownCb]
 * @property {Function} [blowUpCb]
 */

/**
 * @callback countDownCb
 * @param {Number} time
 * @returns {void}
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

    /**
     * @type {countDownCb}
     * @private
     * A callback to be called when bomb is counting down
     */
    this._countDownCb = options.countDownCb;

    /**
     * @type {Function}
     * @private
     * A callback to be called when bomb blows up
     */
    this._blowUpCb = options.blowUpCb || this.blowUp;

    /**
     * @type {Number}
     * time to blow up in seconds
     */
    this.time = options.time || 10;

    if (this._isActivated) {
      this._countDown();
    }
  }

  /**
   * @private
   */
  _countDown() {
    let interval = setInterval(() => {
      if (this._isExploded) {
        clearInterval(interval);
        return;
      }

      this.time--;
      if (this._countDownCb) this._countDownCb(this.time);

      if (this.time === 0) {
        this._blowUpCb();
        this._isExploded = true;
      }
    }, 1000);
  }

  /**
   * @param {Number} time
   */
  setTime(time) {
    if (this._isActivated)
      throw new Error('Cannot set time when bomb is activated');

    this.time = time;

    return this;
  }

  /**
   * @returns {Number}
   */
  getTime() {
    return this.time;
  }

  /**
   * @private
   */
  blowUp() {
    console.log('Boom!');
  }

  activate() {
    if (this._isActivated) throw new Error('Bomb is already activated');

    this._isActivated = true;
    this._countDown();
  }
}

export default Bomb;
