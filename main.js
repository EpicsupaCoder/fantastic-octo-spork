var input1=document.getElementById("paral_input_box_1").innerText;

var input2=document.getElementById("paral_input_box_2").innerText;

var input3=document.getElementById("paral_input_box_3").innerText;

var input4=document.getElementById("paral_input_box_4").innerText;

var input5=document.getElementById("paral_input_box_5").innerText;

var input6=document.getElementById("paral_input_box_6").innerText;

var inputfull

function getparagraph1() {
    
    inputfull=input1.concat(input2).concat(input3).concat(input4).concat(input5).concat(input6)

    console.log(inputfull)

}