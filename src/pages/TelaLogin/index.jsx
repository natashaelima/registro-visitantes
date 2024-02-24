import React from 'react';
import styled from 'styled-components';


const TelaLoginContainer = styled.div`
position: relative;
width: 100%;
height: 100vh;
overflow-x: hidden;
`;

const BackgroundImage = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background-size: cover;
background-image: url('src/pages/TelaLogin/mis.jpg');
filter: blur(5px);
`;

const GlassPane = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
padding: 70px;
border-radius: 10px;
text-align: center;
justify-content: center;
height: 400px;
width: 500px;
background: rgba(38, 38, 38, 0.15);
box-shadow: 0 8px 32px 0 rgba(42, 42, 42, 0.644);
backdrop-filter: blur(8.5px);
border-radius: 10px;
color: #000000;
`;

const Title = styled.h2`
font-size: 55px;
margin-bottom: 20px;
letter-spacing: 8px;
font-family: "Raleway", sans-serif;
`;

const Input = styled.input`
display: block;
width: 100%;
margin-bottom: 30px;
padding: 15px;
border-radius: 5px;
border: 1px solid #ccc;
outline: none;
`;

const Button = styled.button`
width: 50%;
padding: 15px;
border: none;
border-radius: 5px;
background-color: #292929;
color: #fff;
cursor: pointer;
transition: 0.8s;
font-size: 15px;
text-transform:uppercase;
font-weight: bold;
font-family: "Raleway", sans-serif;

&:hover {
    color: #000;
    background-color: #ffffff;
}
`;

const TelaLogin = () => {
    return (
        <>
        <TelaLoginContainer>
            <BackgroundImage />
            <GlassPane>
                <Title>Login</Title>
                <form>
                <Input type="text" placeholder="Nome de usuário" />
                <Input type="password" placeholder="Senha" />
                <Button type="submit">Entrar</Button>
                </form>
            </GlassPane>
        </TelaLoginContainer>
        </>
    );
}

export default TelaLogin;