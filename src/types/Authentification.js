class Authentification {
    constructor (data, error = null) {
        this.data = data
        this.error = error
    }

    /**
     * @description Returns the authentification data as JSON (String)
     * @returns {String} Stored authentification data
     */
    store () {
        if (this.error) {
            throw new Error('Authentification.store() can only be called if there is no error')
        }

        return JSON.stringify(this.data)
    }
}

/**
 * @description Creates new authentification credentials from the given data
 * @param {String} data Stored Authentification data (from: Authentification.store())
 * @returns {Authentification} Authentification credentials from the given data
 */
Authentification.from = function (data) {
    return new Authentification(JSON.parse(data), null)
}

module.exports = Authentification