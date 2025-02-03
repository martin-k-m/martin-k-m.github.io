import styled from 'styled-components';
import Section from '../components/Section';

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
    margin-top: 1rem;
`;

const SkillTag = styled.span`
  background: #e0e7ff;
  color: #4f46e5;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

export default function Skills() {
    return (
        <Section title="Skills & Knowledge">
            <SkillsGrid>
                <SkillTag>React</SkillTag>
                <SkillTag>JavaScript</SkillTag>
                <SkillTag>Node.js</SkillTag>
            </SkillsGrid>
            <SkillsGrid>
                <SkillTag>Blender</SkillTag>
                <SkillTag>Unity</SkillTag>
            </SkillsGrid>
        </Section>
    );
}