var gold=document.getElementById('gold');
var silver=document.getElementById('silver');
var property=document.getElementById('property');
var savings=document.getElementById('saving');
// var results=document.getElementById('result');
var button1=document.getElementById('submit');
var myform=document.getElementById('my-form');
// var reset=document.getElementById('reset');
var out=document.getElementById('pararesult');
var gol;
var sil;


// const api=`https://metals-api.com/api/latest?access_key=940hgx18ks81m71o73m1vcmcf2i0cv7txl95b1b4kyqhym1vpdc7lond9uy2&base=INR&symbols=XAU%2CXAG`;

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
    const goldprice=goldounce*gol;
    const silverounce=Number(silver.value)*0.035274;
    const silverprice=silverounce*sil;
    const propertyprice=Number(property.value)*0.025;
    const savingsprice =Number(savings.value)*0.025;
    const totalzak=goldprice+silverprice+propertyprice+savingsprice;

  
   //  results.value=totalzak;
   console.log(goldprice);
   console.log(silverprice);
   console.log(totalzak);
    out.innerHTML=totalzak +" Rs ";
    myform.reset();

 };
 
 button1.addEventListener('click',totalzak,false);

