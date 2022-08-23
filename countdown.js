hours.focus()
let t
let start = () =>{
    seconds.disabled = 
    seconds.style.backgroundColor = "transparent"
    minutes.disabled = true
    minutes.style.backgroundColor = "transparent"
    hours.disabled = true
    hours.style.backgroundColor = "transparent"
    
    if(!t){
        t = setInterval(setTimeout(startCountDown, 1000), 1000)
    }
}

let startCountDown = () =>{
    if (seconds.value > 0){
        seconds.value--
        if (seconds.value <= 9){
            seconds.value = '0' + seconds.value 
        }
    }  
    
}

stopCountDown = () =>{
    clearInterval(t)
    stop_value.innerHTML += `${seconds.value} : ${minutes.value} : ${minutes.value} | `
}

// let reStart = () =>{
//     seconds.value = '00'
//     minutes.value = '00'
//     hours.value = '00'
// }