const Base = require("./base/base");

class Car extends Base {
    constructor({ id, name, releaseYear, avaliable, gasAvailable }) {
        super({ id, name })

        this.releaseYear = releaseYear
        this.avaliable = avaliable
        this.gasAvailable = gasAvailable
    }
}

module.exports = Car