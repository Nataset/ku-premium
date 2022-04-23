import * as THREE from 'three';
export class Road {
    constructor(scene, options, color) {
        this.scene = scene;
        this.options = options;
        this.color = color;
    }
    init() {
        const options = this.options;
        const geometry = new THREE.PlaneBufferGeometry(options.width, options.length, 20, 200);
        const material = new THREE.ShaderMaterial({
            fragmentShader,
            vertexShader,
            uniforms: {
                uTime: new THREE.Uniform(0),
                uTravelLength: new THREE.Uniform(options.length),
                uColor: new THREE.Uniform(new THREE.Color(this.color)),
                uFreq: new THREE.Uniform(new THREE.Vector3(3, 6, 10)),
                uAmp: new THREE.Uniform(new THREE.Vector3(30, 30, 20)),
            },
        });

        const mesh = new THREE.Mesh(geometry, material);

        mesh.rotation.x = -Math.PI / 2;
        mesh.position.z = -options.length / 2;

        this.scene.add(mesh);

        this.mesh = mesh;
    }

    update(t) {
        this.mesh.material.uniforms.uTime.value = t;
    }
}

const fragmentShader = `
    uniform vec3 uColor;
	void main(){
        gl_FragColor = vec4(uColor,1.);
    }
`;
const vertexShader = `
uniform float uTravelLength;
uniform vec3 uAmp;
uniform vec3 uFreq;
uniform float uTime;
#define PI 3.14159265358979

float nsin(float val){
    return sin(val) * 0.5+0.5;
    }

vec3 getDistortion(float progress){
        float movementProgressFix = 0.02;
        return vec3( 
            cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
            nsin(progress * PI * uFreq.y + uTime) * uAmp.y - nsin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
            nsin(progress * PI * uFreq.z + uTime) * uAmp.z - nsin(movementProgressFix * PI * uFreq.z + uTime) * uAmp.z
        );
    }


	void main(){
        vec3 transformed = position.xyz;
        
    float progress = (transformed.y + uTravelLength / 2.) / uTravelLength;
    vec3 distortion  = getDistortion(progress);
    transformed.x += distortion.x;
    transformed.z += distortion.y;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed.xyz, 1.);
	}
`;
