import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'

import { Background, Container, Form } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function SignUp() {

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Criar conta</h2>

        <Input 
          icon={FiUser}
          type="text"
          placeholder="Nome"
        />


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
        
        <ButtonText title="Voltar para login" />
      </Form>

      <Background/>

    </Container>
  )
}