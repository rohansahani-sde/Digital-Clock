const hour = document.getElementById('hour')
const minute = document.getElementById('minutes')
const second = document.getElementById('seconds')
const day = document.getElementById('day')
const weekday = document.getElementById('weekday')

var monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
const clock = setInterval(function time() {
    let today = new Date()
    let d = today.getDate()
    let m = today.getMonth()
    let y = today.getFullYear()
    let h = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()
    // let day = today.getDay()

    day.innerHTML = `${d} ${monthName[m]} ${y}`
    hour.innerHTML = h
    minute.innerText = min
    second.innerText = sec
    // weekday.innerHTML=weekday
})