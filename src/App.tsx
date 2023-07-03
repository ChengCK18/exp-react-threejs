import React, { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import Sphere from "./components/Sphere";
import * as THREE from "three";
import SamplePhysics from "./components/SamplePhysics";
const App = () => {
    const [position1, setPosition1] = useState(new THREE.Vector3(0, 0, 0));
    const [position2, setPosition2] = useState(new THREE.Vector3(3, 3, 0));
    const keyDownEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
        //this is teleporting :( , object3d has a way to animate the 3d object movement smoothly
        if (event.code === "ArrowRight") {
            const newVal = new THREE.Vector3(position1.x + 1, 3, 0);
            setPosition1(newVal);
        }
        if (event.code === "ArrowLeft") {
            const newVal = new THREE.Vector3(position1.x - 1, 3, 0);
            setPosition1(newVal);
        }
    };

    return (
        <Canvas className="canvas" onKeyDown={keyDownEvent} tabIndex={0}>
            {/* <SamplePhysics /> */}
            <Box position={position1} />
            <Box position={position2} />
        </Canvas>
    );
};

export default App;
