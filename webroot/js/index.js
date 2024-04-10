"use strict";
let test = "here we go again";
function testingFunction(test) {
    test = 'rename';
    return 1;
}
if (testingFunction('lala') == 1) {
    console.log(test);
}
