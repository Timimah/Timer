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
    if(a_hours >= 0 && a_hours < 24){
        // alert(a_hours)
        a_hours++
        alarm_hours.innerText = a_hours
    }
}
let decreaseHours = () =>{
    if(a_hours > 0 && a_hours <= 24){
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
    x.innerHTML = `<span>${element} </span>&nbsp;&nbsp;
    <input class="btn btn-secondary p-0" type="button" value="Delete" id=${i} onclick="Delete(${i})">`
    x.innerHTML += `<br><br>`
    list.append(x)
}
let Delete = (id) =>{
    // console.log(id)
    alarm_list.splice(0,1)
    render()
}
let checkAlarm = () =>{
    alarm_list.map((element, index) =>{
        if(element == cTime){
            let timeUp = new Audio('Audio/Annoying_Alarm_Clock-UncleKornicob-420925725.mp3')
            timeUp.play()
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
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">${day}st , January, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 1){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">${day}nd , February, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 2){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">${day}rd , March, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 3){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">${day}th , April, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 4){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">${day}th , May, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 5){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">${day}th , June, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 6){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">${day}th , July, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 7){
            document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">${day}th , August, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 8){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">${day}th , September, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 9){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">${day}th , October, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 10){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">${day}th , November, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 11){
        document.getElementById("clockDate_display").innerHTML = `<p class="fs-1">${day}th , December, ${year} </p> ${currentTime} </br>`
    }
}
setInterval(displayTime, 1000)
//end of clock function


//countdowntimer functions
cseconds.disabled = false
cminutes.disabled = false
chours.disabled = false

// chours.focus()
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
    stop_value.innerHTML += `Countdown completed`
}

let reStartcountDown = () =>{
    cseconds.value = '00'
    cminutes.value = '00'
    chours.value = '00'
    console.log(cseconds.disabled);
    cseconds.disabled = false
    cseconds.style.backgroundColor = "#7c7c7c"
    cseconds.style.border = "none"
    cminutes.disabled = false
    chours.disabled = false

}
//end of countdown timer function

//alarm functions