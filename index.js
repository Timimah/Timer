//alarm functions
let showClock = () =>{
    clock.style.display = "block"
    alarm.style.display = "none"
    countdown_timer.style.display = "none"
    stopwatch.style.display = "none"
}
let showAlarm = () =>{
    clock.style.display = "none"
    alarm.style.display = "block"
    countdown_timer.style.display = "none"
    stopwatch.style.display = "none"
}
let showTimer = () =>{
    clock.style.display = "none"
    alarm.style.display = "none"
    countdown_timer.style.display = "block"
    stopwatch.style.display = "none"
}
let showStopwatch = () =>{
    clock.style.display = "none"
    alarm.style.display = "none"
    countdown_timer.style.display = "none"
    stopwatch.style.display = "block"
}
let a_hours = alarm_hours.innerText
let a_minutes = alarm_minutes.innerText
let a_seconds = alarm_seconds.innerText
// let amPm = hourOftheDay.value
let increaseHours = () =>{
    if(a_hours >= 0 && a_hours < 12){
        // alert(a_hours)
        a_hours++
        alarm_hours.innerText = a_hours
    }
}
let decreaseHours = () =>{
    if(a_hours > 0 && a_hours <= 12){
    a_hours--
    alarm_hours.innerText = a_hours
    }
}
let increaseMinutes = () =>{
    if(a_minutes >= 0 && a_minutes < 59){
        a_minutes++
        alarm_minutes.innerText = a_minutes
    }
    if(a_minutes <= 9){
        a_minutes = '0' + a_minutes++
        alarm_minutes.innerText = a_minutes
    }
}
let increaseSeconds = () =>{
    if(a_seconds >= 0 && a_seconds < 59){
        a_seconds++
        alarm_seconds.innerText = a_seconds
    }
    if(a_seconds <= 9){
        a_seconds = '0' + a_seconds++
        alarm_seconds.innerText = a_seconds
    }
}
let decreaseMinutes = () =>{
    if(a_minutes > 0 && a_minutes <= 59){
        a_minutes--
        alarm_minutes.innerText = a_minutes
    }
    if(a_minutes <= 9){
        a_minutes = '0' + a_minutes--
        alarm_minutes.innerText = a_minutes
    }
}
let decreaseSeconds = () =>{
    if(a_seconds > 0 && a_seconds <= 59){
        a_seconds--
        alarm_seconds.innerText = a_seconds
    }
    if(a_seconds <= 9){
        a_seconds = '0' + a_seconds--
        alarm_seconds.innerText = a_seconds
    }
}

let cTime
let updateCurrentTIme = () =>{
    cTime = new Date()
    cTime = cTime.toLocaleTimeString('en-US');
    // let currentTime = cTime
    date_display.innerText = `${cTime}`
}
setInterval(updateCurrentTIme, 1000)
var alarm_list = [];

let setAlarm = () =>{
    let setAlarms = `${a_hours}:${a_minutes}:${a_seconds} ${hourOftheDay.value}`
    alarm_list.push(setAlarms);
    render();
}

let render = () =>{
    // rendering alarmlist
    document.getElementById('list').innerHTML='';
    for(let i=0;i<alarm_list.length;i++){
        addToDOM(alarm_list[i],i);
    }
}

