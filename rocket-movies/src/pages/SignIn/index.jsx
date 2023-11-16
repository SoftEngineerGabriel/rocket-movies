import { FiMail} from 'react-icons/fi'

import { Background, Container, Form } from './styles';
import { Input } from '../../components/Input';


export function SingIn() {

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Faça seu Login</h2>

        <Input 
          icon={FiMail}
          placeholder="E-mail"
        />
      </Form>

      <Background/>

    </Container>
  )
}