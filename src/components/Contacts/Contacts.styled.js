import styled from "styled-components"

export const ContactList = styled('ul')`
list-style-type: none;
display: flex;
flex-direction: column;
gap: 10px;
padding: 0;
`
export const ContactItem = styled('li')`
width:300px;
height: 30px;
padding: 10px 15px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 30px;
border: 1px solid #000000;
border-radius: 5px;

& button {
    margin-right: 0;
    height: 30px;
    width: 50px;
}

`