import { useState, useEffect } from "react";
import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState(""); // "alpha", "price"
  const [filterBy, setFilterBy] = useState("All"); // "All", "Tech", "Finance", etc.

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => {
        setStocks(data);
      });
  }, []);

  function handleBuyStock(stock) {
    if (!portfolio.some(s => s.id === stock.id)) {
      setPortfolio([...portfolio, stock]);
    }
  }

  function handleSellStock(stockToSell) {
    setPortfolio(portfolio.filter(stock => stock.id !== stockToSell.id));
  }

  // Filter and sort stocks
  const filteredStocks = stocks.filter(stock => 
    filterBy === "All" || stock.type === filterBy
  );

  const sortedStocks = [...filteredStocks].sort((a, b) => {
    if (sortBy === "alpha") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "price") {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <div>
      <Header />
      <MainContainer 
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      <StockContainer stocks={sortedStocks} onStockClick={handleBuyStock} />
      <PortfolioContainer portfolio={portfolio} onSellStock={handleSellStock} />
    </div>
  );
}

export default App;