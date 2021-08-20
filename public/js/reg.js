inp1 = document.querySelector("#inpreg1")
inp2 = document.querySelector("#inpreg2")
inp3 = document.querySelector("#inpreg3")
btn=document.querySelector("#regbtn")
btn.addEventListener("click",function clickEventHandler(){
        if(inp1.value==""|| inp1.value==null){
            error1.innerText="Email required"
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
        if(inp3.value==""|| inp3.value==null){
            error3.innerText="Re-type Password required"
        }
        else{            
            error3.innerText=" "
        }
        if(inp2.value!==inp3.value){
            error3.innerText="Password not matching"
        }
        else{            
            error3.innerText=" "
        }

})