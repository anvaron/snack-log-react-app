import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/snacks`);
  }

  return (
    <div className="h-full bg-white">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-5xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block text-gray-500 text-6xl mt-10 mb-6">
            Snack a Log
          </span>
          <span className="block text-indigo-500">
            Want to know all about snack nutrition facts?
          </span>
        </h2>
        <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
          You have in the right place, Snack a Log provides the world's most extensive information system.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button 
              onClick={() => handleClick()}
              type="button" 
              className="py-4 px-6 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Go to Snacks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}