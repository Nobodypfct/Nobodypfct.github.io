const telegram = window.Telegram.WebApp

window.addEventListener('load', () => {
    telegram.expand()
    telegram.viewportStableHeight = 1000
})

