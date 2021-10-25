import { Container, Title, FormsContainer } from '../styles/StyleLogin';
import { Link, useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import Loader from 'react-loader-spinner';
import UserContext from '../contexts/UserContext';
import { postLogIn } from '../service'

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { setUser } = useContext(UserContext);

    function logIntoAccount(){
        setLoading(true)
        const body ={
            email,
            password
        };
        
        postLogIn(body)
            .then((res)=>{
                setUser({ 
                    id: res.data.id,
                    token: res.data.token, 
                    name: res.data.name
                })
                setLoading(false);
                history.push('/balance')
            })
            .catch((err)=>{
                console.log(err)
                setLoading(false);
               if (err.response.status === 500){
                    alert ('Erro de servidor');
                }
                else{
                    alert ('E-mail ou senha incorretos');
                }
            })
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