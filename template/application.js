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

// const box=document.getElementsByClassName("box");
// box.innerHTML="";

// application[0].forEach((e,index)=>{
//       boxElement=document.createElement('div');
//       boxElement.classList.add("application");
//       boxElement.textContent = "Hello, world!";
//       box.appendChild(boxElement);
//       console.log("Running")


// })


const box = document.createElement("div");
box.classList.add("box");
const contain = document.querySelector(".container");
contain.append(box);
for (let app of application) {
      boxElement=document.createElement('div');
      boxElement.classList.add("application");
      boxElement.innerHTML += app.name + "  ";
      boxElement.innerHTML += app.post + "  ";
      boxElement.innerHTML += app.tittle + "  ";
      boxElement.innerHTML += app.about + "  ";
      box.appendChild(boxElement);
      // console.log("Running");

}
