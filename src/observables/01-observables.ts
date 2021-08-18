import {Observable, Observer} from "rxjs";

const observer: Observer<any>={
    next: value =>  console.log("next: ", value),
    error: error => console.warn("error: ", error),
    complete: () => console.info("complete"),
}


//const obs$ = Observable.create()
const obs$ = new Observable<string>(subs => {
    subs.next("hi")
    subs.next("world")
    subs.next("hi")

    // Error
    const a = undefined
    a.nombre = "test"

    subs.complete()

    subs.next("hi") // dont issue
})

// deprecated
// obs$.subscribe(
//     value => console.log("next: ", value),
//     error => console.log("error: ", error),
//     () => console.info("complete"),
// )

obs$.subscribe(observer)
