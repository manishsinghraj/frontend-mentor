import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreejsCube = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const w = mountRef.current.clientWidth;
    const h = mountRef.current.clientHeight;

    renderer.setSize(w, h);
    mountRef.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    camera.position.z = 2.5;

    const scene = new THREE.Scene();

    const bgTexture = new THREE.TextureLoader().load("assets/images/image-equilibrium.jpg");
    scene.background = bgTexture;

    const geo = new THREE.BoxGeometry(1, 1, 1);
    const mat = new THREE.MeshPhysicalMaterial({
      color: 0xcfffff, 
      roughness: 0.5,
      transmission: 3,
      thickness: 1,
      clearcoat: 1,
      clearcoatRoughness: 1,
      ior: 1.5,
      reflectivity: 0.9,
      emissive: 0x48cbd9, 
      emissiveIntensity: 0.9 
    });
    const cube = new THREE.Mesh(geo, mat);
    scene.add(cube);

    const edgesGeo = new THREE.EdgesGeometry(geo); 
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0x37367b
    });
    const edgesMesh = new THREE.LineSegments(edgesGeo, edgesMat); 
    cube.add(edgesMesh);


    const dirLight = new THREE.DirectionalLight(0xfc71cc);
    dirLight.position.set(3, 10, 10);
    dirLight.castShadow = true;
    scene.add(dirLight);

    let floatingSpeed = 0.001; 
    let floatingRange = 0.3; 

    cube.rotation.x = THREE.MathUtils.degToRad(135); 
    cube.rotation.y = THREE.MathUtils.degToRad(45); 

   
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.005; 
      cube.rotation.y += 0.002; 
      cube.position.y = Math.sin(Date.now() * floatingSpeed) * floatingRange;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (mountRef.current) {
        const newWidth = mountRef.current.clientWidth;
        const newHeight = mountRef.current.clientHeight;
        renderer.setSize(newWidth, newHeight);
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }}></div>;
};

export default ThreejsCube;
