// Array Of Objects 

const companies = [
    {name: "Elfa PVT Lt.", category: "Finance", start: 1981, end: 2003},
    {name: "Beta PVT Lt.", category: "Retail", start: 1992, end: 2008},
    {name: "Gama PVT Lt.", category: "Auto", start: 1999, end: 2007},
    {name: "Delta PVT Lt.", category: "Retail", start: 1989, end: 2010},
    {name: "Lemda PVT Lt.", category: "Technology", start: 2009, end: 2014},
    {name: "PIE PVT Lt.", category: "Finance", start: 1987, end: 2010},
    {name: "Sumation PVT Lt.", category: "Auto", start: 1986, end: 1996},
    {name: "Trigo PVT Lt.", category: "Technology", start: 2011, end: 2016},
    {name: "Redius Nine PVT Lt", category: "Retail", start: 1981, end: 1989},
    {name: " Gelexy PVT Lt", category: "Education", start: 2018, end: 2020}
  ];

const showData=document.querySelector('#show');
const btnTotal=document.querySelector('#btnTotal');
const btnBefor=document.querySelector('#btnBefore');
const btnAfter=document.querySelector('#btnAfter');
const select=document.querySelector('#select');
companies.forEach(c=>{
  select.innerHTML+=`
  <option value='${c.category}'>${c.category.toUpperCase()}</option>
  `;
})// bind data to select box
btnTotal.addEventListener('click',loadTotal);
btnBefor.addEventListener('click',loadBefore);
btnAfter.addEventListener('click',loadAfter);
select.addEventListener('change',loadCat);
function loadCat(){
  showData.innerHTML=`
  <div id='data' class=''>
    ${companies.filter(company=>company.category===select.value).map(company=>{
      return `<div class='left'>
      <h5>Company Name: ${company.name}</h5><hr>
      <h5>Company Category: ${company.category}</h5><hr>
      <h5>Company Start At : ${company.start}</h5><hr>
      <h5>Company End At : ${company.end}</h5>
      </div>`
  }).join('')}
  <div/>`;// end of showData.innerHtml

}
function loadTotal(){
  showData.innerHTML=`
  <div id='data' class=''>
    <h5>Total Companies: ${companies.length}<h5><hr>
    ${companies.map(company=>{
      return `<div class='left'>
      <h5>Company Name: ${company.name}</h5><hr>
      <h5>Company Category: ${company.category}</h5><hr>
      <h5>Company Start At : ${company.start}</h5><hr>
      <h5>Company End At : ${company.end}</h5>
      </div>`
  }).join('')}
  <div/>`;// end of showData.innerHtml

}// end of loadTotal
function loadBefore(){

  showData.innerHTML=`
  <div id='data' class=''>

    ${companies.filter(company=>company.start<2000).map(company=>{
      return `<div class='left'>
      <h5>Company Name: ${company.name}</h5><hr>
      <h5>Company Category: ${company.category}</h5><hr>
      <h5>Company Start At : ${company.start}</h5><hr>
      <h5>Company End At : ${company.end}</h5>
      </div>`
  }).join('')}
  <div/>`;// end of showData.innerHtml

}// End of loadBefore()

function loadAfter(){
  showData.innerHTML=`
  <div id='data' class=''>
    ${companies.filter(company=>company.start>=2000).map(company=>{
      return `<div class='left'>
      <h5>Company Name: ${company.name}</h5><hr>
      <h5>Company Category: ${company.category}</h5><hr>
      <h5>Company Start At : ${company.start}</h5><hr>
      <h5>Company End At : ${company.end}</h5>
      </div>`
  }).join('')}
  <div/>`;// end of showData.innerHtml

}// End of loadAfter()

  
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// way 1
//const after2000=companies.filter(comp=>comp.start>=2000);
//const after1990_2000=companies.filter(comp=>comp.start>=1990 && comp.start<2000)
//console.log(after2000[0].name);
/*
//  Way 2 Lengthy 
let after2000=[];
let after1990_2000=[];
    companies.filter(compny=>{
      if(compny.start>=2000){
          after2000.push(compny.name);
      }
      if(compny.start>1990 && compny.start<2000){
        after1990_2000.push(compny.name);
      }
  })
  */
 //after2000.forEach(c=>console.log(`Companies after 2000 :${c.name}`));
 //after1990_2000.forEach(c=>console.log(`Companies Start b/w 1990 to 2000 :${c.name}`));

