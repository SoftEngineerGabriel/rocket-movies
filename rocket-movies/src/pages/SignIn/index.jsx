import { FiMail, FiLock} from 'react-icons/fi'

import { Background, Container, Form } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function SingIn() {

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Faça seu Login</h2>

        <Input 
          icon={FiMail}
          type="email"
          placeholder="E-mail"
        />

        <Input 
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button title="Entrar"/>
        
      </Form>

      <Background/>

    </Container>
  )
}