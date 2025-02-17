import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function SnackNewForm() {
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    image: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: "",
  });

  const newSnack = (snack) => {
    console.log(snack)
    axios
      .post(`${API}/snacks`, snack)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((error) => console.warn("catch", error));
  };

  // HANDLERS
  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSnack({ ...snack, is_healthy: !snack.is_healthy });
  };

  const handleClick = () => {
    navigate(`/snacks`);
  };

  const handleSubmit = (event) => {
    //event.preventDefault();
    newSnack(snack);
  };

  return (
    <div className="p-0 md:p-10 mt-64 md:mt-0 bg-gray-100 items-center ">
      <div className="flex items-center justify-center h-screen">
        <div className="block p-10 bg-white w-full md:w-6/12 mb-64 md:md-0 rounded-lg shadow-lg lg:p-12 lg:col-span-3">
          <form >
          <div className="mt-6 mb-6">
            <label className="block mb-2 text-xl font-bold text-gray-600" htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={snack.name}
              onChange={handleTextChange}
              placeholder="Snack's name"
              className="
                        p-4 
                        w-full 
                        text-xl
                        border-gray-200 
                        border-2
                        rounded-sm
                        shadow-sm"
              required
            />
            </div>
            <div className="mt-6 mb-6">
            <label className="block mb-2 text-xl font-bold text-gray-600" htmlFor="image">Image: </label>
            <input
              id="image"
              type="text"
              value={snack.image}
              onChange={handleTextChange}
              placeholder="Input the image's URL"
              className="
                        p-4 
                        w-full 
                        text-xl
                        border-gray-200 
                        border-2
                        rounded-sm
                        shadow-sm"
              required
            />
            </div>
            <div className="grid grid-cols-3 gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3" >
            <div className="mt-6 mb-6 ">
            <label className="block mb-2 text-xl font-bold text-gray-600" htmlFor="fiber">Fiber:</label>
            <input
              id="fiber"
              type="number"
              value={snack.fiber}
              onChange={handleTextChange}
              placeholder="0"
              className="
                        p-4 
                        w-full 
                        text-xl
                        border-gray-200 
                        border-2
                        rounded-sm
                        shadow-sm"
              required
            />
            </div>
            <div class="mt-6 mb-6">
            <label className="block mb-2 text-xl font-bold text-gray-600" htmlFor="protein">Protein:</label>
            <input
              id="protein"
              type="number"
              value={snack.protein}
              onChange={handleTextChange}
              placeholder="0"
              className="
                        p-4 
                        w-full 
                        text-xl
                        border-gray-200 
                        border-2
                        rounded-sm
                        shadow-sm"
              required
            />
            </div>
            <div className="mt-6 mb-6">
            <label className="block mb-2 text-xl font-bold text-gray-600" htmlFor="added_sugar">Added Sugar:</label>
            <input
              id="added_sugar"
              type="number"
              value={snack.added_sugar}
              onChange={handleTextChange}
              placeholder="0"
              className="
                        p-4 
                        w-full 
                        text-xl
                        border-gray-200 
                        border-2
                        rounded-sm
                        shadow-sm"
              required
            />
            </div>
            </div>
            <div className="mt-6 mb-6">
            <label className="text-xl font-bold text-gray-600" htmlFor="is_healthy">Healthy:</label>
            <input
              id="is_healthy"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={snack.is_healthy}
              className="
                        p-4
                        m-4
                        text-sm 
                        border-gray-200
                        border-2
                        rounded-sm
                        shadow-sm"
            />
            </div>
            <div className="flex items-center mt-10 gap-1">
                  <button
                    onClick={() => handleClick()}
                    type="button" 
                    className="w-full border-l border-t border-b text-base font-medium rounded-l-md bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 px-4 py-4"
                    data-bs-toggle="tooltip" data-bs-placement="top" title="Back to Snacks"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto object-center" fill="#FFFFFF" viewBox="0 0 24 24"><path d="M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z"/></svg>
                  </button>
                  <button
                    onClick={() => handleSubmit()}
                    type="button" 
                    className="w-full border-t border-b border-r text-base font-medium rounded-r-md bg-indigo-900 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200  px-4 py-4"
                    data-bs-toggle="tooltip" data-bs-placement="top" title="Submit data"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto object-center" fill="#FFFFFF" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>
                  </button>
                </div>
          </form>
        </div>
      </div>
    </div>
  );
}