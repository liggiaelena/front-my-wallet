import { ContainerNewEntry, BoxNewEntry } from '../../styles/StyleBalance'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useHistory } from 'react-router';

export default function ChangeBalanceButton(){
   const history = useHistory();

    function changePage(type){
        history.push(`/balance-update/${type}`);
    }


    return(
        <ContainerNewEntry>
            <BoxNewEntry onClick={()=>changePage('positive')}>
                <AiOutlinePlusCircle 
                    fontSize="25px"
                    color="ffffff"
                />
                    <p>Nova<br/>entrada</p>
            </BoxNewEntry>
            <BoxNewEntry onClick={()=>changePage('negative')}>
                 <AiOutlineMinusCircle 
                     fontSize="25px"
                     color="ffffff"
                 />
                 <p>Nova<br/>saída</p>
            </BoxNewEntry> 
        </ContainerNewEntry>
    );
}