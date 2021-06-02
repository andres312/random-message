const messages = [
    "andres",
    "oscar",
    "Diego",
    "Nikolai",
    "Ana",
    "Laura",
    "Paco",
    "Pedro"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = {randomMsg}