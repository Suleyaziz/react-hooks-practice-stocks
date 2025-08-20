import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onSellStock }) {
  if (!portfolio) {
    return (
      <div>
        <h2>My Portfolio</h2>
        <p>Loading portfolio...</p>
      </div>
    );
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.length === 0 ? (
        <p>Your portfolio is empty. Buy some stocks!</p>
      ) : (
        portfolio.map((stock) => (
          <Stock 
            key={stock.id} 
            stock={stock} 
            onStockClick={onSellStock}
            inPortfolio={true}
          />
        ))
      )}
    </div>
  );
}

export default PortfolioContainer;