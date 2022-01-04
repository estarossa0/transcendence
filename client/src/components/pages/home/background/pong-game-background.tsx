import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import Model from "./pong-players-gltf";

function Lights() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight color="white" intensity={0.5} position={[0, 0, 100]} />
      <pointLight color="white" position={[-8, 0, 0]} />
      <directionalLight color="white" position={[1, 0, -1]} />
      <OrbitControls autoRotate />
    </>
  );
}

function Scene() {
  const breakpoint = useBreakpointValue({ base: "base", md: "md" });
  const playersPosition = {
    base: [0, 2, -1.5],
    md: [0, 5, -2.5],
  };
  const cameraPosition = { base: -7, md: -10 };
  return (
    <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 1000,
        position: [cameraPosition[breakpoint], 0, 0],
        up: [0, 0, 1],
      }}
    >
      <Lights />
      <Suspense fallback={null}>
        <Model playersPosition={playersPosition[breakpoint]} />
      </Suspense>
    </Canvas>
  );
}

function PongGameBackground() {
  return (
    <Box name="three-scene" w="full" h="full" pos="absolute" top="0%">
      <Scene />
    </Box>
  );
}

export default PongGameBackground;
