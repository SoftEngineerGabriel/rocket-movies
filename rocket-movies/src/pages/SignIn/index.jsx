import { FiMail, FiLock} from 'react-icons/fi'

import { Background, Container, Form } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function SingIn() {

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Faça seu Login</h2>

        <Input 
          icon={FiMail}
          type="text"
          placeholder="E-mail"
        />

        <Input 
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button title="Entrar"/>
        <ButtonText title="Criar"/>
      </Form>

      <Background/>

    </Container>
  )
}