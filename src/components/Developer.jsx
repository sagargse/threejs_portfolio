import { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Developer = (props) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/developer.glb')
    const { actions } = useAnimations(animations, group)

    useGSAP(()=>{
        gsap.to(group.current.position,{
            y:group.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true
        })
    })
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="Armature_28" position={[-0.045, -5.287, 0.023]}>
                                <group name="GLTF_created_0">
                                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                                    <skinnedMesh
                                        name="Object_7"
                                        geometry={nodes.Object_7.geometry}
                                        material={materials['Material.011']}
                                        skeleton={nodes.Object_7.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_8"
                                        geometry={nodes.Object_8.geometry}
                                        material={materials['Material.012']}
                                        skeleton={nodes.Object_8.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_9"
                                        geometry={nodes.Object_9.geometry}
                                        material={materials.Black}
                                        skeleton={nodes.Object_9.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_11"
                                        geometry={nodes.Object_11.geometry}
                                        material={materials['Material.004']}
                                        skeleton={nodes.Object_11.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_12"
                                        geometry={nodes.Object_12.geometry}
                                        material={materials.Black}
                                        skeleton={nodes.Object_12.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_14"
                                        geometry={nodes.Object_14.geometry}
                                        material={materials.Material}
                                        skeleton={nodes.Object_14.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_15"
                                        geometry={nodes.Object_15.geometry}
                                        material={materials.Black}
                                        skeleton={nodes.Object_15.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_17"
                                        geometry={nodes.Object_17.geometry}
                                        material={materials['Material.004']}
                                        skeleton={nodes.Object_17.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_18"
                                        geometry={nodes.Object_18.geometry}
                                        material={materials.Black}
                                        skeleton={nodes.Object_18.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_20"
                                        geometry={nodes.Object_20.geometry}
                                        material={materials.Material}
                                        skeleton={nodes.Object_20.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_21"
                                        geometry={nodes.Object_21.geometry}
                                        material={materials['Material.001']}
                                        skeleton={nodes.Object_21.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_22"
                                        geometry={nodes.Object_22.geometry}
                                        material={materials['Material.002']}
                                        skeleton={nodes.Object_22.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_23"
                                        geometry={nodes.Object_23.geometry}
                                        material={materials['Material.003']}
                                        skeleton={nodes.Object_23.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_24"
                                        geometry={nodes.Object_24.geometry}
                                        material={materials.Black}
                                        skeleton={nodes.Object_24.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_26"
                                        geometry={nodes.Object_26.geometry}
                                        material={materials['Material.011']}
                                        skeleton={nodes.Object_26.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_27"
                                        geometry={nodes.Object_27.geometry}
                                        material={materials['Material.026']}
                                        skeleton={nodes.Object_27.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_29"
                                        geometry={nodes.Object_29.geometry}
                                        material={materials['Material.011']}
                                        skeleton={nodes.Object_29.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_30"
                                        geometry={nodes.Object_30.geometry}
                                        material={materials['Material.025']}
                                        skeleton={nodes.Object_30.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_31"
                                        geometry={nodes.Object_31.geometry}
                                        material={materials.Black}
                                        skeleton={nodes.Object_31.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_33"
                                        geometry={nodes.Object_33.geometry}
                                        material={materials['Material.020']}
                                        skeleton={nodes.Object_33.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_34"
                                        geometry={nodes.Object_34.geometry}
                                        material={materials.Black}
                                        skeleton={nodes.Object_34.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_36"
                                        geometry={nodes.Object_36.geometry}
                                        material={materials['Material.020']}
                                        skeleton={nodes.Object_36.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_37"
                                        geometry={nodes.Object_37.geometry}
                                        material={materials.Black}
                                        skeleton={nodes.Object_37.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_39"
                                        geometry={nodes.Object_39.geometry}
                                        material={materials['Material.004']}
                                        skeleton={nodes.Object_39.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_40"
                                        geometry={nodes.Object_40.geometry}
                                        material={materials.Black}
                                        skeleton={nodes.Object_40.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_42"
                                        geometry={nodes.Object_42.geometry}
                                        material={materials['Material.013']}
                                        skeleton={nodes.Object_42.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_43"
                                        geometry={nodes.Object_43.geometry}
                                        material={materials.Black}
                                        skeleton={nodes.Object_43.skeleton}
                                    />
                                    <group name="Body_17" />
                                    <group name="Ear_18" />
                                    <group name="Ear001_19" />
                                    <group name="Hands_20" />
                                    <group name="Head_21" />
                                    <group name="Hoody_22" />
                                    <group name="Hoody001_23" />
                                    <group name="Line_24" />
                                    <group name="Line001_25" />
                                    <group name="Neck_26" />
                                    <group name="Shoes_27" />
                                </group>
                            </group>
                            <group name="Armature001_57" position={[-0.045, -5.287, 0.023]}>
                                <group name="GLTF_created_1">
                                    <primitive object={nodes.GLTF_created_1_rootJoint} />
                                    <skinnedMesh
                                        name="Object_65"
                                        geometry={nodes.Object_65.geometry}
                                        material={materials['Material.023']}
                                        skeleton={nodes.Object_65.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_67"
                                        geometry={nodes.Object_67.geometry}
                                        material={materials['Material.023']}
                                        skeleton={nodes.Object_67.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_69"
                                        geometry={nodes.Object_69.geometry}
                                        material={materials['Material.023']}
                                        skeleton={nodes.Object_69.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_71"
                                        geometry={nodes.Object_71.geometry}
                                        material={materials['Material.023']}
                                        skeleton={nodes.Object_71.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_73"
                                        geometry={nodes.Object_73.geometry}
                                        material={materials['Material.023']}
                                        skeleton={nodes.Object_73.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_75"
                                        geometry={nodes.Object_75.geometry}
                                        material={materials['Material.023']}
                                        skeleton={nodes.Object_75.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_77"
                                        geometry={nodes.Object_77.geometry}
                                        material={materials['Material.023']}
                                        skeleton={nodes.Object_77.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_79"
                                        geometry={nodes.Object_79.geometry}
                                        material={materials.material_0}
                                        skeleton={nodes.Object_79.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_81"
                                        geometry={nodes.Object_81.geometry}
                                        material={materials.material_0}
                                        skeleton={nodes.Object_81.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_83"
                                        geometry={nodes.Object_83.geometry}
                                        material={materials['Material.023']}
                                        skeleton={nodes.Object_83.skeleton}
                                    />
                                    <skinnedMesh
                                        name="Object_85"
                                        geometry={nodes.Object_85.geometry}
                                        material={materials['Material.023']}
                                        skeleton={nodes.Object_85.skeleton}
                                    />
                                    <group name="Body001_46" />
                                    <group name="Ear002_47" />
                                    <group name="Ear003_48" />
                                    <group name="Hands001_49" />
                                    <group name="Head001_50" />
                                    <group name="Hoody002_51" />
                                    <group name="Hoody003_52" />
                                    <group name="Line002_53" />
                                    <group name="Line003_54" />
                                    <group name="Neck001_55" />
                                    <group name="Shoes001_56" />
                                </group>
                            </group>
                            <group
                                name="Plane_58"
                                position={[0.332, -2.067, -5.121]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={8.996}>
                                <mesh
                                    name="Object_104"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_104.geometry}
                                    material={materials['Material.005']}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/developer.glb')

export default Developer
