import { BalanceBox, InfoBox, Spent } from '../../styles/StyleBalance'

export default function Expenses({transaction}){

    let color = false;
    const {
        date,
        description,
        type,
        value
    } = transaction;

    if(type === 'negative'){
        color= true;
    }
    const day = new Date().getDate(date);
    const month = new Date().getMonth(date) +1;
    const valueCorrect = parseFloat(value).toFixed(2).replace('.', ',')

    return(
            <BalanceBox>
                <InfoBox>
                    <p>{day}/{month}</p>
                    <h3>{description}</h3>
                </InfoBox>
                <Spent expense={color}>
                    {valueCorrect}
                </Spent>
            </BalanceBox>
    );
}