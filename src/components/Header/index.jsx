import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #00000030;
    padding: 16px 60px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    
`;

const Header = () => {
    return (
        <HeaderContainer>
            <img src="src/pages/TelaLogin/logo.png" alt="Logo do Museu da Imagem e Som de Fortaleza" />
        </HeaderContainer>
    );
}

export default Header;