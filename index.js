//starting the game
var sequence1=[];
var sequence2=[];
var i=1;
$(document).keypress(function()
{
 $("h1").text("Level "+i);
 var randomButton = Math.floor((Math.random()*4))+1;
 $("."+randomButton).addClass("pressed");
 setTimeout(function(){$("."+randomButton).removeClass("pressed");}, "200");
   switch (randomButton) {
     case 1:
       var start= new Audio("sounds/green.mp3");
       start.play();
       sequence1.push(1);
       console.log(sequence1);
       break;
       case 2:
       var start= new Audio("sounds/red.mp3");
       start.play();
       sequence1.push(2);
       console.log(sequence1);
       break;
       case 3:
       var start= new Audio("sounds/yellow.mp3");
       start.play();
       sequence1.push(3);
       console.log(sequence1);
       break;
       case 4:
       var start= new Audio("sounds/blue.mp3");
       start.play();
       sequence1.push(4);
       console.log(sequence1);
     default:

   }
 });


  $("h1").text("Level "+i);

  var randomButton = Math.floor((Math.random()*4))+1;
  $("."+randomButton).addClass("pressed");
  setTimeout(function(){$("."+randomButton).removeClass("pressed");}, "200");
    switch (randomButton) {
      case 1:
        var start= new Audio("sounds/green.mp3");
        start.play();
        sequence1.push(1);
        console.log(sequence1);
        break;
        case 2:
        var start= new Audio("sounds/red.mp3");
        start.play();
        sequence1.push(2);
        console.log(sequence1);
        break;
        case 3:
        var start= new Audio("sounds/yellow.mp3");
        start.play();
        sequence1.push(3);
        console.log(sequence1);
        break;
        case 4:
        var start= new Audio("sounds/blue.mp3");
        start.play();
        sequence1.push(4);
        console.log(sequence1);
      default:

    }

// $(document).unbind('keypress');

//mouse clicks


  $(".btn").click(function()
  {
    // i++;
    // $("h1").text("Level "+i);
    var btn= this;
    $(btn).addClass("pressed");
    setTimeout(function(){
      $(btn).removeClass("pressed");}, "200");
      if($(btn).hasClass("1"))
      {
        var start= new Audio("sounds/green.mp3");
        start.play();
        sequence2.push(1);
        console.log(sequence2);
        // if(sequence1.join()===sequence2.join())
        // {
        //   i=i+1;
        //   console.log(i);
        // }
        // else {
        //   console.log("game over");
        // }
      }
      else if($(btn).hasClass("2"))
      {
        var start= new Audio("sounds/red.mp3");
        start.play();
        sequence2.push(2);
        console.log(sequence2);
        // if(sequence1.join()===sequence2.join())
        // {
        //   i=i+1;
        //   console.log(i);
        // }
        // else {
        //   console.log("game over");
        // }
      }
      else if($(btn).hasClass("3"))
      {
        var start= new Audio("sounds/yellow.mp3");
        start.play();
        sequence2.push(3);
        console.log(sequence2);
        // if(sequence1.join()===sequence2.join())
        // {
        //   i=i+1;
        //   console.log(i);
        // }
        // else {
        //   console.log("game over");
        // }
      }
      else {
          var start= new Audio("sounds/blue.mp3");
          start.play();
          sequence2.push(4);
          console.log(sequence2);
          // if(sequence1.join()===sequence2.join())
          // {
          //   i=i+1;
          //   console.log(i);
          // }
          // else {
          //   console.log("game over");
          // }
        }
        if(sequence1.join()===sequence2.join())
        {
          i+=1;
          console.log(i);
          sequence2.length=0;
        }
        else {
          console.log("game over");
          sequence2.length=0;
        }


  });



  // sequence2.length=0;
  // var randomButton = Math.floor((Math.random()*4))+1;
  // $("."+randomButton).addClass("pressed");
  // setTimeout(function(){
  //   $("."+randomButton).removeClass("pressed");}, "200");
  //   switch (randomButton) {
  //     case 1:
  //       var start= new Audio("sounds/green.mp3");
  //       start.play();
  //       sequence1.push(1);
  //       console.log(sequence1);
  //       break;
  //       case 2:
  //       var start= new Audio("sounds/red.mp3");
  //       start.play();
  //       sequence1.push(2);
  //       console.log(sequence1);
  //       break;
  //       case 3:
  //       var start= new Audio("sounds/yellow.mp3");
  //       start.play();
  //       sequence1.push(3);
  //       console.log(sequence1);
  //       break;
  //       case 4:
  //       var start= new Audio("sounds/blue.mp3");
  //       start.play();
  //       sequence1.push(4);
  //       console.log(sequence1);
  //     default:
  //
  //   }
  //   for(var j=0;j<i;j++)
  //   {
  //     $(".btn").click(function()
  //     {
  //       // i++;
  //       $("h1").text("Level "+i);
  //       var btn= this;
  //       $(btn).addClass("pressed");
  //       setTimeout(function(){
  //         $(btn).removeClass("pressed");}, "200");
  //         if($(btn).hasClass("1"))
  //         {
  //           var start= new Audio("sounds/green.mp3");
  //           start.play();
  //           sequence2.push(1);
  //           console.log(sequence2);
  //           if(sequence1.join()===sequence2.join())
  //           {
  //             i=i+1;
  //             console.log(i);
  //           }
  //           else {
  //             console.log("game over");
  //           }
  //         }
  //         else if($(btn).hasClass("2"))
  //         {
  //           var start= new Audio("sounds/red.mp3");
  //           start.play();
  //           sequence2.push(2);
  //           console.log(sequence2);
  //           if(sequence1.join()===sequence2.join())
  //           {
  //             i=i+1;
  //             console.log(i);
  //           }
  //           else {
  //             console.log("game over");
  //           }
  //         }
  //         else if($(btn).hasClass("3"))
  //         {
  //           var start= new Audio("sounds/yellow.mp3");
  //           start.play();
  //           sequence2.push(3);
  //           console.log(sequence2);
  //           if(sequence1.join()===sequence2.join())
  //           {
  //             i=i+1;
  //             console.log(i);
  //           }
  //           else {
  //             console.log("game over");
  //           }
  //         }
  //         else {
  //             var start= new Audio("sounds/blue.mp3");
  //             start.play();
  //             sequence2.push(4);
  //             console.log(sequence2);
  //             if(sequence1.join()===sequence2.join())
  //             {
  //               i=i+1;
  //               console.log(i);
  //             }
  //             else {
  //               console.log("game over");
  //             }
  //           }
  //     });
  //
  //   }
