import React from 'react'
//



export default () => (
  <div>
    <h1>frogs</h1>
    <canvas id="frog-canvas"></canvas>
    <p>React, static sites, performance, speed. It's the stuff that makes us tick.</p>
  </div>
)

const frogCanvas = getElementById("frog-canvas");
const ctx = frogCanvas.getContext("2d");
ctx.fillStyle = "#FF0000"
ctx.fillRect(0,0,150,75);