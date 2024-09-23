let inputs=document.querySelectorAll("input")

inputs.forEach((input,index) =>
    {
    input.addEventListener("keyup",()=>
    {
        if(index<inputs.length-1){
            inputs[index+1].focus()
        }
    })
})