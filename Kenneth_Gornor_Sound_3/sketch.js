//Kenneth Gornor Sound 3
//CSC 2463 Synth
//Due 3-8-2022

//Notes: I tried to get this to run on my machine locally, but could not. 
//Sometimes the audio doesn't start on time, causing the entire thing to flop

let interState = 'neutral'

const noiseSynth = new Tone.NoiseSynth( 
      {
          "noise": {
              "type" : "white",
              "playbackRate" : 0.4
          },
          "envelope": {
              "attackCurve" : "exponential",
              "attack": 0.3,
              "decay": 0.2,
              "sustain": 0,
              "release": 0.2 
          }
      }
)

noiseSynth.volume.value = -8

const wah = new Tone.AutoWah(
      {
          "baseFrequency": 40,
          "octaves": 4,
          "sensitivity": 0,
          "Q": 7,
          "gain": 5,
          "rolloff": -48,
          "follower": {
              "attack": 0.5,
              "release": 0.1
          },
          "wet": 0.5
      }
).toDestination();

noiseSynth.connect(wah);

function preload() {
  ryuSheet = loadImage("Ryu.png");
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  ryu = new Fighter(ryuSheet, width/2, height/2, 1, 1);
}

function draw() {
  background(220);
  textSize(15);
  textAlign(CENTER, CENTER);
  text('Left click to perform the Tatsumaki.', (width - (width/2)), height/4)
  ryu.draw();
  if (interState == 'neutral') {
     ryu.stand();
    if (mouseIsPressed) {
      interState = 'spinner'

    }
  } else if (interState == 'spinner'){
    ryu.go(1);
  }
}

function mousePressed() {
  noiseSynth.volume.exponentialRampToValueAtTime((noiseSynth.volume.value) - 64, 4+6)
  noiseSynth.triggerAttackRelease( "16n", 0.5)
    noiseSynth.triggerAttackRelease( 
"16n", 1)
      noiseSynth.triggerAttackRelease( "16n", 1.5)
      noiseSynth.triggerAttackRelease( "16n", 2)
      noiseSynth.triggerAttackRelease( "16n", 2.5)
      noiseSynth.triggerAttackRelease( "16n", 3)
      noiseSynth.triggerAttackRelease( "16n", 3.5)
      noiseSynth.triggerAttackRelease( "16n", 4)
      noiseSynth.triggerAttackRelease( "16n", 4.5)
}

class Fighter {
  constructor(spriteSheet, x, y, speed, direction) {
    this.spriteSheet = spriteSheet;
    this.sx = 0;
    this.sy = 0;
    this.x = x;
    this.y = y;
    this.move = direction;
    this.facing = direction;
    this.direction = direction;
    this.grabbed = false;
    this.spriteFrame = 0;
    this.speed = speed;
  }

  animate() {
    let sx, sy
    if (this.move == 0) {
      if (this.standing) { //Animation for standing
                        sx = 0;
                        sy = 0;
        }
    } 
    else {  //Animation for spinning
          sx = this.spriteFrame % 8 + 1; 

          sy = 1;
    }
    return [sx, sy];
  }

  draw() {
    push();
    translate(this.x, this.y);
    scale(this.facing, 1);
    let [sx, sy] = this.animate();
    image(this.spriteSheet, 0, 0, 80, 100, 68 * sx, 110 * sy, 64, 100);
    if (frameCount % 6 == 0) {
      this.spriteFrame += 1;
    }
    this.x += this.speed * this.move;
    if (this.x < 30) {
      this.move = 1;
      this.facing = 1;
    } else if (this.x > width - 30) {
      this.move = -1;
      this.facing = -1;
    }
  
    pop();
  }

  go(direction) {
    this.move = direction;
    this.facing = direction;
    this.sx = 3;
  }

  stop() {
    this.move = 0;
  }

  stand() {
    {
          this.stop();
          this.grabbed = true;

    }
  }
}
