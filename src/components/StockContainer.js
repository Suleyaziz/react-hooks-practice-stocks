import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onStockClick }) {
  return (
    <div>
      <h2>Available Stocks</h2>
      {(stocks || []).map((stock) => (
        <Stock 
          key={stock.id} 
          stock={stock} 
          onStockClick={onStockClick}
          inPortfolio={false}
        />
      ))}
    </div>
  );
}

export default StockContainer;