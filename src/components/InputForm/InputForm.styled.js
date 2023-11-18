import styled from "styled-components"

export const InputForms = styled('form')`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;

& label{
font-size: 20px;
font-weight: bold;
}

& input{
width: 300px;
}

& button{
font-size: 14px;
font-weight: bold;
width: 100px;
height: 30px;
margin-bottom: 30px;
}
`