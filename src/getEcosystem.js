const DiscoveredBridge = require("./types/DiscoveredBridge");
const HueEcosystem = require("./types/HueEcosystem");
const Authentification = require("./types/Authentification");

/**
 * @description Returns the HueEcosystem for the given bridge
 * @param {DiscoveredBridge} bridge DiscoveredBridge to get the ecosystem from
 * @param {Authentification} auth Authentification credentials for the given bridge
 * @returns {HueEcosystem} HueEcosystem of the given bridge
 */
function getEcosystem (bridge, auth) {
    return new HueEcosystem(bridge, auth)
}

module.exports = getEcosystem