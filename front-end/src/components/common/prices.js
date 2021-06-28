import Navbar from "./navbar";
import { getData } from "../../lib/api";
import PricesRows from "./priceTable";
import React from "react";
import searchBox from "./pricesSearch";

class Prices extends React.Component {
  state = {
    apiData: null,
  };

  async componentDidMount() {
    const response = await getData();
    console.log(getData());
    this.setState({
      apiData: response,
    });
  }

  render() {
    const apiData = this.state.apiData;
    if (!this.state.apiData) return <span className="sr-only">Loading...</span>;
    console.log(apiData);
    return (
      <div>
        <Navbar></Navbar>
        <div className="w-full sm:px-6">
          <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="sm:flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Current Prices
              </p>
              <div>
                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-red-700 hover:bg-red-600 focus:outline-none rounded">
                  <searchBox></searchBox>
                  <p className="text-sm font-medium leading-none text-white">
                    Search
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="h-16 w-full text-sm leading-none text-gray-800">
                  <th className="font-normal text-left pl-4">
                    Underlying Asset
                  </th>
                  <th className="font-normal text-left pl-12">
                    Type(Spot or Perp)
                  </th>
                  <th className="font-normal text-left pl-12">Price</th>
                  <th className="font-normal text-left pl-20">
                    24 hr Volume USD
                  </th>
                </tr>
              </thead>
            </table>
            <div>
              {apiData.map((asset) => (
                <PricesRows key={asset.name} {...asset} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Prices;
