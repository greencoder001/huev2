class DiscoveredBridge {
    /**
     * @description Create a new DiscoveredBridge instance
     * @param {String} localIp The local IP address of the bridge
     * @param {Number} port The port of the bridge (mostly: 443)
     * @param {String} id Bridge id
     */
    constructor (localIp, port, id) {
        this.localIp = localIp
        this.port = port
        this.id = id
        this.url = `http${this.port === 443 ? 's' : ''}://${this.localIp}${this.port === 443 ? '' : ':' + this.port}/`
    }
}

module.exports = DiscoveredBridge