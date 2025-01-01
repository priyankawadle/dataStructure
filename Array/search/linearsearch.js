function searchElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            return i;
        }
    }
}
let arr = [10, 11, 20, 30, 40]
console.log(searchElement(arr, 40))
//in-build function
console.log(arr.indexOf(40))
