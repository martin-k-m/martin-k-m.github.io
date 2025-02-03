import styled from 'styled-components';
import Section from '../components/Section';

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export default function Projects() {
    return (
        <Section title="Projects">
            <ProjectGrid>
                {/* Add your projects here */}
                <ProjectCard>
                    <h3></h3>
                    <p>No active Projects</p>
                </ProjectCard>
            </ProjectGrid>
        </Section>
    );
}