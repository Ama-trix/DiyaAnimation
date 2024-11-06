const bodye=document.querySelector("body")

bodye.addEventListener("mousemove",(event)=>{
    const xpos=event.offsetX;
    const ypos=event.offsetY;
    const spane=document.createElement("span");
    spane.style.left=xpos+"px"
    spane.style.top=ypos+"px"
    const size=Math.random()*100
    spane.style.width=size+"px"
    spane.style.height=size+"px"
    bodye.appendChild(spane);
    setTimeout(() => {
        spane.remove();
    }, 3000);
});
