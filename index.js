var gold=document.getElementById('gold');
var silver=document.getElementById('silver');
var property=document.getElementById('property');
var savings=document.getElementById('saving');
var results=document.getElementById('result');
var button=document.getElementById('submit');
var myform=document.getElementById('my-form');
var reset=document.getElementById('reset');
var out=document.getElementById('pararesult');





 var totalzak=function(){

    
    const goldprice=4056*Number(gold.value)*0.025;
    const silverprice=41*Number(silver.value)*0.025;
    const propertyprice=Number(property.value)*0.025;
    const savingsprice =Number(savings.value)*0.025;
    const totalzak=goldprice+silverprice+propertyprice+savingsprice;

  
    results.value=totalzak;
    out.innerHTML=totalzak +" Rs ";
    myform.reset();

 };
 
 button.addEventListener('click',totalzak,false);

