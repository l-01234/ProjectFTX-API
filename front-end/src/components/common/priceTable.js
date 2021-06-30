import React from "react";

const PricesRows = ({ name, type, price, volumeUsd24h }) => {
  return (
    <div>
      <table className="w-full content-around whitespace-nowrap">
        <thead>
          <th className="font-normal text-left">{name}</th>
          <th className="font-normal text-left">{type}</th>
          <th className="font-normal text-left">{price}</th>
          <th className="font-normal text-left">{volumeUsd24h}</th>
        </thead>
      </table>
    </div>
  );
};

export default PricesRows;
