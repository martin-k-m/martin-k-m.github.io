import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import styled from 'styled-components';

const SectionContainer = styled(animated.section)`
  padding: 4rem 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  
  h2 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }
`;

export default function Section({ children, title }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const springs = useSpring({
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 50,
    });

    return (
        <SectionContainer ref={ref} style={springs}>
            <h2>{title}</h2>
            {children}
        </SectionContainer>
    );
}