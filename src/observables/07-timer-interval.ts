import {interval, timer} from "rxjs";

const observer = {
    next: (val) => console.log("next:", val),
    complete: () => console.log("complete")
}

const today5s = new Date()
today5s.setSeconds(today5s.getSeconds() + 5)

const interval$ = interval(1000)

// const timer$ = timer(2000) //delay
// const timer$ = timer(2000,1000)// delay and interval
const timer$ = timer(today5s)


console.log("Start")
// interval$.subscribe(observer)
timer$.subscribe(observer)
console.log("End")