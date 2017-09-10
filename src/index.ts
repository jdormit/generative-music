const audioContext = new AudioContext();
const gainNode = audioContext.createGain();

gainNode.connect(audioContext.destination);

const osc = audioContext.createOscillator();
osc.connect(gainNode);
osc.start();
