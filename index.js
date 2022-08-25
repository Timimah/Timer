let t
    let start = () =>{
        if(!t){
            t = setInterval(startTimer, 1000)
        }
    }

    let startTimer = () =>{
        if (seconds.innerHTML <= 60){
            seconds.innerHTML++
            if (seconds.innerHTML <= 9){
                seconds.innerHTML = '0' + seconds.innerHTML 
            }
        }
        if (minutes.innerHTML <= 60  && seconds.innerHTML == 60){
           minutes.innerHTML++
           seconds.innerHTML = '00'
           if (minutes.innerHTML <= 9){
                minutes.innerHTML = '0' + minutes.innerHTML 
            }
        }
        if (hours.innerHTML <= 24  && minutes.innerHTML == 60){
           hours.innerHTML++
           minutes.innerHTML = '00'
           if (hours.innerHTML <= 9){
                hours.innerHTML = '0' + hours.innerHTML 
            }
        } 
        if (hours.innerHTML == 24){
            alert("Timer complete")
            stopTimer()
        }   
        
    }

    stopTimer = () =>{
        clearInterval(t)
        stop_value.innerHTML += `${hours.innerHTML} : ${minutes.innerHTML} : ${seconds.innerHTML} | `
    }

    let reStart = () =>{
        seconds.innerHTML = '00'
        minutes.innerHTML = '00'
        hours.innerHTML = '00'
    }