const vertexShader = `
varying vec3 vNormal;
void main() {
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const fragmentShader = `
varying vec3 vNormal;
void main() {
  float intensity = max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0);
  gl_FragColor = vec4(intensity * vec3(1.0), 1.0);
}
`;

export default {
  vertexShader,
  fragmentShader,
};
