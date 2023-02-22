class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.reasult = Math.round((this.max - this.min) / 2) + this.min;
        return this.reasult;
    }

    lower() {
        this.max = this.reasult;
    }

    greater() {
        this.min = this.reasult;
    }
}

module.exports = GuessingGame;
