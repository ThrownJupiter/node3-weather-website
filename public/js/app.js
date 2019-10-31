console.log('Client side javascript file is loaded!')

// fetch('/weather?address=Kansas%20City%20KS').then((response) => {
//     response.json().then((data) =>{
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() //prevents defaults from running. Prevents page refresh. e stands for "event"

    const location = search.value

    messageOne.textContent = ''
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) =>{
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
    //window.alert("testing!");
})