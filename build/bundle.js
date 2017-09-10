var audioContext = new AudioContext();
var gainNode = audioContext.createGain();
gainNode.connect(audioContext.destination);
var osc = audioContext.createOscillator();
osc.connect(gainNode);
osc.start();
