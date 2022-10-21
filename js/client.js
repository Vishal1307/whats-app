const socket=io("http://localhost:8000")
let btn=document.getElementById("btn")
btn.addEventListener("click",myFun)
const Container=document.getElementById("container")
const messageInp=document.getElementById("messageInp")
btn.addEventListener("click",myFun)
const append=(message,postion)=>{
    messageElement=document.createElement("div")
    messageElement.innerText=message
    messageElement.classList.add("Message")
    messageElement.classList.add(postion)
    Container.append(messageElement)

}

const names=prompt("enter your name to join it")


socket.emit("new-user-joined",names)

socket.emit("user-joined",name=>{
   append(`You:${name} join it chart`,'right' )

})


function myFun(){
    let message=messageInp.value
    append(`You:${message}`,'right' )
    socket.emit("send",message)
    messageInp.value=""
    
    
    

    
    
    
}
socket.emit("receive",data=>{
    append(`${data.name}:${data.message}`,'left')

})
socket.emit("left",name=>{
    append(`${name}`,"left")
})
console.log(container)
