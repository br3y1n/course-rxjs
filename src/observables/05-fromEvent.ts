import {fromEvent} from "rxjs";

// DOM events

const src1$ = fromEvent<MouseEvent>(document, "click")
const src2$ = fromEvent<KeyboardEvent>(document, "keyup")

const observer = {
    next: (value) => console.log(value)
}

src1$.subscribe(({x, y}) => {
        console.log(x)
        console.log(y)
    }
)
src2$.subscribe(({key}) => console.log("evento: ", key))