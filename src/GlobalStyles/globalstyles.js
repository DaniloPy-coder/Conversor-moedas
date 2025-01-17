import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#f4f4f4",
    text: "#333",
    containerBackground: "#fff",
    buttonBackground: "#11b32d",
    buttonHover: "#0d9924",
};

export const darkTheme = {
    body: "#121212",
    text: "#f4f4f4",
    containerBackground: "#1e1e1e",
    buttonBackground: "#444",
    buttonHover: "#555",
};

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
  }

  .container {
    background-color: ${(props) => props.theme.containerBackground};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    display: flex;
    gap: 20px; 
  }

  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.text};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px; 
    width: 100%;
  }

  label {
    font-size: 1rem;
    color: ${(props) => props.theme.text};
  }

  select,
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    font-size: 1rem;
    border-radius: 5px;
    transition: border-color 0.3s ease;
  }

  select:focus,
  input:focus {
    border-color: ${(props) => props.theme.buttonBackground};
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button {
    font-size: 1rem;
    padding: 10px;
    background-color: ${(props) => props.theme.buttonBackground};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: ${(props) => props.theme.buttonHover};
  }

  #result {
    margin-top: 20px;
    padding: 15px;
    text-align: center;
    background-color: #f0f0f0;
    border-radius: 5px;
    font-size: 1.2rem;
    color: ${(props) => props.theme.text};
  }

  #img {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  #img img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
  }
`;

export default GlobalStyles;
