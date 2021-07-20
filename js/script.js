let dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
let femaleNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",]


function getUserData() {

    day = document.getElementById("day").value
    month = document.getElementById("month").value
    year = document.getElementById("year").value
    gender = document.getElementById("gender").value


    CC=parseInt(year.slice(0,2));
    YY=parseInt(year.slice(2,4));
    MM=parseInt(month);
    DD=parseInt(day);


    d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
    d = Math.floor(d)
    console.log(d)
    }

    function assignAkanName(){
        if (gender == "female")
        
        document.getElementById("output").innerHTML = "Your akan name is " + femaleNames[d] + " because you were born on " + dayNames[d]+"."
        
        else if (gender == "male")
        document.getElementById("output").innerHTML ="Your akan name is " + maleNames[d] + " because you were born on " + dayNames[d]+"."

  } 
    

function validate() {
    let day = document.getElementById("day").value
    let month = document.getElementById("month").value
    let year = document.getElementById("year").value
    let gender = document.getElementById("gender").value
     
    if (day <1 || day > 31){
    alert("Please enter a valid date");
    }
    else if (month <1 || month > 12){
    alert("please enter a valid month");
    }
    else { 
        getUserData()
        assignAkanName()
    }  

}





