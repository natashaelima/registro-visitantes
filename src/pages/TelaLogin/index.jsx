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
position: absolute;
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
padding: 100px;
background-color: rgba(255, 255, 255, 0.5);
backdrop-filter: blur(10px);
border-radius: 10px;
text-align: center;
`;

const Title = styled.h2`
font-size: 55px;
margin-bottom: 20px;
`;

const Input = styled.input`
display: block;
width: 100%;
margin-bottom: 10px;
padding: 8px;
border-radius: 5px;
border: 1px solid #ccc;
`;

const Button = styled.button`
width: 100%;
padding: 10px;
border: none;
border-radius: 5px;
background-color: #007bff;
color: #fff;
cursor: pointer;

&:hover {
background-color: #0056b3;
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