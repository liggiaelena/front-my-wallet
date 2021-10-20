import { Container, Title, FormsContainer } from '../styles/StyleLogin';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Loader from 'react-loader-spinner';

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    function logIntoAccount(){
        setLoading(true)
        //axios
    }

    return(
        <Container>
            <Title>
                <h1>MyWallet</h1>
            </Title>
            <FormsContainer>
                <input placeholder="E-mail"
                    value ={email}
                    onChange ={(e)=> setEmail(e.target.value)}
                    disabled={loading}
                />
                <input placeholder="Senha"
                    type = "password"
                    value ={password}
                    onChange ={(e)=> setPassword(e.target.value)}
                    disabled={loading}
                />
                    <button onClick={loading? "": logIntoAccount}>
                    {loading?  <Loader
                                    type="ThreeDots" 
                                    color="#ffffff" 
                                    height={50} width={70} 
                            /> 
                        : "Entrar"}
                </button>
                <Link to="/sing-up">
                    <p>Primeira vez? Cadastre-se!</p>
                </Link>   
            </FormsContainer>
        </Container>
    );
}