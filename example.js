const Hue = require('./huev2')

;(async function () {
    // Discover bridges
    const bridges = await Hue.discover()
    // Get first bridge
    const bridge = bridges[0]

    // Wait until link button is pressed
    const authentification = await Hue.forceAuth(bridge, () => {
        // Called every second the link button is not pressed
    })

    // Link button was pressed

    // Get Hue Ecosystem
    const ecosystem = await Hue.getEcosystem(bridge, authentification)
    console.log(await ecosystem.listDevices())
})()