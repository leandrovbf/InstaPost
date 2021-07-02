const Timer = {
    time: 0.1 * 60, //transformando minutos em segundos
    currentTime: 0, 
    init() {
        Timer.currentTime = Timer.time
        setInterval(Timer.countdown,1000)//um segundo
    }, 


    countdown(){
        Timer.currentTime = Timer.currentTime - 1
        console.log( Timer.currentTime )
    }
}


export { Timer}