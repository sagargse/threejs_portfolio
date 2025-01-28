import { useGLTF } from '@react-three/drei'

const Chair =(props)=> {
    const { nodes, materials } = useGLTF('/models/chair.glb');

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials.plastic_black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5.geometry}
                material={materials.plastic_black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials.handleplastic_fog}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_7.geometry}
                material={materials.blackmetal}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials.chromewheel}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_9.geometry}
                material={materials.cushion_rouge}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_10.geometry}
                material={materials.backsupport_red}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_11.geometry}
                material={materials.backsupport_red}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_12.geometry}
                material={materials.backsupport_red}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_13.geometry}
                material={materials.backsupport_red}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_14.geometry}
                material={materials.backsupport_red}
            />
        </group>
    )
}

useGLTF.preload('/models/chair.glb')

export default Chair