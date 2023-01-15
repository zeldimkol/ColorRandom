const cols = document.querySelectorAll('.col')

// Прослушка и обработка кнопки пробела
document.addEventListener('keydown', (event) => {
    if (event.code.toLowerCase() == 'space'){
        setRandomColors()
    }
})

// Определение и закрытие замочка
document.addEventListener('click', (event) => {
    const type = event.target.dataset.type
    if (type == 'lock') {
        const node =
        event.target.tagName.toLowerCase() == 'i'
        ? event.target
        : event.target.children[0]

        console.log(node)
        node.classList.toggle('fa-solid fa-lock-open')
        node.classList.toggle('fa-solid fa-lock')
    }
})

// Интервал работы (обновление через 5 сек)
// setInterval(() => setRandomColors(), 5000)

// Функция генерируя случайное число и форматирует в цвет
function generateRandomColors() {
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for(let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

// Функция отображая цвет фона, текста и замочка
function setRandomColors() {
    cols.forEach(col => {
        const text = col.querySelector('h2')
        const btn = col.querySelector('button')
        const color = generateRandomColors()
        text.textContent = color
        col.style.background = color

        setTextColor(text, color)
        setTextColor(btn, color)
    })
}

// Функция определяет каким цветом отображать текст и замок
function setTextColor(text, color) {
   const luminance = chroma(color).luminance()
   text.style.color = luminance > 0.5 ? 'black' : 'white'
}

// Старт!
setRandomColors()