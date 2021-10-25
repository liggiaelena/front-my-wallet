import { Container } from '../../styles/StyleBalance';
import { FormsContainer } from '../../styles/StyleLogin';
import styled from "styled-components";
import { useParams, useHistory } from "react-router";
import { useState, useContext } from 'react';
import { postTransaction } from '../../service'
import UserContext from '../../contexts/UserContext';

export default function ChangeBalance(){
    const [loading, setLoading]= useState(false)
    const [value, setValue] = useState()
    const [description, setDescription] = useState("");
    let title ="";
    const { type } = useParams();
    const { user } = useContext(UserContext)
    const history = useHistory();

    if(type === 'positive'){
        title = 'entrada';
    }
    else title = "saída";

    function postNewEntry(){
        setLoading(true)
        const newvalue = value.replace(",",".")
        const body ={
            value:newvalue,
            description
        }
        const promise = postTransaction(user.token, type, body);
        promise.then(()=>{
            setLoading(false)
            history.push("/balance")
        })
        promise.catch((err)=>{
            setLoading(false)
            if(err.response.status === 401){
                alert("Voce esta deslogado");
            }
            else{
                alert("Verifique os dados por favor")
            }
        })
    }


    return(
        <Container>
            <Title>
                <h1>Nova {title}</h1>
            </Title>
            <FormsContainer>
                <input placeholder="Valor"
                    value ={value}
                    onChange ={(e)=> setValue(e.target.value)}
                    disabled={loading}
                />
                <input placeholder="Descrição"
                    value ={description}
                    onChange ={(e)=> setDescription(e.target.value)}
                    disabled={loading}
                />
                <button onClick={()=>postNewEntry(type)}>
                    Salvar {title}
                </button>
            </FormsContainer>
        </Container>
    );
}


const Title = styled.div`
    width: 85vw;
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;
    margin-bottom: 25px;
    h1{
       font-weight:700 ;
       font-size: 26px;
       color: #ffffff;
       font-family: 'Raleway', sans-serif;
    }
`;

