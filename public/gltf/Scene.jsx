import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("./gltf/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.545}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.104, 1.448, -0.258]} scale={0.043}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.Back}
            />
            <mesh
              geometry={nodes.Object_7.geometry}
              material={materials.GOLD}
            />
            <mesh
              geometry={nodes.Object_8.geometry}
              material={materials.BARRES}
            />
            <mesh
              geometry={nodes.Object_9.geometry}
              material={materials.Labber}
            />
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.GLASS}
            />
            <mesh
              geometry={nodes.Object_11.geometry}
              material={materials.Lenscover}
            />
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Object_13.geometry}
              material={materials.Display}
            />
            <mesh
              geometry={nodes.Object_14.geometry}
              material={materials["Lens.2"]}
            />
            <mesh
              geometry={nodes.Object_15.geometry}
              material={materials.material_11}
            />
          </group>
          <group
            position={[-0.136, 1.448, 1.545]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0.043}
          >
            <mesh
              geometry={nodes.Object_17.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              geometry={nodes.Object_18.geometry}
              material={materials.Black}
            />
            <mesh
              geometry={nodes.Object_19.geometry}
              material={materials.Back}
            />
            <mesh
              geometry={nodes.Object_20.geometry}
              material={materials.GOLD}
            />
            <mesh
              geometry={nodes.Object_21.geometry}
              material={materials.BARRES}
            />
            <mesh
              geometry={nodes.Object_22.geometry}
              material={materials.Labber}
            />
            <mesh
              geometry={nodes.Object_23.geometry}
              material={materials.GLASS}
            />
            <mesh
              geometry={nodes.Object_24.geometry}
              material={materials.Lenscover}
            />
            <mesh
              geometry={nodes.Object_25.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Object_26.geometry}
              material={materials.Display}
            />
            <mesh
              geometry={nodes.Object_27.geometry}
              material={materials["Lens.2"]}
            />
            <mesh
              geometry={nodes.Object_28.geometry}
              material={materials.material_11}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./gltf/scene.gltf");
