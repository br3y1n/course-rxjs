import {Observable, Observer} from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("next: ", value),
    error: error => console.warn("error: ", error),
    complete: () => console.info("complete"),
}

const intervalo$ = new Observable<number>(subs => {

    // create a counter, 1,2,3,4,5,6,7...
    let counter: number = 0

    const interval = setInterval(() => {
        subs.next(++counter)
        console.log(counter)
    }, 1000)

    setTimeout(() => {
        subs.complete()
    }, 2500)

    return () => {
        clearInterval(interval)
        console.log("Destroy")
    }
})


const subscription1 = intervalo$.subscribe(observer)
const subscription2 = intervalo$.subscribe(observer)
const subscription3 = intervalo$.subscribe(observer)

subscription1.add(subscription2)
subscription1.add(subscription3)

setTimeout(() => {
    subscription1.unsubscribe()
    // subscription2.unsubscribe()
    // subscription3.unsubscribe()

    console.log("Time out finish")
}, 3000)
