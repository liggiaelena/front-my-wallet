import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: #9567BE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Title = styled.div`
	width: 100vw;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
	h1{
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        color: #ffffff;
    }
	
`;

const FormsContainer = styled.div`
	width: 330px;
	height: auto;
	background: #9567BE;
    display: flex;
    flex-direction: column;
    align-items:center ;
    input{
        height: 58px;
        width: 100%;
        color: black;
        font-size: 20px;
        margin-top: 15px;
        border-radius: 5px;
        border:none;
        padding-left: 15px;

    }
    input::placeholder{
        color: #404040;
        font-size: 20px;
        padding-left: 3px;
        font-weight: 400;
    }
    button{
        height: 46px;
        width: 100%;
        background-color: #A328D6;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: none;
        margin-top: 15px;
        color: white;
        font-size: 20px;
        font-weight: 700;
    }
    p{
        font-weight: 700;
        color: #ffffff;
        font-size: 15px;
        margin-top: 40px;
    }
`;

const AlertMessage = styled.div`
	width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: 5px;
	color: red;
	
`;

export{
    Container,
    Title,
    FormsContainer,
    AlertMessage
}