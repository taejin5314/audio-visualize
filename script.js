let audio1 = new Audio();
audio1.src = 'stone.mp3';
const audioCtx = new AudioContext();
console.log(audioCtx);

const container = document.getElementById('container');
const canvas = document.getElementById('canvas1');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let audioSource;
let analyser;
