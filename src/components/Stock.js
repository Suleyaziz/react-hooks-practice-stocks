import React from "react";

function Stock({ stock, onStockClick, inPortfolio = false }) {
  function handleClick() {
    onStockClick(stock);
  }

  return (
    <div>
      <div className="card" onClick={handleClick} style={{ cursor: "pointer" }}>
        <div className="card-body">
          <h5 className="card-title">{stock.name} ({stock.ticker})</h5>
          <p className="card-text">Price: ${stock.price}</p>
          <p className="card-text">Type: {stock.type}</p>
          <button onClick={handleClick}>
            {inPortfolio ? "Sell" : "Buy"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stock;