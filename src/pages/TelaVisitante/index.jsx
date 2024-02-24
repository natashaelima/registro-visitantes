import React, { useState } from 'react';
import styled from 'styled-components';

const TelaVisitanteContainer = styled.div`
    display: flex;
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

const Title = styled.h2`
    font-size: 55px;
    margin-bottom: 20px;
    letter-spacing: 8px;
    font-family: "Raleway", sans-serif;
`;

const Form = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 70px;
    margin-top: 5px;
    border-radius: 10px;
    justify-content: center;
    height: 850px;
    width: 500px;
    background: rgba(38, 38, 38, 0.15);
    box-shadow: 0 8px 32px 0 rgba(42, 42, 42, 0.644);
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: #000000;
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-family: "Raleway", sans-serif;
    font-weight: 600;
`;

const Input = styled.input`
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
    outline: none;
`;

const Select = styled.select`
    width: 100%;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
`;

const Button = styled.button`
    width: 100%;
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

const TelaVisitante = () => {
    
    const [nome, setNome] = useState('');
    const [genero, setGenero] = useState('');
    const [idade, setIdade] = useState('');
    const [profissao, setProfissao] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [cpf, setCpf] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
        nome,
        genero,
        idade,
        profissao,
        cidade,
        bairro,
        cpf
        });
    };
    
    return (
        <>
        <TelaVisitanteContainer>
            <BackgroundImage />
            <Form onSubmit={handleSubmit}>
                <Title>Formulário</Title>
                <FormGroup>
                <Label htmlFor="nome">Nome:</Label>
                <Input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                </FormGroup>
                <FormGroup>
                <Label htmlFor="genero">Gênero:</Label>
                <Select
                    id="genero"
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                    required
                >
                    <option value="">Selecione...</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Outro</option>
                </Select>
                </FormGroup>
                <FormGroup>
                <Label htmlFor="idade">Idade:</Label>
                <Input
                    type="number"
                    id="idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    required
                />
                </FormGroup>
                <FormGroup>
                <Label htmlFor="profissao">Profissão:</Label>
                <Input
                    type="text"
                    id="profissao"
                    value={profissao}
                    onChange={(e) => setProfissao(e.target.value)}
                    required
                />
                </FormGroup>
                <FormGroup>
                <Label htmlFor="cidade">Cidade:</Label>
                <Input
                    type="text"
                    id="cidade"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                    required
                />
                </FormGroup>
                <FormGroup>
                <Label htmlFor="bairro">Bairro:</Label>
                <Input
                    type="text"
                    id="bairro"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                    required
                />
                </FormGroup>
                <FormGroup>
                <Label htmlFor="cpf">CPF:</Label>
                <Input
                    type="text"
                    id="cpf"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                />
                </FormGroup>
                <Button type="submit">Enviar</Button>
            </Form>
        </TelaVisitanteContainer>
    </>
    );
}

export default TelaVisitante;