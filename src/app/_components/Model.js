import { useGLTF } from "@react-three/drei";

export default function Model() {
    const url = "./models/Berg.glb";
    const gltf = useGLTF(url);
    console.log(gltf);

    return (
        <>
            <primitive

                object={gltf.scene}
                position={[0, -2, 0]}
                scale={0.5}
            />
        </>
    )
}