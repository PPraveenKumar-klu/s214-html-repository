console.log("you can see this message in console");




function getValues()
{

    const name1 = document.getElementById("name1").value;
    const age = document.getElementById("age").value;
    document.q
    
    if(age >=18 ){
        document.writeln(`Your name is ${name1} and you are eligible to vote`);
    }
    else{
        document.writeln(`Your name is ${name1} and you are not eligible to vote`);
    }
}



function addNumbers(){
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;

    let sum = parseInt(number1) + parseInt(number2);
    // window.alert(sum);
    document.getElementById("result").innerHTML = sum;
}
