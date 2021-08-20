inp1 = document.querySelector("#inp1")
inp2 = document.querySelector("#inp2")
btn=document.querySelector(".login-form-btn")
btn.addEventListener("click",function clickEventHandler(){
        if(inp1.value==""|| inp1.value==null){
            error1.innerText="Username required"
        }
        else{
            error1.innerText=" "
        }
        if(inp2.value==""|| inp2.value==null){
            error2.innerText="Password required"
        }
        else{            
            error2.innerText=" "
        }

})
    