function onSubmit() {
    let century = parseInt(document.getElementById("century").value);
    let year = parseInt(document.getElementById("year").value);
    let month = parseInt(document.getElementById("month").value);
    let day= parseInt(document.getElementById("day").value);
   
};


function dayOfTheWeek();{
    let dotw = ((century/4) -2*century-1) +(5*year/4) + (26*(month+1)/10) + day )% 7;
    
    return dotw;    
};

