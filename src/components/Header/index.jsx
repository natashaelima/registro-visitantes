import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #000000;
    padding: 16px 60px;
    
`;

const Header = () => {
    return (
        <HeaderContainer>
            <img src="src/pages/TelaLogin/logo.png" alt="Logo do Museu da Imagem e Som de Fortaleza" />
        </HeaderContainer>
    );
}

export default Header;