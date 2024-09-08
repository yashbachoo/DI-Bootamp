console.log(typeof(15));
// Prediction:number
// Actual:number

console.log(typeof(5.5))
// Prediction:decimal number
// Actual:number

console.log(typeof(NaN))
// Prediction:not allowed number
// Actual:number

console.log(typeof("hello"))
// Prediction:string
// Actual:string

console.log(typeof(true))
// Prediction:boolean
// Actual:boolean

console.log(typeof(1 != 2))
// Prediction:boolean
// Actual:Boolean

console.log("hamburger" + "s")
// Prediction:string
// Actual:hamburgers

console.log("hamburgers" - "s")
// Prediction:hamburger
// Actual:hamburger

console.log("1" + "3")
// Prediction:13
// Actual:13

console.log("1" - "3")
// Prediction:-2
// Actual:-2

console.log("johnny" + 5)
// Prediction:johnny5
// Actual:johnny5

console.log("johnny" - 5)
// Prediction:NaN
// Actual:NaN

console.log(99 * "hello")
// Prediction:99hello
// Actual:NaN

console.log(1 != 1)
// Prediction:boolean
// Actual:false

console.log(1 == "1")
// Prediction:true
// Actual:true

console.log(1 === "1")
// Prediction:false
// Actual:false