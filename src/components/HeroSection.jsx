import { useSpring, animated } from '@react-spring/web';
import styled from 'styled-components';

const Hero = styled(animated.section)`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    background: linear-gradient(45deg, #d6145b, #ff9a00);
`;

export default function HeroSection() {
    const springs = useSpring({
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
    });

    return (
        <Hero style={springs}>
            <div>
                <h1>Martin Muskov</h1>
                <p>Software Enthusiast</p>
            </div>
        </Hero>
    );
}