document.getElementById("btn").addEventListener("click", btnClicked)


function btnClicked() {
    //input
    let in1 =+ document.getElementById("in-1").value;
    let in2 =+ document.getElementById("in-2").value;
    let in3 =+ document.getElementById("in-3").value;
    let in4 =+ document.getElementById("in-4").value;
    let in5 =+ document.getElementById("in-5").value;

    let letter1 = document.getElementById("letter 1");
    let letter2 = document.getElementById("letter 2");
    let letter3 = document.getElementById("letter 3");
    let letter4 = document.getElementById("letter 4");
    let letter5 = document.getElementById("letter 5");

    let output = document.getElementById("output");
    let letterOutput = document.getElementById("letter output")

    //proccess
    letter1.innerHTML = getGrade(in1)
    letter2.innerHTML = getGrade(in2)
    letter3.innerHTML = getGrade(in3)
    letter4.innerHTML = getGrade(in4)
    letter5.innerHTML = getGrade(in5)

    let average = (in1 + in2 + in3 + in4 + in5)/5;

    //output
    letterOutput.innerHTML = getGrade(average)
    output.innerHTML = Math.round(average);



}

function getGrade(num){
    if (num >= 90)
        return "A"
    else if (num >= 75)
        return "B"
    else if (num >= 60)
        return "C"
    else if (num >= 50)
        return "D"
    else
        return "F"
    
}