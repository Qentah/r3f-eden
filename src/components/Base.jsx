/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\public\models\base.glb -o .\src\components\Base.jsx -r .\public\ 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Base(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/base.glb')
  const { actions } = useAnimations(animations, group)

  materials.Base_Material_2.color = { r: 0, g: 0.1, b: 0.5 }
  materials.Base_Material_2.roughness = 0.5
  materials.Base_Material_2.metalness = 0.8
  materials.Base_Material_2.opacity = 0.8

  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="Clouds" position={[-0.125, 4.752, -20.024]} scale={1.685}>
          <mesh name="cloud_01" geometry={nodes.cloud_01.geometry} material={materials.cloud} position={[-3.778, 0.13, -0.764]} rotation={[0, 1.57, 0]} scale={[1, 1, 1.157]} />
          <mesh name="cloud_02" geometry={nodes.cloud_02.geometry} material={materials.cloud} position={[-1.382, -0.184, 1.482]} rotation={[0, 1.57, 0]} />
          <mesh name="cloud_04" geometry={nodes.cloud_04.geometry} material={materials.cloud} position={[3.785, -0.44, 0.545]} rotation={[0, -Math.PI / 2, 0]} scale={[1, 1, 1.374]} />
          <mesh name="cloud_05" geometry={nodes.cloud_05.geometry} material={materials.cloud} position={[0.146, -0.683, -1.635]} rotation={[0, 1.57, 0]} />
          <mesh name="cloud_03" geometry={nodes.cloud_03.geometry} material={materials.cloud} position={[1.601, 0.731, 0.545]} rotation={[0, 1.57, 0]} />
        </group>
        <group name="Base" position={[0, -0.1, 0.256]} scale={[2.304, 1, 1.868]}>
          <mesh name="Base_1" geometry={nodes.Base_1.geometry} material={materials.Base_Material_1} receiveShadow />
          <mesh name="Base_2" geometry={nodes.Base_2.geometry} material={materials.Base_Material_2} />
        </group>
        <group name="Chair" position={[-0.297, -0.014, -2.008]} rotation={[-Math.PI, 0.175, -Math.PI]} castShadow>
          <mesh name="Chair_1" geometry={nodes.Chair_1.geometry} material={materials['Material.042']} />
          <mesh name="Chair_2" geometry={nodes.Chair_2.geometry} material={materials['Material.044']} />
          <mesh name="Chair_3" geometry={nodes.Chair_3.geometry} material={materials['Material.043']} />
        </group>
        <group name="TV_1" position={[-2.815, 0.835, -2.077]} rotation={[0, Math.PI / 4, 0]} scale={2.867}>
          <mesh name="TV_1_1" geometry={nodes.TV_1_1.geometry} material={materials['Material.030']} />
          <mesh name="TV_1_2" geometry={nodes.TV_1_2.geometry} material={materials['Material.077']} />
          <mesh name="TV_1_3" geometry={nodes.TV_1_3.geometry} material={materials['Material.049']} />
        </group>
        <group name="TV_2" position={[2.678, 0.835, -2.125]} rotation={[0, -Math.PI / 4, 0]} scale={2.867}>
          <mesh name="TV_2_1" geometry={nodes.TV_2_1.geometry} material={materials['Material.030']} />
          <mesh name="TV_2_2" geometry={nodes.TV_2_2.geometry} material={materials['Material.077']} />
          <mesh name="TV_2_3" geometry={nodes.TV_2_3.geometry} material={materials['Material.049']} />
        </group>
        <group name="Lamp_1" position={[-1.568, -0.008, -2.831]} scale={1.252}>
          <mesh name="Lamp_1_1" geometry={nodes.Lamp_1_1.geometry} material={materials['Material.080']} />
          <mesh name="Lamp_1_2" geometry={nodes.Lamp_1_2.geometry} material={materials['Material.084']} />
          <mesh name="Lamp_1_3" geometry={nodes.Lamp_1_3.geometry} material={materials['Material.081']} />
          <mesh name="Lamp_1_4" geometry={nodes.Lamp_1_4.geometry} material={materials['Material.082']} />
          <mesh name="Lamp_1_5" geometry={nodes.Lamp_1_5.geometry} material={materials['Material.083']} />
          <mesh name="Lamp_1_6" geometry={nodes.Lamp_1_6.geometry} material={materials.Base_Material_2} />
          <mesh name="Lamp_1_7" geometry={nodes.Lamp_1_7.geometry} material={materials['Material #1053']} />
        </group>
        <group name="Lamp_2" position={[1.5, -0.008, -2.831]} scale={1.252}>
          <mesh name="Lamp_2_1" geometry={nodes.Lamp_2_1.geometry} material={materials['Material.080']} />
          <mesh name="Lamp_2_2" geometry={nodes.Lamp_2_2.geometry} material={materials['Material.084']} />
          <mesh name="Lamp_2_3" geometry={nodes.Lamp_2_3.geometry} material={materials['Material.081']} />
          <mesh name="Lamp_2_4" geometry={nodes.Lamp_2_4.geometry} material={materials['Material.082']} />
          <mesh name="Lamp_2_5" geometry={nodes.Lamp_2_5.geometry} material={materials['Material.083']} />
          <mesh name="Lamp_2_6" geometry={nodes.Lamp_2_6.geometry} material={materials.Base_Material_2} />
          <mesh name="Lamp_2_7" geometry={nodes.Lamp_2_7.geometry} material={materials['Material #1053']} />
        </group>
        <group name="Table" position={[-0.007, 0.001, -2.46]} >
          <mesh name="Table_1" geometry={nodes.Table_1.geometry} material={materials.Table} castShadow />
          <mesh name="Table_2" geometry={nodes.Table_2.geometry} material={materials['Material.009']} />
          <mesh name="Table_3" geometry={nodes.Table_3.geometry} material={materials['Material.010']} />
          <mesh name="Table_4" geometry={nodes.Table_4.geometry} material={materials['Material.024']} />
          <mesh name="Table_5" geometry={nodes.Table_5.geometry} material={materials['Material.046']} />
          <mesh name="Table_6" geometry={nodes.Table_6.geometry} material={materials['Material.025']} />
          <mesh name="Table_7" geometry={nodes.Table_7.geometry} material={materials['Material.026']} />
          <mesh name="Table_8" geometry={nodes.Table_8.geometry} material={materials['Material.061']} />
          <mesh name="Table_9" geometry={nodes.Table_9.geometry} material={materials['Material.002']} />
          <mesh name="Table_10" geometry={nodes.Table_10.geometry} material={materials['Material.073']} />
          <mesh name="Table_11" geometry={nodes.Table_11.geometry} material={materials['Material.068']} />
          <mesh name="Table_12" geometry={nodes.Table_12.geometry} material={materials['Material.078']} />
          <mesh name="Table_13" geometry={nodes.Table_13.geometry} material={materials['Material.077']} />
          <mesh name="Table_14" geometry={nodes.Table_14.geometry} material={materials['Material.005']} />
          <mesh name="Table_15" geometry={nodes.Table_15.geometry} material={materials['Material.077']} />
          <mesh name="Table_16" geometry={nodes.Table_16.geometry} material={materials['Material #919']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/base.glb')