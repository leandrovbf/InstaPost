import {View} from './View.js';


const Timer = {
    time: 0.1 * 60, //transformando minutos em segundos
    currentTime: 0,
    interval: null,

    timeToMinutes : time => Math.floor(time / 60),
    timeToSeconds : time => time % 60,  
    formatTime: time => String(time).padStart(2,'0'),//quando tiver menos de dois caracteres ele adiciona o "0" na frente


    init() {
        Timer.currentTime = Timer.time
        Timer.interval = setInterval(Timer.countdown, 1000)//um segundo
        /*
        View.render({
            minutes: "25",
            seconds: "00" 
        })
        */
       
    },
    
    countdown() {
        Timer.currentTime = Timer.currentTime - 1


        const minutes = Timer.timeToMinutes(Timer.currentTime)
        const seconds = Timer.timeToSeconds(Timer.currentTime)

        //console.log(Timer.currentTime)
        console.log(Timer.formatTime(minutes), ":", Timer.formatTime(seconds))      

        if (Timer.currentTime === 0) {
            clearInterval(Timer.interval)
            return;
        }
    }
}


export { Timer }