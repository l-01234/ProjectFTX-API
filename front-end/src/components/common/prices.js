import Navbar from "./navbar";
import { getData } from "../../lib/api";
import PricesRows from "./priceTable";
import React from "react";
// import SearchBox from "./pricesSearch";

class Prices extends React.Component {
  state = {
    apiData: null,
    searchBox: null,
    type: "all",
  };

  async componentDidMount() {
    const response = await getData();
    console.log(getData());
    this.setState({
      apiData: response,
    });
  }

  // handleChange(e) {
  //   const typeFilter = e.target.value;
  //   console.log(typeFilter);
  //   console.log(e.target.value);
  //   console.log("test");
  //   // const response = await getData(TypeFilter)
  //   this.setState({
  //     type: typeFilter,
  //   });
  // }

  render() {
    const apiData = this.state.apiData;
    if (!this.state.apiData) return <span>Loading...</span>;
    return (
      <div>
        <Navbar></Navbar>
        <div className="w-full sm:px-8">
          <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="sm:flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Current Prices
              </p>
              <div>
                <label
                  htmlFor="search"
                  className="block pl-2 text-sm font-medium text-gray-700"
                >
                  Search
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full  pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Input"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="type" className="sr-only">
                      Type
                    </label>
                    <select className="focus:ring-blue-500 focus:border-blue-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                      <option
                        type="all"
                        id="all"
                        label="Spot & Future"
                        value="all"
                        checked={this.state.type === "all"}
                        onChange={(e) => {
                          this.handleChange(e);
                        }}
                      >
                        Spot & Future
                      </option>
                      <option
                        type="future"
                        id="future"
                        label="Future"
                        value="future"
                        checked={this.state.type === "future"}
                        onChange={(e) => {
                          this.handleChange(e);
                        }}
                      >
                        Future
                      </option>
                      <option
                        type="spot"
                        id="spot"
                        label="Spot"
                        value="spot"
                        checked={this.state.type === "spot"}
                        onChange={(e) => {
                          this.handleChange(e);
                        }}
                      >
                        Spot
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-red-700 hover:bg-red-600 focus:outline-none rounded">
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
