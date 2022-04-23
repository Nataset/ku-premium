import * as THREE from 'three';
export class CarLights {
    constructor(scene, options, color, speed) {
        this.scene = scene;
        this.options = options;
        this.color = color;
        this.speed = speed;
    }
    init() {
        const options = this.options;
        let curve = new THREE.LineCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1));
        let baseGeometry = new THREE.TubeBufferGeometry(curve, 25, 1, 8, false);
        let instanced = new THREE.InstancedBufferGeometry().copy(baseGeometry);
        instanced.instanceCount = options.nPairs * 2;

        let aOffset = [];
        let aMetrics = [];

        let sectionWidth = options.roadWidth / options.roadSections;

        for (let i = 0; i < options.nPairs; i++) {
            let radius = Math.random() * 0.1 + 0.1;
            let length = Math.random() * options.length * 0.08 + options.length * 0.02;
            // 1a. Get it's lane index

            let section = i % 3;

            // 1b. Get its lane's centered position
            let sectionX = section * sectionWidth - options.roadWidth / 2 + sectionWidth / 2;
            let carWidth = 0.5 * sectionWidth;
            let offsetX = 0.5 * Math.random();

            let offsetY = radius * 1.3;

            let offsetZ = Math.random() * options.length;

            aOffset.push(sectionX - carWidth / 2 + offsetX);
            aOffset.push(offsetY);
            aOffset.push(-offsetZ);

            aOffset.push(sectionX + carWidth / 2 + offsetX);
            aOffset.push(offsetY);
            aOffset.push(-offsetZ);

            aMetrics.push(radius);
            aMetrics.push(length);

            aMetrics.push(radius);
            aMetrics.push(length);
        }
        // Add the offset to the instanced geometry.
        instanced.setAttribute(
            'aOffset',
            new THREE.InstancedBufferAttribute(new Float32Array(aOffset), 3, false),
        );
        instanced.setAttribute(
            'aMetrics',
            new THREE.InstancedBufferAttribute(new Float32Array(aMetrics), 2, false),
        );

        const material = new THREE.ShaderMaterial({
            fragmentShader,
            vertexShader,
            uniforms: {
                uColor: new THREE.Uniform(new THREE.Color(this.color)),
                uTime: new THREE.Uniform(0),
                uSpeed: new THREE.Uniform(this.speed),
                uTravelLength: new THREE.Uniform(options.length),
                uFreq: new THREE.Uniform(new THREE.Vector3(3, 6, 10)),
                uAmp: new THREE.Uniform(new THREE.Vector3(30, 30, 20)),
            },
        });

        let mesh = new THREE.Mesh(instanced, material);
        mesh.frustumCulled = false;

        this.mesh = mesh;

        this.scene.add(mesh);
    }

    update(t) {
        this.mesh.material.uniforms.uTime.value = t;
    }
}

const fragmentShader = `
uniform vec3 uColor;
  void main() {
      vec3 color = vec3(uColor);
      gl_FragColor = vec4(color,1.);
  }
`;

const vertexShader = `
attribute vec3 aOffset;
uniform vec3 uAmp;
uniform vec3 uFreq;
attribute vec2 aMetrics;
uniform float uTime;
uniform float uSpeed;
uniform float uTravelLength;
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

  void main() {
    vec3 transformed = position.xyz;
    
    float radius = aMetrics.r;
    float len = aMetrics.g;
    transformed.xy *= radius; 
    transformed.z *= len;

    float zOffset = uTime * uSpeed + aOffset.z;
    zOffset = len - mod(zOffset, uTravelLength);

    // transformed.z +=uTime * uSpeed;


		// Keep them separated to make the next step easier!
	   transformed.z = transformed.z +zOffset ;
        transformed.xy += aOffset.xy;

        
    float progress = abs(transformed.z / uTravelLength);
    transformed.xyz += getDistortion(progress);

	
        vec4 mvPosition = modelViewMatrix * vec4(transformed,1.);
        gl_Position = projectionMatrix * mvPosition;
	}
`;
