import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../../contexts/authContext';
import { HomeContainer, LoginForm } from "./styled";
import { useNavigate } from 'react-router-dom';


export function Home() {

  const navigate = useNavigate();
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
    if (sessionStorage.getItem("token")) {

      navigate("/app");

    } else {

      alert("email or password invalid!")

    }
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
