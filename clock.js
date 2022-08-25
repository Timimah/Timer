date = new Date()
day = date.getDate()
month = date.getMonth()
year = date.getFullYear()
minute = date.getMinutes()
hour = date.getHours()

getCurrentTime = () =>{
    let currentTime = new Date()
    currentTime = currentTime.toLocaleTimeString('en-US')
    if(month == 0){
        document.getElementById("date_display").innerHTML = `<p class="fs-1">${day}st , January, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 1){
        document.getElementById("date_display").innerHTML = `<p class="fs-1">${day}nd , February, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 2){
        document.getElementById("date_display").innerHTML = `<p class="fs-1">${day}rd , March, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 3){
        document.getElementById("date_display").innerHTML = `<p class="fs-1">${day}th , April, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 4){
        document.getElementById("date_display").innerHTML = `<p class="fs-1">${day}th , May, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 5){
        document.getElementById("date_display").innerHTML = `<p class="fs-1">${day}th , June, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 6){
        document.getElementById("date_display").innerHTML = `<p class="fs-1">${day}th , July, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 7){
            document.getElementById("date_display").innerHTML = `<p class="fs-1">${day}th , August, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 8){
        document.getElementById("date_display").innerHTML = `<p class="fs-1">${day}th , September, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 9){
        document.getElementById("date_display").innerHTML = `<p class="fs-1">${day}th , October, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 10){
        document.getElementById("date_display").innerHTML = `<p class="fs-1">${day}th , November, ${year} </p> ${currentTime} </br>`
    }
    else if(month == 11){
        document.getElementById("date_display").innerHTML = `<p class="fs-1">${day}th , December, ${year} </p> ${currentTime} </br>`
    }
}
setInterval(getCurrentTime, 1000)