let daynik = null
let knopka = document.querySelector(".knopka")
let daysdata = {}
let ypr = document.querySelector(".ypr")
if (localStorage.getItem("daysdata") !== null) {
    daysdata = JSON.parse(localStorage.getItem("daysdata"));
    listdays(daysdata)
    setTimeout(add_handler, 1000);
    setTimeout(add_handler_2, 1000);
}
let days = document.querySelector(".listday")
let training = document.querySelector(".training")



let text = document.querySelector(".textpole")

knopka.addEventListener("click", function () {
    if (text.value.length > 0) {
        daysdata[text.value] = []
        listdays(daysdata)
        text.value = ""
        localStorage.setItem("daysdata", JSON.stringify(daysdata))
        setTimeout(add_handler, 1000);
        setTimeout(add_handler_2, 1000);
    }

})
function listdays(masivdays) {
    let days = document.querySelector(".listday")
    days.innerHTML = ""
    for (let value in masivdays) {
        let day = document.querySelector(".day").cloneNode(true)
        day.style.display = "block"
        open = day.querySelector(".open_button")

        day.querySelector("p").innerHTML = value
        days.appendChild(day)
    }

}

function add_handler() {

    let days = document.querySelectorAll(".listday .delete_button")
    for (const day of days) {
        day.addEventListener("click", function () {
            console.log(day.parentNode)
            delete daysdata[day.parentNode.querySelector("p").innerHTML];
            localStorage.setItem("daysdata", JSON.stringify(daysdata))
            day.parentNode.remove()
            console.log(daysdata)
        })
    }
}

function add_handler_2() {
    let days = document.querySelectorAll(".listday .open_button")
    for (const day of days) {
        day.addEventListener("click", function () {
            daynik = day.parentNode.querySelector("p").innerHTML 
            m(daysdata[daynik])

            document.querySelector(".listday").style.display = "none"
            console.log(day.parentNode.innerHTML)
            console.log(day.parentNode.querySelector("p").innerHTML)
            training.style.display = "block"
            document.querySelector(".daysypr").innerHTML = daynik
        })
    }
}

let iwillback = document.querySelector(".iwillback")
iwillback.addEventListener("click", function () {
    training.style.display = "none"
    days.style.display = "block"



})
function m(day) {
    console.log(day)
    ypr.innerHTML = ""



    for (const upr of day) {
        let ypritem = document.querySelector(".ypritem").cloneNode(true)
    ypritem.style.display = "block"
        ypritem.querySelector("p").innerHTML = upr[0]

        ypritem.querySelector("img").setAttribute("src",upr[1])
        ypr.appendChild(ypritem)
    }


}
let add = document.querySelector(".poletext")
let img = document.querySelector(".textpolle")
let addbutton = document.querySelector(".addbutton")
addbutton.addEventListener("click", function () {
    daysdata[daynik].push([add.value, img.value])
    m(daysdata[daynik])
    localStorage.setItem("daysdata", JSON.stringify(daysdata))
    add.value = ""
    img.value = ""
}) 
