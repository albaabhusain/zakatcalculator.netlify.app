var gold=document.getElementById('gold');
var silver=document.getElementById('silver');
var property=document.getElementById('property');
var savings=document.getElementById('saving');
// var results=document.getElementById('result');
var button1=document.getElementById('submit');
var myform=document.getElementById('my-form');
// var reset=document.getElementById('reset');
var out=document.getElementById('pararesult');
var goldc=document.getElementById('goldc');
var silverc=document.getElementById('silverc');
var goldp=document.getElementById('goldp');
var silverp=document.getElementById('zsilver');
var propertyp=document.getElementById('zproperty');
var savingp=document.getElementById('zsaving');
var gol;
var sil;


const api=`https://metals-api.com/api/latest?access_key=940hgx18ks81m71o73m1vcmcf2i0cv7txl95b1b4kyqhym1vpdc7lond9uy2&base=INR&symbols=XAU%2CXAG`;

fetch(api)
    .then(response =>{
       return response.json();
    })
    .then(data=>{
       console.log(data)
       var{XAG,XAU}=data.rates;
       
       gol=XAU;
       sil=XAG

    })

    



 var totalzak=function(){

    
    const goldounce=Number(gold.value)*0.035274;
    const goldpr=goldounce*gol;
    const goldprice=goldpr*0.025;
    const silverounce=Number(silver.value)*0.035274;
    const silverpr=silverounce*sil;
    const silverprice=silverpr*0.025;
    const propertyprice=Number(property.value)*0.025;
    const savingsprice =Number(savings.value)*0.025;
    const totalzak=goldprice+silverprice+propertyprice+savingsprice;

  
   //  results.value=totalzak;
   console.log(goldprice);
   console.log(silverprice);
   console.log(totalzak);
   goldc.innerHTML=gol+"Rs";
   silverc.innerHTML=sil+"Rs";
   goldp.innerHTML=goldprice+"Rs";
   silverp.innerHTML=silverprice+"Rs";
   propertyp.innerHTML=propertyprice+"Rs";
   savingp.innerHTML=savingsprice+"Rs";
    out.innerHTML=totalzak +" Rs ";
    myform.reset();

 };
 
 button1.addEventListener('click',totalzak,false);

