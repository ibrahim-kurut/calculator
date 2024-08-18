let input2 = document.querySelector(".input2")

function appendNumber(number) {


    const input1 = document.getElementById('input1');
    if (input1.value === '0') {
        input1.value = number;
    } else {
        input1.value += number;
        console.log("input1  --> ", input1.value);


        input2.value = input1.value
        let input2_array = Array.from(input2.value)


        let last_element = input2_array[input2_array.length - 1]
        input2.value = last_element


    }
}

function appendOperator(operator) {
    const input1 = document.getElementById('input1');
    input1.value += operator;
}

function clearEntry() {
    const input1 = document.getElementById('input1');
    input1.value = input1.value.slice(0, -1);
}

function clearinput1() {
    document.getElementById('input1').value = '';
}

function calculate() {
    const input1 = document.getElementById('input1');
    try {
        input1.value = eval(input1.value);
        input2.value = ""
        if (input1.value === 'undefined') {
            input1.value = "enter a number"
        }

    } catch (error) {
        input1.value = 'Error';
    }
}
