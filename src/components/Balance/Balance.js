import { Container, Title, WhiteBox, Spent, TotalBalanceBox, BalanceContainer} from '../../styles/StyleBalance'
import { IoExitOutline } from "react-icons/io5";
import Expenses from './Expenses';
import ChangeBalanceButton from './ChangeBalanceButton';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';
import { getLogout, getTransactions } from '../../service';
import { useHistory } from 'react-router-dom';
import { useEffect , useState} from 'react';

export default function Balance(){
    const [transactions, setTransactions] =useState([]);
    const [type, setType] = useState(false)
    const [sum, setSum] = useState("")
    const { user } = useContext(UserContext);
    const history = useHistory();

    function logout(){
        const promise = getLogout(user.token);
        promise.then(()=>{
            history.push("/");
        })
    }

    function getBalance(){
        const promise = getTransactions(user.token)
        promise.then((resp)=>{
            setTransactions(resp.data)
            total(resp.data);
        })
    }

    function total(array){
        let sum =0;

        array.forEach((a)=>{
            const value = Number(a.value);

            if(a.type === 'positive'){
                sum += value;
            }
            else{
                sum -=value
            }
            
            })
        const totalSum = parseFloat(sum).toFixed(2).replace('.', ',')
        setSum(totalSum)
        if(sum < 0){
            setType(true)
        }
    }

    useEffect(()=>{
        getBalance();
    },[])

    return(
        <Container>
            <Title>
                <h1>Olá, {user.name}</h1>
                <IoExitOutline 
                    fontSize="30px"
                    color="ffffff" 
                    onClick={logout}
                />
            </Title>
            <WhiteBox>
                <BalanceContainer>
                    {transactions.map((transaction)=>
                        <Expenses transaction={transaction}/>
                    )}
                </BalanceContainer>
                <TotalBalanceBox>
                    <h4>SALDO</h4>
                    <Spent expense={type}>{sum}</Spent>
                </TotalBalanceBox>
            </WhiteBox>
            <ChangeBalanceButton token={user.token}/>
        </Container>
    );
}