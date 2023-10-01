input = document.querySelector('.input')
btn = document.querySelector('.btn')
var element1 = document.querySelector('.first');
var element2 = document.querySelector('.second');
var element3 = document.querySelector('.third');
var element4 = document.querySelector('.fourth');
var element5 = document.querySelector('.fifth');
var element6 = document.querySelector('.sixth');
var element7 = document.querySelector('.seventh');
var element8 = document.querySelector('.eighth');
var element9 = document.querySelector('.ninth');
var element10 = document.querySelector('.tenth');

var num = 0;

var getValue = () => {
    var value = input.value;
    return value;
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    var value = getValue(); // Get the value here
    main(value); // Pass it to the main function
});

var main = (value) => { // Accept value as a parameter
    var results = []; // Array to store multiplication results

    for (num = 1; num <= 10; num++) {
        var multiplication = value * num;
        results.push(multiplication);
        console.log(value + " x " + num + " = " + multiplication);
    }
    element1.innerHTML = value+ "x"+ 1 + "=" + results[0]
    element2.innerHTML = value + "x" + 2 + "=" + results[1]
    element3.innerHTML = value + "x" + 3 + "=" + results[2]
    element4.innerHTML = value + "x" + 4 + "=" + results[3]
    element5.innerHTML = value + "x" + 5 + "=" + results[4]
    element6.innerHTML = value + "x" + 6 + "=" + results[5]
    element7.innerHTML = value + "x" + 7 + "=" + results[6]
    element8.innerHTML = value + "x" + 8 + "=" + results[7]
    element9.innerHTML = value + "x" + 9 + "=" + results[8]
    element10.innerHTML = value + "x" + 10 + "=" + results[9]


}

