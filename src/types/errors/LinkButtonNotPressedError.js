class LinkButtonNotPressedError extends Error {
  constructor() {
    super('Link button is not pressed')
    this.name = 'LinkButtonNotPressedError'
  }
}

module.exports = LinkButtonNotPressedError