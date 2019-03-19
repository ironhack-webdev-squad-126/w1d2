// const tvPrice = calcPrice(999, 30, 19, function() {
//     console.log('Are we done yet?')
// })
// const suitcase = calcPrice(249, 10, 0)
// console.log('tvPrice :', tvPrice)
// console.log('suitcase :', suitcase)

// function calcPrice(price, discount, vat, callback) {
//     console.log('Start calculating')
//     const discountedPrice = price - price * (discount / 100)
//     const finalPrice = discountedPrice * ((100 + vat) / 100)
//     console.log('Finished calculating')
//     if (callback) callback()
//     return finalPrice.toFixed(2)
// }

// setTimeout(function() {
//     console.log('Hello')
// }, 3000)

// setInterval(function() {
//     console.log('Hello')
// }, 3000)

const arEx = [[[[[[[[[[['!']]]]]]]]]]]
const arExTwo = [[[[['!']]]]]
const arExThree = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[['!']]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

function extractEx(arr, count = 0) {
    if (count > 30) throw new Error('Too deep inside recursion')
    if (arr === '!') return [arr, count]
    else {
        return extractEx(arr[0], count + 1)
    }
}

console.log(extractEx(arEx))
console.log(extractEx(arExTwo))
console.log(extractEx(arExThree))
