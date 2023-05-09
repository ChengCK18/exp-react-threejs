import React, { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useLoader, Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../textures/moon.jpg";

const Sphere = () => {
    const colorMap = useLoader(TextureLoader, texture);

    return (
        <mesh>
            <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
            <meshBasicMaterial color={"blue"} attach="material" />
            <meshStandardMaterial map={colorMap} />
            <OrbitControls enableZoom={true} />
        </mesh>
    );
};

export default Sphere;
