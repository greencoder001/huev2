/**
 * @description Every needed function/Class for the Hue API
 * @module huev2
 * @version 1.0.0
 * @author greencoder001
 * @license MIT
 * @returns {Object} Hue API
 * @example
    {
        discover,
        forceAuth,
        getAuthentification,
        isLinkButtonPressed,
        getEcosystem,
        types: {
            Authentification,
        }
    }
 */
module.exports = {
    discover: require('./src/discover'),
    getAuthentification: require('./src/getAuthentification'),
    isLinkButtonPressed: require('./src/isLinkButtonPressed'),
    forceAuth: require('./src/forceAuth'),
    getEcosystem: require('./src/getEcosystem'),
    types: {
        Authentification: require('./src/types/Authentification'),
        HueEcosystem: require('./src/types/HueEcosystem')
    }
}