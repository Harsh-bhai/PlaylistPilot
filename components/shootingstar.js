// import React, { useEffect } from "react";
// import { Shaders, Node, GLSL } from "gl-react";
// import { Surface } from "gl-react-dom";

// const shaders = Shaders.create({
//   shootingStar: {
//     frag: GLSL`
//         precision highp float;
//         varying vec2 uv;
//         uniform float time;
//         uniform vec2 mouse;
//         uniform vec2 resolution;
//         void main() {
//           vec2 p = uv - 0.5;
//           p.x *= resolution.x / resolution.y;
//           float t = mod(time, 4.0);
//           float s = 1.0 + (4.0 - t) * 20.0;
//           p *= s;
//           float d = pow(abs(p.y + 0.2 * p.x), 2.0);
//           float r = smoothstep(0.0, 0.01, d);
//           gl_FragColor = vec4(vec3(r), r);
//         }
//       `,
//   },
// });

// const Shootingstar = () => {
//   const [time, setTime] = React.useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime((t) => t + 0.01);
//     }, 1000 / 60);
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div>
//       {" "}
//       <Surface width={400} height={400}  >
//         <Node shader={shaders.shootingStar} uniforms={{ time }} />
//       </Surface>
//     </div>
//   );
// };

// export default Shootingstar;
import React from 'react'

const shootingstar = () => {
  return (
    <>
    <section className=''>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    </section>
    <style jsx>{`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  overflow: hidden;
}
section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /* background: url(https://w0.peakpx.com/wallpaper/478/258/HD-wallpaper-moon-night-ocean-moon-night-ocean-nature.jpg); */
  background:rgba(0,0,0,0);
  pointer-events:none;
  background-position-x: center;
  background-size: cover;
  animation: animateBg 50s linear infinite;
}
@keyframes animateBg {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
    0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 30px rgba(255, 255, 255, 1);
  animation: animate 3s linear infinite;
}
span::before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  height: 1px;
  background: linear-gradient(90deg, #fff, transparent);
}
@keyframes animate {
  0% {
    transform: rotate(315deg) translateX(0);
    opacity: 1;
  }
  30% {
    // transform: rotate(315deg) translateX(0);
    opacity: 0.1;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(315deg) translateX(-1500px);
    opacity: 0;
  }
}
span:nth-child(1) {
  top: 0;
  right: 0;
  left: initial;
  animation-delay: 0;
  animation-duration: 1s;
}

span:nth-child(2) {
  top: 0;
  right: 80px;
  left: initial;
  animation-delay: 0.2s;
  animation-duration: 3s;
}

span:nth-child(3) {
  top: 80px;
  right: 0px;
  left: initial;
  animation-delay: 0.4s;
  animation-duration: 2s;
}

span:nth-child(4) {
  top: 0;
  right: 180px;
  left: initial;
  animation-delay: 0.6s;
  animation-duration: 1.5s;
}
span:nth-child(5) {
  top: 0;
  right: 400px;
  left: initial;
  animation-delay: 0.8s;
  animation-duration: 2.5s;
}

span:nth-child(6) {
  top: 0;
  right: 600px;
  left: initial;
  animation-delay: 1s;
  animation-duration: 3s;
}
span:nth-child(7) {
  top: 300px;
  right: 0px;
  left: initial;
  animation-delay: 1s;
  animation-duration: 1.75s;
}

span:nth-child(8) {
  top: 0px;
  right: 700px;
  left: initial;
  animation-delay: 1.4s;
  animation-duration: 1.25s;
}

span:nth-child(9) {
  top: 0px;
  right: 1000px;
  left: initial;
  animation-delay: 0.75s;
  animation-duration: 2.25s;
}

span:nth-child(10) {
  top: 0px;
  right: 1000px;
  left: initial;
  animation-delay: 2.75s;
  animation-duration: 2.25s;
}}`}
      </style></>
  )
}

export default shootingstar
