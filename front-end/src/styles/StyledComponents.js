import styled from 'styled-components';

export const LoginContainer = styled.div `
    padding: 5px;
    background: #00B1E7;
    box-shadow: 0 1px 10px -2px grey;
    text-shadow: 0 0 5px black;
    width: 350px;
    height: 300px;
    border-radius: 25px;
    margin: auto;
    margin-top: 150px;
    margin-bottom: 20px;
    color: white;
`;

export const InputField = styled.input `
    width: 80%;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  input {
    width: 380px;
    height: 50px;
    margin: 10px 0;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 18px;
    outline: none;
  }
  button {
    height: 25px;
    width: 140px;
    margin: 10px;
    outline: none;
    font-size: 18px;
    font-weight: 500;
    color: white;
    background-color: grey;
    cursor: pointer;
  }
`

//Buttons that produce actions
export const Btn = styled.button `
    width: 40%;
    font-weight: bold;
    font-size: 16px;
    padding: 5px;
    border-radius: 10px;
    background-color: maroon;
    color: white;
    background-color: gray;
    margin: 2px; 
`;

export const RegisterContainer = styled.div `
    padding: 5px;
    background: #00B1E7;
    text-shadow: 0 0 5px black;
    box-shadow: 0 1px 10px -2px grey;
    color: white;
    width: 400px;
    height: 600px;
    border-radius: 25px;
    margin: auto;
    margin-top: 150px;
`;

// Item Display
export const ItemContainer = styled.div `
    background-color: white;
    width: 600px;
    box-shadow: 0 0 10px -2px black;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    text-shadow: 0 0 5px black;
`;

export const Rented = styled.p `
    color: orange;
    font-weight: bold;
    font-size: 18px;
`;

// Add Item Form
export const TechFormStyle = styled.div `
    padding: 5px;
    background: #00B1E7;
    text-shadow: 0 0 5px black;
    color: white;
    box-shadow: 0 1px 10px -2px grey;
    width: 400px;
    height: 400px;
    border-radius: 25px;
    margin: auto;
    margin-top: 150px;
    margin-bottom: 25px;
`;

// Item Image
export const Img = styled.img `
    width: 300px;
    height: 400px;
`;

export const AccountItem = styled.div `
    background: white;
    width: 600px;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    text-shadow: 0 0 5px black;
    box-shadow: 0 1px 10px -2px grey;
`;

export const LogoImg = styled.img `
    height: 50px;
`;

export const ItemDetails = styled.div `
    background-color: #00B1E7;
    color: white;
    padding: 15px;
    border-radius: 0 0 15px 15px;
`;

export const ItemName = styled.div `
    background-color: #00B1E7;
    padding: 2px;
    color: white;
    border-radius: 15px 15px 0 0;
    text-shadow: 0 0 5px black;
`;

export const DetailSpan = styled.span `
    font-weight: bold;
    font-size: 20px;
`;

export const DetailDesc = styled.p `
    text-align: left;
    margin-bottom: 15px;
    padding: 20px;
`;

export const AccountInfo = styled.div `
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    background-color: #00B1E7;
    color: white;
    width: 800px;
    box-shadow: 0 0 10px -2px black;
    border-radius: 15px;
    margin: auto;
    margin-bottom: 35px;
    margin-top: 110px;
    text-shadow: 0 0 5px black;
    img {
        border-radius: 12.5px;
        margin-bottom: 15px;
        box-sizing: border-box;
        width: 400px;
        margin: 15px
    }
    h1 {
        text-decoration: underline;
    }
`;

export const AccountDetails = styled.div `
    text-align: left;
    border-left: 2px solid white;
    padding: 0 15px 0 44px;  
`;

export const SearchBar = styled.input `
    padding: 10px;
    border-radius: 10px;
    margin: 125px 0 50px 0;
    width: 45%;
    border: 2px solid silver;
`;