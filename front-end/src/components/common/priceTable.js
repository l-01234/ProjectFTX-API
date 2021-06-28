import React from "react";

const PricesRows = ({ name, type, price, volumeUsd24h }) => {
  return (
    <div className="w-full sm:px-6">
      <table className="w-full whitespace-nowrap">
        <thead>
          <th className="font-normal text-left pl-4">{name}</th>
          <th className="font-normal text-left pl-12">{type}</th>
          <th className="font-normal text-left pl-12">{price}</th>
          <th className="font-normal text-left pl-20">{volumeUsd24h}</th>
        </thead>
      </table>
    </div>
  );
};

export default PricesRows;
