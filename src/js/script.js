



const burgerMenu = document.querySelector(".burgerMenu"),
    headerMenu = document.querySelector(".headerMenu")

burgerMenu.addEventListener("click", function () {
    let toggleSubMenu = headerMenu.classList.toggle("togglesSubMenu")
        if (toggleSubMenu){
            headerMenu.style.display = "block"
        } else {
            headerMenu.style.display = "none"
        }
})

const crossHelper = document.querySelector(".crossHelper"),
    message = document.querySelector(".message"),
    cirleFormButton = document.querySelector(".cirleFormButton"),
    crossCircle = document.getElementById("crossCircle"),
    circleForm = document.querySelector(".circleForm")


crossHelper.addEventListener("click", function(){
    message.style.display = "none"
    circleForm.style.display = "none"
})
cirleFormButton.addEventListener("click", function(){
    console.log("djshwkjh");
    message.style.display = "none"

    if (circleForm.style.display == "block") {
        circleForm.style.display = "none"
    } else {
        circleForm.style.display = "block"
    }

})
crossCircle.addEventListener("click", function(){
    circleForm.style.display = "none"
})

const number3 = document.getElementById("number3"),
    number2 = document.getElementById("number2")

let windowW = window.innerWidth
window.addEventListener("load", function(){
    if (windowW <= 991) {
        number3.textContent = "02"
        number2.textContent = "03"
    } else {
        number3.textContent = "03"
        number2.textContent = "02"
        
    }
})

const questions = document.querySelectorAll('.question')
const answers = document.querySelectorAll('.Answer')
const answerArrow = document.querySelectorAll('.answerArrow')

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {
        if (answers[i].style.display === 'none') {
            for (let j = 0; j < answers.length; j++) {
                answers[j].style.display = 'none'
                answerArrow[j].style.transform = 'rotate(0)'
            }
            answers[i].style.display = 'block'
            answerArrow[i].style.transform = 'rotate(-90deg)'
        } else {
            answers[i].style.display = 'none'
            answerArrow[i].style.transform = 'rotate(0)'
        }
    })
    answerArrow[i].addEventListener('click', () => {
        if (answers[i].style.display === 'none') {
            for (let j = 0; j < answers.length; j++) {
                answers[j].style.display = 'none'
                answerArrow[j].style.transform = 'rotate(0)'
                // answerArrow[i].style.top = '0'

            }
            answers[i].style.display = 'block'
            answerArrow[i].style.transform = 'rotate(-90deg)'
            answerArrow[i].style.top = '10rem'
        } else {
            answers[i].style.display = 'none'
            answerArrow[i].style.transform = 'rotate(0)'
            // answerArrow[i].style.top = '0'
        }
    })
}
    
const selectedFlag = document.querySelectorAll(".iti__selected-flag"),
    // CountryList = document.querySelectorAll(".iti__country-list"),
    itiCountry = [...document.querySelectorAll(".iti__country")],
    Flag = document.querySelectorAll(".Flag"),
    body = document.getElementById("body")
    earnA = document.getElementById("earnA")
    
    
    earnA.style.display = "none"
selectedFlag.forEach(selFlag => {
    selFlag.addEventListener("click", function(){
        console.log(this.nextElementSibling);
        if (this.nextElementSibling.classList.contains("iti__hide")) {
            this.nextElementSibling.classList.remove("iti__hide")
        } else {
            this.nextElementSibling.classList.add("iti__hide")
        }
        // if (this.querySelector(".iti__country-list").style.display == "block") {
        //     this.querySelector(".iti__country-list").style.display = "none"
        // } else {
        //     this.querySelector(".iti__country-list").style.display = "block"
        //     // earnA.style.display = "block"
        //     // earnA.addEventListener("click", function(e) {
        //     //     e.preventDefault()
        //     //     CountryList.style.display = "none"
        //     // })
        // }
    })
})

for (i = 0; i < itiCountry.length; i++){
    const itiFlag = [...document.querySelectorAll(".iti__flag")],
    countryName = [...document.querySelectorAll(".iti__country-name")],
    dialCode = [...document.querySelectorAll(".iti__dial-code")]
    let activeCode = document.querySelector(".ActiveCode")

    itiFlag.shift()
    itiFlag.shift()
    let addCo = itiFlag[i].classList[1],
        country = countryName[i].textContent,
        dial = dialCode[i].textContent,
        title = country + ": " + dial
    itiCountry[i].addEventListener("click", function(){
        // let activeCodeValue = activeCode.getAttribute("value")
        activeCode.value = dial
        Flag.forEach(flag => {
            flag.classList.remove(flag.classList[2]);
            flag.classList.add(addCo);
            flag.setAttribute("title", title)
            selectedFlag.forEach(selFlag => {
                selFlag.setAttribute("title", title)
                this.parentElement.classList.add("iti__hide")
            })
            earnA.style.display = "none"
        })
    })
}

const input = document.getElementById('name'),
    submit = document.getElementById('submitForm'),
    phone = document.getElementById("phone"),
    email = document.getElementById("email"),
    forma = document.getElementById("forma")

if (input.value == "") {
    input.addEventListener("change", function(e){
        const pattern = /[^0-9-_+=@#$%^&*(){}/.,?!\s"']/; // Regular expression
        const text = input.value; // Get the input text
        if (pattern.test(text)) {
            input.style.borderColor = ""; // Reset border color if valid
        } else {
            input.style.borderColor = "red"; // Change border color to red if invalid
            alert("Не коректне іʼмя")
        }

    })
}

