let IbsInput = document.getElementById("LSBInput");
let GramsOutput = document.getElementById("gramsOutput");
let kgOutput = document.getElementById("kgOutput");
let ozOutput =document.getElementById("ozOutput");
let output = document.getElementById("output");

output.style.display =" none "
IbsInput.addEventListener("input", calcalations);

function calcalations(e)
{
    output.style.display ="block"
    let lbs = e.target.value;
    GramsOutput.innerHTML = lbs/0022046;
    kgOutput.innerHTML = (lbs/2.2046).toFixed(2);
    ozOutput.innerHTML = (lbs*16).toFixed(2);

    ;
}