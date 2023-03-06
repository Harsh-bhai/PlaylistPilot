import React, { useEffect } from "react";
import { Shaders, Node, GLSL } from "gl-react";
import { Surface } from "gl-react-dom";

const shaders = Shaders.create({
  shootingStar: {
    frag: GLSL`
        precision highp float;
        varying vec2 uv;
        uniform float time;
        uniform vec2 mouse;
        uniform vec2 resolution;
        void main() {
          vec2 p = uv - 0.5;
          p.x *= resolution.x / resolution.y;
          float t = mod(time, 4.0);
          float s = 1.0 + (4.0 - t) * 20.0;
          p *= s;
          float d = pow(abs(p.y + 0.2 * p.x), 2.0);
          float r = smoothstep(0.0, 0.01, d);
          gl_FragColor = vec4(vec3(r), r);
        }
      `,
  },
});

const Shootingstar = () => {
  const [time, setTime] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 0.01);
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {" "}
      <Surface width={400} height={400}  >
        <Node shader={shaders.shootingStar} uniforms={{ time }} />
      </Surface>
    </div>
  );
};

export default Shootingstar;
