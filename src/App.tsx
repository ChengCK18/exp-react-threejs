import React from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import Sphere from "./components/Sphere";
import * as THREE from "three";

const App = () => {
    const position1: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
    const position2: THREE.Vector3 = new THREE.Vector3(3, 3, 0);

    return (
        <Canvas className="canvas">
            <Box position={position1} />
            <Box position={position2} />
        </Canvas>
    );
};

export default App;
