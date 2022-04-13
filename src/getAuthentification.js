const DiscoveredBridge = require('./types/DiscoveredBridge')
const axios = require('axios')
const https = require('https')
const LinkButtonNotPressedError = require('./types/errors/LinkButtonNotPressedError')
const Authentification = require('./types/Authentification')

/**
 * @description Creates new authentification credentials for the given bridge
 * @param {DiscoveredBridge} bridge Discovered bridge to authenticate
 * @returns {Promise<void>}
 */
async function getAuthentification (bridge) {
    if (!(bridge instanceof DiscoveredBridge)) {
        throw new TypeError('bridge must be an instance of DiscoveredBridge')
    }

    const httpsAgent = new https.Agent({
        rejectUnauthorized: false, // (NOTE: this will disable client verification)
    })

    const response = await axios({
        method: 'POST',
        url: `${bridge.url}api`,
        data: {
            devicetype: 'huev2#getAuthentification',
            generateclientkey: true
        },
        httpsAgent
    })

    let error = null

    if (response.data[0].error) {
        // Some error occured
        if (response.data[0].error.type === 101) {
            // Link button not pressed
            error = new LinkButtonNotPressedError(response.data[0].error.description)
        } else {
            // Unknown error
            error = new Error(response.data[0].error.type + ': ' + response.data[0].error.description)
        }
    }

    let authdata = null
    if (response.data[0].success) {
        // Success
        authdata = response.data[0].success
    }

    return new Authentification(authdata, error)
}

module.exports = getAuthentification