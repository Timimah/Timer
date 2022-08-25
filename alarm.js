getCurrentTime = () =>{
    let currentTime=new Date();
    currentTime=currentTime.toLocaleTimeString('en-US');
    date_display.innerHTML = currentTime
}
    setInterval(getCurrentTime, 1000)