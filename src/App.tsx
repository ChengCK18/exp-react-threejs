import React from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import AniSphere from "./components/Sphere";

const App = () => {
    return (
        <Canvas className="canvas">
            <Box />
        </Canvas>
    );
};

export default App;
