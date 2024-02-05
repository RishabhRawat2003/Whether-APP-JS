/*
let input = "new delhi" //prompt("Enter Your State !!") We Can also take the input from the user.
let fistLetter = input.charAt(0).toUpperCase()
let remainingLetter = input.slice(1,)
let state = fistLetter + remainingLetter
place.innerHTML = state
let option = {
    method: "Get",
    headers: { 'X-Api-Key': 'DYpjfqjIf1ji0BVPLasKCQ==7nnITdeJ5M6W7ORt' },
}
fetch(`https://api.api-ninjas.com/v1/weather?city=${state}`, option)
    .then((resp) => resp.json())
    .then((value) => {
        inputInfo.classList.add("permanentInfoDisplay")
        place.innerHTML = state
        temperature.innerHTML = value.temp + "\u00B0C"
        maxTemp2.innerHTML = value.max_temp
        minTemp2.innerHTML = value.min_temp
        humidity2.innerHTML = value.humidity
        windSpeed2.innerHTML = value.wind_degrees
        windDegree2.innerHTML = value.wind_speed
    })
*/


const logoRefr = document.querySelector("#logo")
const place = document.querySelector(".place")
const temperature = document.querySelector(".permntTempShow")
const maxTemp2 = document.querySelector(".maxTemp2")
const minTemp2 = document.querySelector(".minTemp2")
const humidity2 = document.querySelector(".humidity2")
const windSpeed2 = document.querySelector(".windSpeed2")
const windDegree2 = document.querySelector(".windDegree2")
const inputInfo = document.querySelector(".prmntInfo")
const inputField = document.querySelector("#inputField")
const bgImageChanger = document.querySelector(".bgImg")
const displayInfo = document.querySelector(".display")
const btn = document.querySelector(".btn")
const loading = document.querySelector(".loading")


const maxTemp = document.querySelector(".maxTemp")
const minTemp = document.querySelector(".minTemp")
const humidity = document.querySelector(".humidity")
const windSpeed = document.querySelector(".windSpeed")
const windDegree = document.querySelector(".windDegree")
const place2 = document.querySelector(".location")
const mainTemp = document.querySelector(".temp")
const imgChange = document.querySelector(".imgSrc")




inputField.addEventListener("keyup", function (e) {
    e.preventDefault()
    if (e.key === "Enter") {
        let fistLetter = inputField.value.charAt(0).toUpperCase()
        let remainingLetter = inputField.value.slice(1,)
        let state2 = fistLetter + remainingLetter
        let city = state2
        let option = {
            method: "Get",
            headers: { 'X-Api-Key': 'DYpjfqjIf1ji0BVPLasKCQ==7nnITdeJ5M6W7ORt' },
        }
        fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, option)
            .then((resp) => resp.json())
            .then((value) => {
                if (value.error) {
                    alert("We Don't Have Whether Details of This Place.May Be You Have Entered Invaild Country or May Be Make Some Typing Mistakes !")
                    console.log(value.error)
                } else {
                    bgImageChanger.classList.add("bgImgDisplay")
                    displayInfo.classList.add("displayShow")
                    place2.innerHTML = city
                    mainTemp.innerHTML = `Temp : ${value.temp} \u00B0C`
                    maxTemp.innerHTML = value.max_temp
                    minTemp.innerHTML = value.min_temp
                    humidity.innerHTML = value.humidity
                    windDegree.innerHTML = value.wind_degrees
                    windSpeed.innerHTML = value.wind_speed
                    if (value.temp <= -1) {
                        imgChange.setAttribute("src", "Images/snow2.png")
                    }
                    else if (value.temp <= 20 && value.temp >= 0) {
                        imgChange.setAttribute("src", "Images/cloudy2.png")
                    }
                    else if (value.temp > 20 && value.temp <= 50) {
                        imgChange.setAttribute("src", "Images/sun2.png")
                    }
                    else if (value.temp <= 20) {
                        imgChange.setAttribute("src", "Images/cloudy2.png")
                    }
                    else if (value.temp <= 20) {
                        imgChange.setAttribute("src", "Images/cloudy2.png")
                    }
                }
            })
        inputField.value = ""
    }
})



btn.addEventListener("click", function (e) {
    e.preventDefault()
    btn.classList.add("btnHide")
    loading.classList.add("loadingShow")
    navigator.geolocation.getCurrentPosition(position => {
        let { latitude, longitude } = position.coords
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
            .then(resp => resp.json())
            .then(value => {
                let input = value.address.state //prompt("Enter Your State !!") We Can also take the input from the user.
                let fistLetter = input.charAt(0).toUpperCase()
                let remainingLetter = input.slice(1,)
                let state = fistLetter + remainingLetter
                const place = document.querySelector(".place")

                place.innerHTML = state
                let option = {
                    method: "Get",
                    headers: { 'X-Api-Key': 'DYpjfqjIf1ji0BVPLasKCQ==7nnITdeJ5M6W7ORt' },
                }
                fetch(`https://api.api-ninjas.com/v1/weather?city=${state}`, option)
                    .then((resp) => resp.json())
                    .then((value) => {
                        loading.classList.remove("loadingShow")
                        inputInfo.classList.add("permanentInfoDisplay")
                        place.innerHTML = state
                        temperature.innerHTML = value.temp + "\u00B0C"
                        maxTemp2.innerHTML = value.max_temp
                        minTemp2.innerHTML = value.min_temp
                        humidity2.innerHTML = value.humidity
                        windDegree2.innerHTML = value.wind_degrees
                        windSpeed2.innerHTML = value.wind_speed
                    })
            })
    })

})


logoRefr.addEventListener("click", function(e){
    e.preventDefault()
    window.location.reload()
})