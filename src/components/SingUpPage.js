import { Container, Title, FormsContainer, AlertMessage } from '../styles/StyleLogin';
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react';
import Loader from 'react-loader-spinner';
import { postSingUp } from '../service';



export default function SingUpPage(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState(false);
    const history = useHistory();

    function checkRegistration(){
        setLoading(true);
        if(password !== confirmPassword){
            setErro(true)
            setLoading(false)
            return
        }
        const body = {
            name: username,
            email,
            password,
        };

        postSingUp(body)
            .then(()=>{
                setLoading(false);
                alert("Cadastro feito com sucesso");
                history.push('/');
            })
            .catch((error)=>{
                setLoading(false);
                setErro(false);

                if (error.response.status === 409){
                    alert ('O e-mail inserido já está cadastrado.');
                }
                else if (error.response.status === 500){
                    alert ('Erro do servidor');
                }
                else if (error.response.status === 400){
                    alert ('Dados inválidos');
                }
                else{
                    alert ('Erro ao realizar cadastro');
                }
            });
    }

    return(
        <Container>
        <Title>
            <h1>MyWallet</h1>
        </Title>
        <FormsContainer>
            <input placeholder="Nome"
                   value ={username}
                   onChange ={(e)=> setUsername(e.target.value)}
                   disabled={loading}
            />
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
            <input placeholder="Confirme a senha"
                   type = "password"
                   value ={confirmPassword}
                   onChange ={(e)=> setConfirmPassword(e.target.value)}
                   disabled={loading}
            />
            <AlertMessage>
                {erro? "Erro: por facor insira senhas iguais":""}
            </AlertMessage>
            <button onClick={loading? "":checkRegistration}>
                {loading?  <Loader
                                 type="ThreeDots" 
                                 color="#ffffff" 
                                 height={50} width={70} 
                           /> 
                    : "Cadastrar"}
            </button>
            <Link to="/">
                <p>Já tem uma conta? Entre agora!</p>
            </Link>
            
        </FormsContainer>
    </Container>
    );
}