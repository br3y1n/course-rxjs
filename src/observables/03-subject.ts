import {Observable, Observer, Subject} from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("next: ", value),
    error: error => console.warn("error: ", error),
    complete: () => console.info("complete"),
}

const intervalo$ = new Observable<number>(subs => {

        const interval = setInterval(() => {
            subs.next(Math.random())
        }, 1000)

        return () => {
            clearInterval(interval)
            console.log("destroy")
        }
    }
)

/**
 * 1- casteo multiple
 * 2- Es un observer
 * 3- next, error y complete
 */

const subject$ = new Subject()
const subs = intervalo$.subscribe(subject$)

// const subs1 = intervalo$.subscribe(rnd => console.log("subs 1:", rnd))
// const subs2 = intervalo$.subscribe(rnd => console.log("subs 2:", rnd))

 const subs1 = subject$.subscribe(observer)
const subs2 = subject$.subscribe(observer)

setTimeout(()=>{
    subject$.next(10)
    subject$.complete() // completa subs1 y subs2
    subs.unsubscribe() // quita el suscribe de intervalo$

},3500)