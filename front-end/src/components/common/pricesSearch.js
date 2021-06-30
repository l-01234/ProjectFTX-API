export default function SearchBox() {
  return (
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
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
           checked=
            id="type"
            name="type"
            className="focus:ring-blue-500 focus:border-blue-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
          >
            <option>Spot & Future</option>
            <option>Future</option>
            <option>Spot</option>
          </select>
        </div>
      </div>
    </div>
  );
}
