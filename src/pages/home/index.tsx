import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../../contexts/authContext';
import { HomeContainer, LoginForm } from "./styled";


export function Home() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {

    event.preventDefault();

    const loginData = {
      email,
      password
    }

    await signIn(loginData);

  }
  return (
    <HomeContainer>
      <LoginForm onSubmit={handleSubmit}>
        <p>E-mail</p>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <p>Password</p>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Sign in</button>
      </LoginForm>
    </HomeContainer>
  );
}
