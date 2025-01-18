import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";
import GlobalStyles, {
  lightTheme,
  darkTheme,
} from "./GlobalStyles/globalstyles";

const App = () => {
  const [result, setResult] = useState(null);
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const formatLargeNumber = (num) => {
    if (num >= 1e9) {
      return `${(num / 1e9).toFixed(2)} bilhões`;
    } else if (num >= 1e6) {
      return `${(num / 1e6).toFixed(2)} milhões`;
    } else {
      return num.toLocaleString();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || isNaN(amount)) {
      alert("Por favor, insira um valor válido!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await response.json();

      const exchangeRate = data.rates[toCurrency];
      const convertedValue = amount * exchangeRate;

      setResult(
        `${formatLargeNumber(
          amount
        )} ${fromCurrency} é equivalente a ${formatLargeNumber(
          convertedValue
        )} ${toCurrency}`
      );
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
      alert(
        "Ocorreu um erro ao realizar a conversão. Tente novamente mais tarde."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {" "}
      <GlobalStyles />
      <div className="container">
        <div id="img">
          <img src="/public/img/imagemoeda.svg" alt="Ilustração" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="header-container">
            <h1>Conversor de Moedas</h1>
            <button
              type="button"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="theme-toggle-button"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}{" "}
            </button>
          </div>

          <label htmlFor="from-currency">De:</label>
          <select
            id="from-currency"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="USD">Dólar Americano (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="BRL">Real Brasileiro (BRL)</option>
            <option value="GBP">Libra Esterlina (GBP)</option>
            <option value="CAD">Dólar Canadense (CAD)</option>
            <option value="MXN">Peso Mexicano (MXN)</option>
            <option value="ARS">Peso Argentino (ARS)</option>
            <option value="CLP">Peso Chileno (CLP)</option>
            <option value="JPY">Iene (JPY)</option>
          </select>

          <label htmlFor="to-currency">Para:</label>
          <select
            id="to-currency"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="USD">Dólar Americano (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="BRL">Real Brasileiro (BRL)</option>
            <option value="GBP">Libra Esterlina (GBP)</option>
            <option value="CAD">Dólar Canadense (CAD)</option>
            <option value="MXN">Peso Mexicano (MXN)</option>
            <option value="ARS">Peso Argentino (ARS)</option>
            <option value="CLP">Peso Chileno (CLP)</option>
            <option value="JPY">Iene (JPY)</option>
          </select>

          <label htmlFor="amount">Valor:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Digite o valor"
          />

          <button type="submit" disabled={loading}>
            {loading ? "Convertendo..." : "Converter"}
          </button>

          {result && <div id="result">{result}</div>}
        </form>
      </div>
    </ThemeProvider>
  );
};

export default App;
