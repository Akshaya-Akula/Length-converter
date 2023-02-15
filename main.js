var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType= document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var optionfrom,optionto;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

optionfrom=inputType.value
optionto=resultType.value

function myResult(){

    optionfrom=inputType.value
    optionto=resultType.value

      //----------------meter-----------------------
    
        if(optionfrom===meter && optionto===meter)
            {result.value=Number(input.value);}
    
        else if(optionfrom===meter && optionto===kilometer)
            {result.value=Number(input.value)*0.001;}
    
        else if(optionfrom===meter && optionto===centimeter)
            {result.value=Number(input.value)*100;}
            
    
        //------------------kilometer---------------------
    
        if(optionfrom===kilometer && optionto===meter)
            {result.value=Number(input.value)*1000;}
    
        else if(optionfrom===kilometer && optionto===kilometer)
            {result.value=Number(input.value);}
    
        else if(optionfrom===kilometer && optionto===centimeter)
            {result.value=Number(input.value)*0.00001;}
    
        //-------------------centimeter------------------
    
        if(optionfrom===centimeter && optionto===meter)
            {result.value=Number(input.value)*0.01;}
    
        else if(optionfrom===centimeter && optionto===kilometer)
            {result.value=Number(input.value)*100000;}
    
        else if(optionfrom===centimeter && optionto===centimeter)
            {result.value=Number(input.value);}
    
    }
