import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, Vector3 } from "@react-three/fiber";
import { useRef } from "react";

type GLTFResult = GLTF & {
  nodes: {
    player1: THREE.Mesh;
    player2: THREE.Mesh;
  };
  materials: {
    player1: THREE.MeshStandardMaterial;
    player2: THREE.MeshStandardMaterial;
  };
};

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}
let frame = 0;

function Model(
  props: JSX.IntrinsicElements["group"] & { playersPosition: number[] },
) {
  const groupRef = useRef<THREE.Group>();
  const { nodes } = useGLTF("/players.glb") as unknown as GLTFResult;
  const { playersPosition } = props;
  useFrame(() => {
    frame += frame <= 100 ? 1 : 0;

    if (frame <= 100) {
      const rotSpeed = easeOutCirc(frame / 120) * Math.PI * 20;
      if (groupRef && groupRef.current)
        groupRef.current.rotation.z = rotSpeed / 2;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null} name="Scene">
      <mesh
        name="player1"
        geometry={nodes.player1.geometry}
        position={playersPosition as Vector3}
        rotation={[-0.7, 0, 0]}
      >
        <meshPhongMaterial color="black" />
      </mesh>
      <mesh
        name="player2"
        geometry={nodes.player2.geometry}
        position={playersPosition.map((item) => -item) as Vector3}
        rotation={[-0.7, 0, 0]}
      >
        <meshPhongMaterial color="white" />
      </mesh>
    </group>
  );
}

useGLTF.preload("/players.glb");

export default Model;
