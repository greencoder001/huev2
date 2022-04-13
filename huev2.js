const discover = require('./src/discover')
const getAuthentification = require('./src/getAuthentification')

module.exports = {
    discover,
    getAuthentification,
    isLinkButtonPressed: require('./src/isLinkButtonPressed'),
    forceAuth: require('./src/forceAuth')
}