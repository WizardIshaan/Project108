var Cat = 0;
var Dog = 0;
var Lion = 0;
var Cow = 0;
var results = '';
var Img = "";
var random_number_r;
var random_number_g;
var random_number_b;

function Start()
{
  navigator.mediaDevices.getUserMedia({audio: true})
  classifer = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/QRke97RdZ/model.json', modelReady);
} 

function modelReady()
{
  console.log('modelReady');
  classifer.classify(gotResults);
}

function gotResults(error,results)
{
  console.log("Called gotResults...");

  if (error) {
    console.error(error);
  }

  else{
    
    console.log(results);
    
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1; 

    document.getElementById("heading").innerHTML = "Cat Detected " + 
    Cat + " Dog Detected "  + Dog + " Cow Detected " + Cow + " Lion Detected " + Lion;
    
    document.getElementById("heading_sound").innerHTML = " Sound Name Detected " + results[0].label

    /*heading = document.getElementById("sound").innerHTML = results;

    src = document.getElementById('EarImg').innerHTML;*/

    if (results[0].label == 'Bark') {
      console.log('Bark');
      Dog = Dog + 1;
      document.getElementById("Img").src = "dog-png-30.png"
      //src = document.getElementById("Bark").innerHTML = Dog + 1;
    }
    else if (results[0].label == 'Meow')
    {
      console.log('Meow');
      Cat = Cat + 1
      document.getElementById("Img").src = "cat5.png"
      //src = document.getElementById("Meow").innerHTML = Cat + 1;
    }
    else if(results[0].label == 'Roar')
    {
      console.log('Roar');
      Lion =  Lion + 1;
      document.getElementById("Img").src = "Lion3.png"
      //src = document.getElementById("Roar").innerHTML = Lion + 1;
    }
    else if (results[0].label == 'mooing')
    {
      console.log('Mooing');
      Cow = Cow + 1
      document.getElementById("Img").src = "cow2.png"
      //src = document.getElementById("Mooing").innerHTML = Cow + 1;
    }
  else
  {
     document.getElementById("Img").src = "Ear1.gif"
  }

  }
}

    
    
     

    
 

    
  

 

  
