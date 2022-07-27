//"This is a Game")

console.log('THIS IS A GAME')

//Decision to turn left or right
let firstAnswer  = window.prompt('Do you head left or right?')

//You take left path taken and decision to follow or continue
if (firstAnswer === 'left'){
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow it, or continue on your path?`)


// You decide to follow
    if(secondAnswer === 'follow'){
        window.alert('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven');

        //Decision to stay or spread the word
      let thirdAnswer = window.prompt("Do you stay in this magical heaven or do you leave to spread the word? Enter 'stay or 'spread the word' ");

        //you decide to stay
        if (thirdAnswer === 'stay'){
        window.alert('You live happily amongst the cats for the rest of your days.');

        //you decide to leave and spread the word.
        }else  if (thirdAnswer === 'spread the word') {window.alert('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.');
    }
    }
 //You decide to continue
  else {(secondAnswer === 'continue')
            window.alert('You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?')

         //Decision to the ladder or staircase   
        let fourthAnswer = window.prompt('Do you take the ladder or the staircase?');
            
        //you decide to take the ladder
            if (fourthAnswer === 'ladder'){
                window.alert('After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.');
            
            } 
         //you decide to take the staircase   
            else if(fourthAnswer === 'staircase'){
                window.alert('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.');
            }


        }

 
} 

//you decide to go right
 else {(firstAnswer === 'right') 
                window.alert('You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which path do you take?');
 
         //Decision to past the dragon to shiny chest or mave away from the dragon       
        let fifthAnswer = window.prompt("Do you 'past the dragon' to shiny chest or move 'away from the dragon'?");
        
                     //you decide to past the dragon
                    if  (fifthAnswer ==='past the dragon') {window.alert("The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:")

                        //Decision to stay or run from the dragon
                        let sixthAnswer = window.prompt('The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:');

                        //you decide to stay
                        if (sixthAnswer = 'stay'){window.alert('You and the dragon have an uplifting conversation about local politics and become lifelong friends.')


                        //you decide to run
                        }else {(sixthAnswer ='run') 
                        window.alert("Quickly, you run back to the cave's entrance. Sheepish, you return home.")
        
                    }
                    //you decide move away from the dragon
                    } 
                    
                    else if (fifthAnswer === 'away from the dragon') {window.alert('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?')
                
                          
            
                    //Decision to draw itor pick the flower
                    let seventhAnswer = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do? draw it or pick it?');

                        //you decide to draw the flower
                       if (eighthAnswer = 'draw it'){
                        window.alert('You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.')   
                        }
                    
                    //you decide to pick the flower
                    else {(eightAnswer = 'pick it')
                    window.alert('You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.')
                }
    }


 }






  
    

