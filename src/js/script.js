



const burgerMenu = document.querySelector(".burgerMenu"),
    headerMenu = document.querySelector(".headerMenu"),
    headerMenuLi = document.querySelectorAll(".headerMenu li")

burgerMenu.addEventListener("click", function () {
    let toggleSubMenu = headerMenu.classList.toggle("togglesSubMenu"),
        toggleBurgerMenu = burgerMenu.classList.toggle("togglesBurgerMenu")

})

headerMenuLi.forEach(li => {
    li.addEventListener("click", function(){
        headerMenu.classList.remove("togglesSubMenu")
        burgerMenu.classList.remove("togglesBurgerMenu")
    })
})

const crossHelper = document.querySelector(".crossHelper"),
    message = document.querySelector(".message"),
    cirleFormButton = document.querySelector(".cirleFormButton"),
    crossCircle = document.getElementById("crossCircle"),
    circleForm = document.querySelector(".circleForm")

message.addEventListener("click", function(){
    message.style.display = "none"
    circleForm.style.display = "block"
})
crossHelper.addEventListener("click", function(){
    message.style.display = "none"
    circleForm.style.display = "none"
})
cirleFormButton.addEventListener("click", function(){
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

const questions = document.querySelectorAll('.answer>div')
const answers = document.querySelectorAll('.Answer')
const answerArrow = document.querySelectorAll('.answerArrow')

for (let i = 0; i < questions.length; i++) {
    for (let j = 0; j < answers.length; j++) {
        answers[j].style.display = 'none'
        answerArrow[j].style.transform = 'rotate(0)'
    }
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
}
    
const selectedFlag = document.querySelectorAll(".iti__selected-flag"),
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

let inputName = document.querySelectorAll('.formName'),
    submit = document.getElementById('submitForm'),
    phone = document.querySelectorAll("#phone"),
    email = document.getElementById("email"),
    forma = document.getElementById("forma")

phone.forEach(tel => {
    tel.addEventListener('input', function(event) {
      const inputValue = this.value;
      const allowedChars = /[0-9]/; // Дозволені символи (цифри)
      for (let i = 0; i < inputValue.length; i++) {
        const char = inputValue[i];
        if (!allowedChars.test(char)) {
          // Видалити недозволений символ
          this.value = inputValue.slice(0, i) + inputValue.slice(i + 1);
          break; // Зупинити цикл, якщо знайдено недозволений символ
        }
      }
    });
})
inputName.forEach(nameInput => {
    nameInput.addEventListener('input', function(event) {
      const inputValue = this.value;
      const allowedChars = /[^0-9-_+=@#$%^&*(){}/.,?!\s"']/; // Дозволені символи (букви українського та латинського алфавітів)
    
      for (let i = 0; i < inputValue.length; i++) {
        const char = inputValue[i];
        if (!allowedChars.test(char)) {
          // Видалити недозволений символ
          this.value = inputValue.slice(0, i) + inputValue.slice(i + 1);
          break; // Зупинити цикл, якщо знайдено недозволений символ
        }
      }
    });
})

const privacy = document.querySelector(".privacy"),
    privacyBg = document.querySelector(".privacy-bg")
    crossPrivacy = document.querySelector(".crossFooter"),
    privacyButton = document.querySelector(".privacyButton")


crossPrivacy.addEventListener("click", function(){
    privacy.style.display = "none"
    privacyBg.style.display = "none"
})

privacyButton.addEventListener("click", function(){
    privacy.style.display = "block"
    privacyBg.style.display = "block"
})