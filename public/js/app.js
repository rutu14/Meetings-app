inp1 = document.querySelector("#inp1")
inp2 = document.querySelector("#inp2")
btn=document.querySelector(".login100-form-btn")
btn.addEventListener("click",function clickEventHandler(){
        if(inp1==""|| inp1==null){
            error1.innerText="Username required"
            console.log("username")
        }
        if(inp2==""|| inp2==null){
            error2.innerText="Password required"
            console.log("password")
        }

})
    