let addToDOM = (element,i) =>{
    // displaying alarmlist values
    let x = document.createElement('li')
    x.innerHTML = `<span class="fs-1 text-light">${element} &nbsp;&nbsp;
    <input class="btn btn-secondary" type="button" value="Delete" id=${i} onclick="Delete(${i})"></span><br>`
    list.append(x)
}
let Delete = (id) =>{
    // console.log(id)
    alarm_list.splice(0,1)
    render()
}
// let questions = (  a = ;  a =;  a = ; T a =;  )
class Question{
    constructor(question,answer){
        this.question = question
        this.answer = answer
    }
}
var allQuestions = [new Question('If 1= 3, 2= 3, 3= 5,4= 4, 5= 4 then 6= ?', '3'), new Question('Which question is equivalent to 3 ^(4)/3^(2)?', '9'), new Question('There are 49 dogs signed up for a dog show. there are 36 more small dogs than large dogs. How many small dogs have signed up to compete?', '42.5'), new Question('Add 8.563 and 4.8292',  '13.3922'), new Question('I am an odd number, take away one letter an I become even. What number am I?', 'Seven'), new Question('Using only an addition, how can you add eight 8\'s and get the number 1000?', '888 + 88  + 8+ 8 + 8'), new Question('Which three numbers have the same answer whether they\'re added or multiplied together?', '1, 2, 3'), new Question('There is a three-digit number. The second digit is four times as big as the third digit, while the first digit is three less than the second digit. What is the number?', '141'), new Question('The day before yesterday, I was 5. The next year I will be 28. This is true only one day in a year what day is my birthday?', 'December 31'), new Question('How many feet are in a mile?', '5280'), new Question('Solve: -15+(-5x) = 0', '-3'), new Question('What is 1.92/3?', '0.64'), new Question('If 72x96 = 6927, 58x87 = 7885, then 79x86 = ?', '6897'), new Question('Consider: 36, 34,30,28,24, ... What number should come next?', '22'), new Question('Consider: 22, 21, 23, 22, 24, 23, ... What number shouldcome next?', '25'), new Question('Consider: 53,53, 40, 40, 27, 27, ... What number should come next?', '14')]
console.log(allQuestions)
let displayQuestions = () => {
    allQuestions.filter((value,index,array) =>{
        let random_question = array[Math.floor(Math.random() * array.length)]
        // console.log(random_question, value)
        document.getElementById('disp_questions').innerText = `${value.question}`
    })
}
let checkAlarm = () =>{
    alarm_list.map((element, index) =>{
        if(element == cTime){
            let timeUp = new Audio('Audio/Annoying_Alarm_Clock-UncleKornicob-420925725.mp3')
            timeUp.play()
            displayQuestions()
            window.alert("Wake Up!");
            Delete(index);
            render();
        }
        // console.log(element, index)
        // console.log(cTime)
    })
}

setInterval(checkAlarm, 1000)
// end of alarm functions

//clock function
let date = new Date()
let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()
let minute = date.getMinutes()
let hour = date.getHours()

let displayTime = () =>{
    let currentTime = new Date()
    currentTime = currentTime.toLocaleTimeString('en-US')
    if(month == 0){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">January ${day} , ${year} </p> ${currentTime} </br>`
    }
    else if(month == 1){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">February ${day} , ${year} </p> ${currentTime} </br>`
    }
    else if(month == 2){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">March ${day} , ${year} </p> ${currentTime} </br>`
    }
    else if(month == 3){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">April ${day} , ${year} </p> ${currentTime} </br>`
    }
    else if(month == 4){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">May ${day} , ${year} </p> ${currentTime} </br>`
    }
    else if(month == 5){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">June ${day} , ${year} </p> ${currentTime} </br>`
    }
    else if(month == 6){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">July ${day} , ${year} </p> ${currentTime} </br>`
    }
    else if(month == 7){
            document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">August ${day} , ${year} </p> ${currentTime} </br>`
    }
    else if(month == 8){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">September ${day} , ${year} </p> ${currentTime} </br>`
    }
    else if(month == 9){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">October ${day} , ${year} </p> ${currentTime} </br>`
    }
    else if(month == 10){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">November ${day} , ${year} </p> ${currentTime} </br>`
    }
    else if(month == 11){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">December ${day} , ${year} </p> ${currentTime} </br>`
    }
}
setInterval(displayTime, 1000)
//end of clock function


//countdowntimer functions
cseconds.disabled = false
cminutes.disabled = false
chours.disabled = false
cseconds.value = '00'
cminutes.value = '00'
chours.value = '00'

