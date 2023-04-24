const x=document.querySelectorAll('#camp .campphoto div');
const y=document.querySelectorAll('#camp .campphoto div p');
for (let index = 0; index < x.length; index++) {
x[index].addEventListener('mouseover', ()=>{
    y[index].style.visibility='visible';
 }); 
 x[index].addEventListener('mouseout',()=>{
    y[index].style.visibility='hidden';
 });
}