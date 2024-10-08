let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
   let item=document.createElement("li");
   item.innerText=inp.value;
  
   let dltbtn=document.createElement("button");
   dltbtn.innerText="delete";
   dltbtn.classList.add("delete");

   ul.appendChild(item);
   item.appendChild(dltbtn);
   inp.value="";

});

ul.addEventListener("click",function(event){
  if(event.target.nodeName=="BUTTON") 
  {
    let items=event.target.parentElement;
    items.remove();
  }
})

// let dltbtns=document.querySelectorAll(".delete");
// for(dltbtn of dltbtns)
// {
//     dltbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     })
// }