const telegram = window.Telegram.WebApp

window.addEventListener('load', () => {
    telegram.expand()
    telegram.viewportStableHeight = 1000
})

const eventType = 'viewportChanged'

const eventHandler = () => {
    telegram.expand()
}

telegram.onEvent(eventType, eventHandler)