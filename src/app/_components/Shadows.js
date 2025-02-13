import { RandomizedLight, AccumulativeShadows } from "@react-three/drei";


export default function Shadows() {
    return <AccumulativeShadows
        position-y={-1.99}
        color="#316d39"
        opacity={0.7}
        frames={100}
        temporal
    >
        <RandomizedLight
            position={[1.5, 3, 3]}
            amount={6}
            radius={1}
            ambient={0.5}
            intensity={3}
            bias={0.001}
        />
    </AccumulativeShadows>
}