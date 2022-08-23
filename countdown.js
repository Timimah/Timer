seconds.disabled = false
minutes.disabled = false
hours.disabled = false

hours.focus()
let t
let start = () =>{
    seconds.disabled = true
    // seconds.style.backgroundColor = "transparent"
    seconds.style.border = "none"
    minutes.disabled = true
    // minutes.style.backgroundColor = "transparent"
    minutes.style.border = "none"
    hours.disabled = true
    // hours.style.backgroundColor = "transparent"
    hours.style.border = "none"
    if(!t){
        t = setInterval(startCountDown, 1000)
    }
}

let startCountDown = () =>{
    if (seconds.value > 0){
        seconds.value--
        if (seconds.value <= 9){
            seconds.value = '0' + seconds.value 
        }
    }
    if (seconds.value == 0 && minutes.value > 0){
        minutes.value--
        seconds.value = 59
        if (minutes.value <= 9){
            minutes.value = '0' + minutes.value 
        }
    
    }
    if (minutes.value == 0 && hours.value > 0){
        hours.value--
        seconds.value = 59
        if (hours.value <= 9){
            hours.value = '0' + hours.value 
        }
    }
    if (hours.value == 00 && minutes.value == 00 && seconds.value == 00){
        stop_value.innerHTML += `Countdown completed`
        clearInterval(t)
    }    
}

stopCountDown = () =>{
    clearInterval(t)
    stop_value.innerHTML += `Countdown completed`
}

let reStart = () =>{
    seconds.value = '00'
    minutes.value = '00'
    hours.value = '00'
    console.log(seconds.disabled);
    seconds.disabled = false
    seconds.style.backgroundColor = "#7c7c7c"
    seconds.style.border = "none"
    minutes.disabled = false
    hours.disabled = false

}