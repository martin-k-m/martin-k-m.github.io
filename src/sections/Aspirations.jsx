import styled from 'styled-components';
import Section from '../components/Section';

const AspirationContent = styled.div`
    max-width: 800px;
    line-height: 1.6;
`;

export default function Aspirations() {
    return (
        <Section title="Aspirations">
            <AspirationContent>
                <p>Empty rn.</p>
            </AspirationContent>
        </Section>
    );
}