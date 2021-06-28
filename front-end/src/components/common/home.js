import Navbar from "./navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      <main className="mt-10 mx-auto px-4 lg:pl-52 lg:pt-36 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Tailwind UI & The</span>{" "}
            <span className="block text-red-600 xl:inline"> FTX API</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            This project was created by Seranged to gather some practice
            utilsing Tailwind as a CSS framework and also gather practice using
            graphs with real-world API data.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start ">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
              >
                Github
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10"
              >
                Readme
              </a>
            </div>
          </div>
        </div>
      </main>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 sm:pt-20 md:pt-16 lg:pt-0">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full "
          src="https://images.unsplash.com/photo-1551043077-b55224769403?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwYWJzdHJhY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
