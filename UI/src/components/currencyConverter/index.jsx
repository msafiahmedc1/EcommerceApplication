import { useEffect, useState } from "react";

const CurrencyConverter = ({ onChange }) => {
  const [currency, setCurrency] = useState("USD");

  const exchangeRates = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.78,
    PKR: 277.5,
    INR: 83.3,
  };

  const convertPrice = (usd) => {
    const rate = exchangeRates[currency];
    const converted = usd * rate;
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: currency,
    }).format(converted);
  };

  useEffect(() => {
    onChange(currency, convertPrice);
  }, [currency]);

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      className="border text-sm px-2 py-1 rounded-lg"
    >
      {Object.keys(exchangeRates).map((cur) => (
        <option key={cur} value={cur}>
          {cur}
        </option>
      ))}
    </select>
  );
};

export default CurrencyConverter;
