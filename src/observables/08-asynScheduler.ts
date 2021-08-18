import {asyncScheduler, SchedulerAction} from "rxjs";

// setTimeout(()=>{},3000)
// setTimeout(()=>{},3000)

const greet = () => console.log("hola mundo")
const greet2 = (name) => console.log(`hola ${name}`)

// asyncScheduler.schedule(greet, 2000) // as timeout
// asyncScheduler.schedule(greet2, 2000, "El brayan") // as timeout with params

const counter = function (this: SchedulerAction<number>, state) {
    console.log("state:", state)
    this.schedule(state + 1, 1000)
}

const subs = asyncScheduler.schedule(counter, 3000, 0) // as interval

// setTimeout(()=>{
//     subs$.unsubscribe()
// },6000)

asyncScheduler.schedule(() => subs.unsubscribe(), 6000)