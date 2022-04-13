const isLinkButtonPressed = require('./isLinkButtonPressed')
const DiscoveredBridge = require('./types/DiscoveredBridge')
const Authentification = require('./types/Authentification')

/**
 * @description Creates new authentification credentials for the given bridge and waits until the link button is pressed
 * @param {DiscoveredBridge} bridge The bridge to authenticate
 * @param {Function} onLinkButtonNotPressed Optional callback that will be called every second the link button is not pressed
 * @returns {Promise<Authentification>} Authentification credentials for the given bridge
 */
async function forceAuth (bridge, onLinkButtonNotPressed = () => {}) {
    let authentification = await isLinkButtonPressed(bridge)

    while (!authentification) {
        onLinkButtonNotPressed()
        authentification = await isLinkButtonPressed(bridge)
    }

    return authentification
}

module.exports = forceAuth