var str="";
var result=document.getElementById("result");
var buttons=document.querySelectorAll("button");
var div=document.querySelector(".class-1");
let p=document.createElement("p");
p.innerHTML=`0`;
div.appendChild(p);
buttons.forEach(btn=>{
    btn.addEventListener("click",(event)=>{
        if(event.target.textContent=="="){
            if(str==""){
                event.target.style.color="#A7A2A2";
            }
            else{
                str=eval(str);
                result.value=str;
            }
        }
        else if (event.target.textContent=="AC") {
            str="";
            result.value=str;
            p.innerHTML=`0`;
            div.appendChild(p);
        }
        else if(event.target.textContent=="DE"){
            str=str.slice(0,-1);
            result.value=str
            p.innerHTML=`${eval(str)}`;
            div.appendChild(p);
        }
        else if(event.target.textContent=="^2"){
            let pow=String(Number(str)*Number(str));
            str=pow;
            result.value=str;
            p.innerHTML=`${pow}`;
            div.appendChild(p);
        }
        else{
            str+=event.target.textContent;
            result.value=str;
            p.innerHTML=`${eval(str)}`;
            div.appendChild(p);
        }
    })
})