let t
    let start = () =>{
        if(!t){
            t = setInterval(startTimer, 1000)
        }
    }

    let startTimer = () =>{
        if (seconds.value <= 60){
            seconds.value++
            if (seconds.value <= 9){
                seconds.value = '0' + seconds.value 
            }
        }
        if (minutes.value <= 60  && seconds.value == 60){
           minutes.value++
           seconds.value = '00'
           if (minutes.value <= 9){
                minutes.value = '0' + minutes.value 
            }
        }
        if (hours.value <= 24  && minutes.value == 60){
           hours.value++
           minutes.value = '00'
           if (hours.value <= 9){
                hours.value = '0' + hours.value 
            }
        } 
        if (hours.value == 24){
            alert("Timer complete")
            stopTimer()
        }   
        
    }

    stopTimer = () =>{
        clearInterval(t)
        stop_value.innerHTML += ` ${hours.value} : ${minutes.value} : ${seconds.value}| `
    }

    let reStart = () =>{
        seconds.value = '00'
        minutes.value = '00'
        hours.value = '00'
    }