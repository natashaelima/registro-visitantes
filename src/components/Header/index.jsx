import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #00000030;
    padding: 16px 60px;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    justify-content:space-between;
    align-items: center;
`;

const Header = () => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <img src="src/pages/TelaLogin/logo.png" alt="Logo do Museu da Imagem e Som de Fortaleza" />
            <button onClick={() => navigate('login')}>Login</button>
        </HeaderContainer>
    );
}

export default Header;