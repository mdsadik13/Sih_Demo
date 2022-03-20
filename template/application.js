const application=[
      [
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
]

const box=document.getElementsByClassName("box")
box.innerHTML="";

application[0].forEach((e,index)=>{
      boxElement=document.createElement('div');
      boxElement.classList.add("application");
      boxElement.textContent = "Hello, world!";
      box.appendChild(boxElement);
      console.log("Running")
      // snakeElement = document.createElement('div');
      // snakeElement.style.gridRowStart = e.y;
      // snakeElement.style.gridColumnStart = e.x;
      // if(index==0){
      // snakeElement.classList.add("head");
      // }
      // else{
      //       snakeElement.classList.add("snake");
      // }
      // board.appendChild(snakeElement);
     
})