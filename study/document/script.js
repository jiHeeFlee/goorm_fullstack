let val;

val=document;
val=document.baseURI;
val=document.head;
val= document.body;

val=document.forms;
val=document.forms[0].id;
val=document.forms[0].className;

const headerContent=document.getElementById("h1Header");
headerContent.style.color='red';
headerContent.textContent='change text content!!';
headerContent.innerText='change innerText!!';
headerContent.innerHTML='<h4>change innerHTML</h4>';
console.log("val : ",val);