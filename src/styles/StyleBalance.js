import styled from "styled-components";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: #9567BE;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
	width: 85vw;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-top: 30px;
	h1{
        font-family: 'Raleway', sans-serif;
        font-size: 26px;
        font-weight: 700;
        color: #ffffff;
    }
`;

const WhiteBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    width: 85vw;
    height: 65%;
    border-radius: 5px;
    position: relative;
`;
const BalanceContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: scroll;
    margin-bottom: 40px;
`;
const BalanceBox = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    width: 100%;
    padding: 0px 15px;
    margin-top: 18px;
    word-break: break-word;

`;
const InfoBox = styled.div`
    display: flex;
    p{
        color:#C6C6C6;
    }
    h3{
        color:#000000;
        margin-left: 10px;
        max-width: 74%;
    }
`;

const Spent = styled.div`
    font-size: 16px;
    color: ${(props)=> props.expense? "#C70000":"#03AC00"};
    min-width: 13%;
`;
const TotalBalanceBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;
    background-color: #ffffff;
    h4{
      color: #000000;
      font-size: 17;
      font-weight: 700;
    }
`;

const ContainerNewEntry = styled.div`
    width: 85vw;
    display: flex;
    justify-content: space-between;
    margin-top: 13px;
    height: 114px;
`;
const BoxNewEntry =styled.div`
    background-color: #A328D6;
    border-radius: 5px;
    width: 48%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 7px 10px;
    p{
        color: #ffffff;
        font-size: 17px;
        font-weight: 700;
        margin-top: 30px;
    }
`;

export{
    Container,
    Title,
    WhiteBox,
    ContainerNewEntry,
    BoxNewEntry,
    BalanceBox,
    InfoBox,
    Spent,
    TotalBalanceBox,
    BalanceContainer

}