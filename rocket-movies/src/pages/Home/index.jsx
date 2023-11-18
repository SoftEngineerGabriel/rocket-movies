import { Container } from './styles';

import { FiPlus } from 'react-icons/fi'


import {Header} from '../../components/Header'
import {Button} from '../../components/Button'
import {Section} from '../../components/Section'


export function Home() {
    return(
        <Container>
            <Header/>
                <header>
                    <h1>Meus filmes</h1>
                    <Button  title="Adicionar mais filmes"  icon={FiPlus}/>
                </header>
            <Section
                title="Exemplo"
            />
        </Container>
    )
}