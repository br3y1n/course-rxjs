import {of} from "rxjs";

const obs$ = of<number[]>(1, 2, 3, 4, 5, 6)

console.log("start")

obs$.subscribe(
    next => console.log("next: ", next),
    null,
    () => console.log("complete")
)
