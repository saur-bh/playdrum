
//get all the drums
var allDrum = document.querySelectorAll(".drum");
var presKey = document.addEventListener("keypress",handlePress);



allDrum.forEach(item=>{

    item.addEventListener("click",handlePress);
   


});

//Which button f drum is pressed.

function handlePress(e){

  
        var soundCliked = e.key?e.key : e.srcElement.textContent ;

        var presKey=document.querySelector("."+soundCliked);

        //check if no other key is pressed
        if(soundCliked==="w"||soundCliked==="a"||soundCliked==="s"||soundCliked==="d"||soundCliked==="j"||soundCliked==="k"||soundCliked==="l"){
            presKey.classList.add("pressed");
        }
        
        
    var audio = new Audio();

      switch(soundCliked.trim()){
        case 'w':
                audio.src = 'sounds/tom-1.mp3'
                
                audio.play();
                   break;

        case 'a':
                audio.src = 'sounds/tom-2.mp3'
                audio.play();
                break;

        case 's':
                audio.src = 'sounds/tom-3.mp3'
                audio.play();
                break;

        case 'd':
                audio.src = 'sounds/tom-4.mp3'
                audio.play();
                break;

        case 'j':
                audio.src = 'sounds/snare.mp3'
                audio.play();
                break;
        case 'k':
                audio.src = 'sounds/crash.mp3'
                audio.play();
                break;
        case 'l':
                audio.src = 'sounds/kick-bass.mp3'
                audio.play();
                break;
                
               
    }

     //check if no other key is pressed
     if(soundCliked==="w"||soundCliked==="a"||soundCliked==="s"||soundCliked==="d"||soundCliked==="j"||soundCliked==="k"||soundCliked==="l"){
            setTimeout(function(){

                document.querySelector("."+soundCliked).classList.remove("pressed");
            },100)
        }
   
}
