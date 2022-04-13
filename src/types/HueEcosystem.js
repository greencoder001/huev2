const DiscoveredBridge = require("./DiscoveredBridge")
const axios = require("axios")
const https = require('https')

class HueEcosystem {
    /**
     * @description Returns the HueEcosystem for the given bridge
     * @param {DiscoveredBridge} bridge DiscoveredBridge to get the ecosystem from
     * @returns {HueEcosystem} HueEcosystem of the given bridge
     */
    constructor (bridge, authentification) {
        this.bridge = bridge
        this.authentification = authentification
        this.apiEndpoint = `${bridge.url}clip/v2/resource/`
        this.devicesEndpoint = `${this.apiEndpoint}devices`
        this.__request = {
            headers: {
                'hue-application-key': this.authentification.data.username
            }
        }
        this.httpsAgent = new https.Agent({
            rejectUnauthorized: false, // (NOTE: this will disable client verification)
        })
    }

    async listDevices () {
        const response = await axios({
            method: 'GET',
            url: `${this.devicesEndpoint}`,
            httpsAgent: this.httpsAgent,
            headers: this.__request.headers
        })

        const { data } = response
        return data
    }

}

module.exports = HueEcosystem