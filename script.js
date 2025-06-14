let times = 1;
const messages = [
  "Initializing Hacking",
  "Reading your Files",
  "Password files Detected",
  "Sending all passwords and personal files to server",
  "Cleaning up"
];
async function wait(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms);
    })
}
async function hacking(){
for(const i of messages){
    const p = document.createElement("p");
    p.innerText = i ;
    document.body.appendChild(p);
    
   for(a = 0 ;a < 6 ;a++){
       let line = i;
       let dot = i + ".".repeat(5);
       p.innerText = i + ".".repeat(a);
       if(p.innerText == dot && times == 1){
           p.innerText = i ;
           a = 0;
           times += 1;
       }
       await wait(500);
   }
    await wait(1200);
    times -= 1;
}
}
hacking();

