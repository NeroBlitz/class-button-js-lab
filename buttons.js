let popbutton = document.querySelector("#popbutton")

popbutton.addEventListener("click", e => {
    console.log("pop button clicked!")
    popbutton.classList.add("pop")
})
let bigbutton = document.querySelector("#bigbutton")

bigbutton.addEventListener("click", e => {
    console.log("Make it bigger!")
    bigbutton.classList.add("big")
})
let fancybutton = document.querySelector("#fancybutton")

fancybutton.addEventListener("click", e => {
    console.log("Make it fancy!")
    fancybutton.classList.add("fancy")
})
let negativebutton = document.querySelector("#negativebutton")

negativebutton.addEventListener("click", e => {
    console.log("Make it negative!")
    negativebutton.classList.add("negative")
})
let ownbutton = document.querySelector("#ownbutton")

ownbutton.addEventListener("click", e => {
    console.log("Make it your own!")
    ownbutton.classList.add("own")
})