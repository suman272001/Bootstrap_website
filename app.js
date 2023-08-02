let items=document.querySelectorAll(".nav-list");
console.log(items);
for(let i=0;i<items.length;i++)
{
    items[i].addEventListener("click",()=>{
        let activestate=document.querySelectorAll(".active");
        for(let j=0;j<activestate.length;j++){
            activestate[j].classList.remove("active");
        }
          items[i].classList.add("active");
    })
}
let submit=document.getElementById("form-submit");
submit.addEventListener("click",()=>{
    let name=document.getElementById("name").value;
    let mail=document.getElementById("mail").value;
    let subject=document.getElementById("subject").value;
    if(name==""||mail==""||subject=="")
    {
        alert("Fill the form correctly");
    }
})