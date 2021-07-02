import React from "react";

const PricesRows = ({ name, type, price, volumeUsd24h }) => {
  return (
    <div>
      {/* <div className="bg-white shadow px-2 md:px-5 pt-2 md:pt-3 pb-2 overflow-y-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <th className="rounded border-gray-50  dark:border-gray-100 border-dashed border-1 h-12 text-left">{name}</th>
            <th className="font-normal text-left">{type}</th>
            <th className="font-normal text-left">{price}</th>
            <th className="font-normal text-left">{volumeUsd24h}</th>
          </thead>
        </table>
      </div> */}
      <div className="container mx-auto grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 pt-3 gap-4">
        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-12">
          {name}
        </div>
        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-12">
          {type}
        </div>
        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-12">
          {price}
        </div>
        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-12">
          {volumeUsd24h}
        </div>
      </div>
    </div>
  );
};

export default PricesRows;
