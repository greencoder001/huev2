const Hue = require('./huev2')

;(async function () {
    // Discover bridges
    const bridges = await Hue.discover()
    // Get first bridge
    const bridge = bridges[0]

    // Wait until link button is pressed
    // This will automatically wait 1 second until checking again
    let authentification = await Hue.isLinkButtonPressed(bridge)
    while (!authentification) {
        console.log('Waiting for link button to be pressed')
        authentification = await Hue.isLinkButtonPressed(bridge)
    }

    // Link button was pressed
    console.log(authentification)
})()