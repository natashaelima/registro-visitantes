import { describe, test, expect, vitest } from 'vitest';
import { render, screen } from "@testing-library/react"; 
import Header from "../components/Header";
import { BrowserRouter, useNavigate } from "react-router-dom";

const mockNavigate = vitest.fn();
vitest.mock('react-router', () => ({
    ...vitest.importActual('react-router'),
    useNavigate: () => mockNavigate 
}));

describe('Testes da tela visitante', () => {
    test('procurar o botão de login', () => {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        );

        expect(screen.getByText('Login')).toBeInTheDocument();
    });

    test('2º, verifica se o botão leva para tela de login', () => {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        );

        const btnLogin = screen.getByText('Login');
        const navegou = vitest.spyOn(mockNavigate, 'useNavigate');
        fireEvent.click(btnLogin);
        expect(mockNavigate).toHaveBeenCalledWith('/login');
    });
});