const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const DiscoveredBridge = require('./types/DiscoveredBridge')
const getAuthentification = require('./getAuthentification')
const LinkButtonNotPressedError = require('./types/errors/LinkButtonNotPressedError')

/**
 * @description Checks if the link button is pressed on the bridge
 * @param {DiscoveredBridge} bridge Bridge to check
 * @param {Number} waitFor Miliseconds to wait until checking again
 * @example
    let authentification = await Hue.isLinkButtonPressed(bridge)
    while (!authentification) {
        console.log('Waiting for link button to be pressed')
        authentification = await Hue.isLinkButtonPressed(bridge)
    }
    // Link button was pressed
    console.log(authentification)
 */
async function isLinkButtonPressed (bridge, waitFor = 1000) {
    if (!(bridge instanceof DiscoveredBridge)) {
        throw new TypeError('bridge must be an instance of DiscoveredBridge')
    }

    const authentification = await getAuthentification(bridge)
    if (authentification.error) {
        // Something went wrong
        if (authentification.error instanceof LinkButtonNotPressedError) {
            // Link button not pressed
            await sleep(waitFor)
            return false
        }

        return false
    } else {
        // Link button is pressed
        return authentification
    }
}

module.exports = isLinkButtonPressed