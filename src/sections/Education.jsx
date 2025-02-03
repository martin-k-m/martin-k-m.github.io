import styled from 'styled-components';
import Section from '../components/Section';

const EducationList = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const EducationItem = styled.div`
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export default function Education() {
    return (
        <Section title="Education">
            <EducationList>
                <EducationItem>
                    <h3>Heritage High School</h3>
                    <p>High School</p>
                    <p>2023-2025</p>
                </EducationItem>
                <EducationItem>
                    <h3>Las Lomas High School</h3>
                    <p>High School</p>
                    <p>2021-2023</p>
                </EducationItem>
            </EducationList>
        </Section>
    );
}