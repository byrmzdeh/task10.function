// 1.Verilmis arrayin icerisinde deyeri 45 olan elementin indexini tapan function.
function data(...params) {
    for (let i = 0; i < params.length; i++) {
        if (params[i] == 45) {
            return i
        }
    }
}
console.log(data(1, 23, 91, 17, 51, 6, 32, 45, 9, 10));




// 2. Verilmiş elementin bir ölçülü massivdə neçə dəfə təkrarlandığını tapan function tərtib edin.
let arr = [1, 5, 91, 17, 5, 6, 32, 5, 9, 10]
let num = 5
function tekrar(arr, num) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            count++
        }
    }
    return count

}
console.log(tekrar(arr, num));



// 3.arrayin  elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə qalan elementlərin cəmini tapan function.
let onearr = [2, 5, 12, 31, 3, 45, 71, 29, 1]
let max = onearr[0]
let min = onearr[0]
let sum = 0
function dataa(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < max) {
            max = arr[i]
        } else if (arr[i] > min) {
            min = arr[i]
        }
        sum = sum + arr[i]
    }
    sum = sum - max - min
    return sum
}
console.log(dataa(onearr));



