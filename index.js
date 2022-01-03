const canvas = document.getElementById('Matrix')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const nums = '0123456789'

const alphabet = katakana + latin + nums

const fontSize = 16
const columns = canvas.width / fontSize

const rainDrops = []

for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1
}
