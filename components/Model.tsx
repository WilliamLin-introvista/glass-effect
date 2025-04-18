import { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Mesh } from "three";

export default function Model() {
  const { nodes } = useGLTF("/glass-effect/medias/torrus.glb");
  const { viewport } = useThree();
  const torus = useRef<Mesh>(null!);

  useFrame(() => {
    torus.current.rotation.x += 0.02;
  });

  return (
    <group scale={viewport.width / 3.75}>
      <Text
        font={"/glass-effect/fonts/PPNeueMontreal-Bold.otf"}
        position={[0, 0, -1]}
        fontSize={1}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Introvista
      </Text>
      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial
          thickness={0.2}
          roughness={0}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.02}
          backside={true}
        />
      </mesh>
    </group>
  );
}
