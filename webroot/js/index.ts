
let test: string = "here we go again";

function testingFunction(test: string): number {
    test = 'rename';
    return 1;
}

if (testingFunction('lala') == 1) {
    console.log(test);
}