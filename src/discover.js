const DiscoveredBridge = require('./types/DiscoveredBridge')
const axios = require('axios')

/**
 * @description Discover all bridges in the same network
 * @returns {Promise<DiscoveredBridge[]>}
 */
async function discover () {
    const response = await axios.get('https://discovery.meethue.com/')
    const bridges = response.data.map(bridge => {
        return new DiscoveredBridge(bridge.internalipaddress, bridge.port, bridge.id)
    })
    return bridges
}

module.exports = discover