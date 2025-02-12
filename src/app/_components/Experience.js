import { OrbitControls } from "@react-three/drei";
import { button, useControls } from "leva";
import { Perf } from "r3f-perf";

export default function Experience() {

    const {perfVisible} = useControls({
        perfVisible: true
    })

    const { position, color, visible, clickMe, choice } = useControls('sphere',{
        position: {
            value: { x: -2, y: 0},
            step: 0.01,
            joystick: 'invertY'
        },
        color: '#ff0000',
        visible: true,
        clickMe: button(()=>{
            console.log('clicked')
        }),
        choice: {options: ['a', 'b', 'c']}
    })
    
    const { scale } = useControls('cube',{
        scale: {
            value: 1.7,
            step: 0.01,
            min: 0,
            max: 5
        }
    })

    return (
        <>
            { perfVisible ? <Perf position="top-left"/>: null}
            <OrbitControls makeDefault />
            <directionalLight position={[1, 2, 3]} intensity={2.5} />
            <ambientLight />
            <group >
                <mesh position-x={2.5} scale={scale}>
                    <boxGeometry />
                    <meshStandardMaterial color='mediumPurple' />
                </mesh>

                <mesh position={[position.x, position.y, 0]} scale={0.7} visible={visible}>
                    <sphereGeometry args={[1.5, 32, 32]} />
                    <meshStandardMaterial color={ color } />
                </mesh>
            </group>

            <mesh rotation-x={Math.PI * -0.5} position-y={-2} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color='greenyellow' />
            </mesh>
        </>
    )
}