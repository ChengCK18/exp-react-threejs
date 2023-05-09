import React from "react";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../textures/moon.jpg";

const Box = () => {
    // meshLambertMateria color does not go along with texture, they overwrite each other
    const colorMap = useLoader(TextureLoader, texture);

    return (
        <mesh rotation={[90, 0, 20]}>
            <ambientLight intensity={0.5} />
            <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
            {/* <meshLambertMaterial attach="material" color="blue" /> */}
            <meshStandardMaterial map={colorMap} />

            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <OrbitControls enableZoom={true} />
        </mesh>
    );
};

export default Box;
