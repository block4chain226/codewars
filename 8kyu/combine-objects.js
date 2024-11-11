//Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

function combine() {
    let newObj = {},
        tempObj = {};
    newObj = Object.assign({}, arguments[0]);
    for (let i = 0; i < arguments.length - 1; i++) {
        for (let keya in newObj) {
            for (let keyb in arguments[i + 1]) {
                if (keya === keyb) {
                    newObj[keya] = newObj[keya] + arguments[i + 1][keyb];
                }
                if (!newObj[keyb]) {
                    newObj[keyb] = arguments[i + 1][keyb];
                }
            }
        }
    }
    return newObj;
}