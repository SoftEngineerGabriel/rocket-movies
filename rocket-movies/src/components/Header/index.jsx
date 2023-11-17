import { Container } from './styles';

import { Input } from '../../components/Input'

export function Header() {
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Input placeholder="Pesquise pelo título"/>
            <div>
                <strong>Gabriel Farias</strong>
                <a href="#">sair</a>
            </div>
            <img src="https://github.com/SoftEngineerGabriel.png" alt="Foto fo usuário" />
        </Container>
    )
}