import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Welcome() {
    return (
        <div className="h-screen w-full">
            <div className="absolute top-0 left-0 w-full h-full">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Center>
                        <Text3D
                            font="/fonts/helvetiker_regular.typeface.json"
                            size={0.5}
                            height={0.2}
                            curveSegments={12}
                        >
                            Math Visualizer
                            <meshStandardMaterial color="#1e88e5" />
                        </Text3D>
                    </Center>
                    <OrbitControls />
                </Canvas>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <h1 className="text-4xl font-bold mb-8 text-white">Welcome to Math Visualizer</h1>
                <Link to="/draw">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl">
                        Start Drawing
                    </Button>
                </Link>
            </div>
        </div>
    );
}