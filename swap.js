
function swapVariables() {

    let var1 = document.getElementById('variable1').value;
    var var2 = document.getElementById('variable2').value;

    // Swap values
    const temp = var1;

    var1 = var2;

    var2 = temp;


    document.getElementById('firstvariable').innerHTML = var1;

    document.getElementById('secondvariable').innerText = var2;
}