chours.focus()
let s
let start_counting = () =>{
    cseconds.disabled = true
    // cseconds.style.backgroundColor = "transparent"
    cseconds.style.border = "none"
    cminutes.disabled = true
    // cminutes.style.backgroundColor = "transparent"
    cminutes.style.border = "none"
    chours.disabled = true
    // chours.style.backgroundColor = "transparent"
    chours.style.border = "none"
    if(!s){
        s = setInterval(startCountDown, 1000)
    }
}

let startCountDown = () =>{
    // alert()
    if (cseconds.value > 0){
        cseconds.value--
        if (cseconds.value <= 9){
            cseconds.value = '0' + cseconds.value 
        }
    }
    if (cseconds.value == 0 && cminutes.value > 0){
        cminutes.value--
        cseconds.value = 59
        if (cminutes.value <= 9){
            cminutes.value = '0' + cminutes.value 
        }
    
    }
    if (cminutes.value == 0 && chours.value > 0){
        chours.value--
        cseconds.value = 59
        if (chours.value <= 9){
            chours.value = '0' + chours.value 
        }
    }
    if (chours.value == 00 && cminutes.value == 00 && cseconds.value == 00){
        // stop_value.innerHTML += `Countdown completed`
        clearInterval(s)
    }    
}

let stopCountDown = () =>{
    clearInterval(s)
    cseconds.value = '00'
    cminutes.value = '00'
    chours.value = '00'
}

let reStartcountDown = () =>{
    // clearInterval(s)
    cseconds.disabled = false
    cminutes.disabled = false
    chours.disabled = false
    // if(cseconds.value > 0 || cminutes.value > 0 || chours.value > 0){
    //     // start_counting()
    //     alert()
    // }
}
//end of countdown timer function

//stopwatch functions
// let swsec = document.getElementById("seconds_sw").innerText
// let swmin = document.getElementById("minutes_sw").innerText
// let swhour = document.getElementById("seconds_sw").innerText
let t
function startStopwatch()
{
    if(!t)
    {
        t = setInterval(startTimer, 10);
    }
    
}
let startTimer = () =>{
    // alert()
    if(stopwatch_milsec.innerHTML <= 99){
        stopwatch_milsec.innerHTML++
        if(stopwatch_milsec.innerHTML <= 9){
            stopwatch_milsec.innerHTML = '0' + stopwatch_milsec.innerHTML++
        }  
    }
    if(stopwatch_sec.innerHTML <= 59 && stopwatch_milsec.innerHTML == 99){
        stopwatch_milsec.innerHTML = '00'
        stopwatch_sec.innerHTML++
        if(stopwatch_sec.innerHTML <= 9){
            stopwatch_sec.innerHTML = '0' + stopwatch_sec.innerHTML++
        }
    }
    if(stopwatch_min.innerHTML <= 59 && stopwatch_sec.innerHTML == 59){       
        stopwatch_sec.innerHTML = '00';
        stopwatch_min.innerHTML++;
        if (stopwatch_min.innerHTML <= 9){
            stopwatch_min.innerHTML = '0' + stopwatch_min.innerHTML++
        }
    }
    if(stopwatch_hr.innerHTML <= 59 && stopwatch_min.innerHTML == 59){       
        stopwatch_hr.innerHTML = '00'
        stopwatch_hr.innerHTML++;
        if (stopwatch_hr.innerHTML <= 9){
            stopwatch_hr.innerHTML = '0' + stopwatch_hr.innerHTML++
        }
    } 
}



let restartstopWatch = () =>{
    stopwatch_hr.innerHTML = '00'
    stopwatch_min.innerHTML = '00'
    stopwatch_sec.innerHTML = '00'
    stopwatch_milsec.innerHTML = '00'
    // startCountDown()
}

let stopStopwatch = ()=>{
    stop_value.innerHTML += `${stopwatch_hr.innerHTML} : ${stopwatch_min.innerHTML} : ${stopwatch_sec.innerHTML} : ${stopwatch_milsec.innerHTML}<br>`
    clearInterval(t)
}

// function pause()
// {
//     clearInterval(t);
// }