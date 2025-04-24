import { useRef } from "react";
import {
  MeshTransmissionMaterial,
  useGLTF,
  Center,
  Text3D,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Mesh } from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function Model() {
  const { nodes } = useGLTF("/glass-effect/medias/torrus.glb");
  const { viewport } = useThree();
  const torus = useRef<Mesh>(null!);
  const fontUrl = "/glass-effect/fonts/PP Neue Montreal_Bold.json";

  useFrame(() => {
    torus.current.rotation.x += 0.02;
  });

  return (
    <group scale={viewport.width / 3.75}>
      <EffectComposer>
        <Bloom mipmapBlur />
      </EffectComposer>
      <Center position={[0, 0, -1]}>
        <Text3D font={fontUrl} position={[-1.5, 0, -1]}>
          Intro
          <meshStandardMaterial color={[5, 2, 1]} />
        </Text3D>
        <Text3D font={fontUrl} position={[1.5, 0, -1]}>
          Vista
          <meshBasicMaterial color={[1.5, 1, 8]} toneMapped={false} />
        </Text3D>
      </Center>
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
