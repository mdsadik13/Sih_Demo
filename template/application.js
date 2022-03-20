console.log("Entered")
const application=[
      
            {
                  name:"user1",
                  tittle:"tittle1",
                  about:"Very good",
                  post:"COA"
            },
            {
                  name:"user2",
                  tittle:"tittle2",
                  about:"Very good2",
                  post:"COA2"
            },
            {
                  name:"user3",
                  tittle:"tittle3",
                  about:"Very good3",
                  post:"COA3"
            },
            {
                  name:"user4",
                  tittle:"tittle4",
                  about:"Very good4",
                  post:"COA4"
            }
      
]

const box=document.getElementsByClassName('box')
console.log(box);
box.innerHTML="";

application.forEach((e,index)=>{
      const boxElement=document.createElement('div');
      boxElement.classList.add('application');
      boxElement.textContent = "Hello, world!";
      box.appendChild(boxElement);
      console.log("Running");
     
})