//Kenneth Gornor Sound 1
//CSC 2463 Sampler
//Due 2-22-2022

let sounds = new Tone.Players({
  'gbastartup': 'js/gbastartup.mp3',
  'ps4mus': 'js/PS4MENU.mp3',
  'fwip': 'js/fwip.mp3',
  'bonk': 'js/bonk.mp3',
  'sweep': 'js/sweep.mp3',
  'nodisc': 'js/nodiskbanner.mp3'
})
const delay = new Tone.FeedbackDelay("8n", 0.5);
const pitcher = new Tone.PitchShift(0);
let soundBoard = ['gbastartup','ps4mus','fwip',
                  'bonk','sweep','nodisc']
let buttons = [];
let slider1, slider2, slider3;

function setup() {
  createCanvas(600, 400);
  sounds.connect(pitcher); 
  pitcher.connect(delay); 
  delay.toDestination(); 
  slider1 = createSlider(0., 12., 0., 0.5);
  slider1.mouseReleased( ()=> { pitcher.pitch = slider1.value(); //change effect
                             }
                      )
  slider2 = createSlider(0., 1., 0.5, 0.05);
  slider2.mouseReleased( ()=> { delay.delayTime.value = slider2.value(); //change effect
                             }
                      )
  soundBoard.forEach((word, index)=>{
    buttons[index] = createButton(word);
    buttons[index].position(index*100 + 20, 100);
    buttons[index].mousePressed( () => playSound(word)   );
  })
}

function draw() {
  background(200, 0, 0);
  text('NintenDO press those buttons bestie', 20, 70);
}

function keyPressed() {
  if (key === "1"){
    sounds.player('gbastartup').start();
  }
  if (key === "2") {
    sounds.player('ps4mus').start();
  }
  if (key === "3")  {
    sounds.player('fwip').start();
  }
  if (key === "4")  {
    sounds.player('bonk').start();
  }
  if (key === "5")  {
    sounds.player('sweep').start();
  }
  if (key === "6")  {
    sounds.player('nodisc').start();
  }
}

function playSound(whichSound='gbastartup') {
  sounds.player(whichSound).start();
}