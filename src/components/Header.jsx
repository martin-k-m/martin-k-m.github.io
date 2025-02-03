import styled from 'styled-components';
import logo from './logo.png';

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  
  .logo {
    width: 60px;
    height: 60px;
    background: #f0f0f0; /* Placeholder for your logo */
    border-radius: 12px;
  }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain; 
    }
`;

export default function PortfolioHeader() {
    return (
        <Header>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </Header>
    );
}