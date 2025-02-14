import { SoftShadows, ContactShadows, RandomizedLight, AccumulativeShadows } from "@react-three/drei";
import { useControls } from "leva";

export default function Shadows() {

    // const { color, opacity, blur } = useControls(
    //     'contact shadows', {
    //     color: '#000000',
    //     opacity: { value: 0.5, min: 0, max: 1 },
    //     blur: { value: 1, min: 0, max: 10 }
    // }
    // )

    return (
        <>
            {/* <AccumulativeShadows
                position-y={-1.99}
                color="#316d39"
                opacity={0.7}
                frames={10}
                temporal
            >
                <RandomizedLight
                    position={[1.5, 3, 3]}
                    amount={8}
                    radius={1}
                    ambient={0.5}
                    intensity={3}
                    bias={0.001}
                />
            </AccumulativeShadows> */}
            <SoftShadows size={25} samples={20} focus={0}/>
            {/* <ContactShadows
                position-y={-1.99}
                scale={5}
                resolution={512}
                far={5}
                color={'#171d13'}
                opacity={0.60}
                blur={6.5}
            /> */}

        </>
    )
}