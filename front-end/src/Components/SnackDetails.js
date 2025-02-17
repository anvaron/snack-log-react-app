import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import heartRegular from "../assets/heart-regular.png";
import heartSolid from "../assets/heart-solid.png";

export default function SnackDetails() {
  

  const [snack, setSnack] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => {
        setSnack(res.data.payload);
      })
      .catch((error) => console.log(error));
  }, [id, navigate, API]);

  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleClick = () => {
    navigate(`/snacks`);
  };

  const handleDelete = () => {
    deleteSnack();
  };

  const handleEdit = () => {
    navigate(`/snacks/${id}/edit`);
  };

  return (
    <div className="container text-center ">
      <div className="relative bg-white  p-4">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="lg:col-start-2 md:pl-20">
            <h2 className="text-4xl mt-10 mb-10 font-extrabold text-indigo-900 tracking-tight sm:leading-9 leading-10">
              {snack.name}
            </h2>
            <h4 className="text-xl leading-8 font-extrabold text-gray-900 tracking-tight sm:leading-9">
              <div className="flex-shrink-0 ">
                <div className="container  my-2">
                {snack.is_healthy 
                  ? 
                  <p className="w-48 mx-auto object-center items-center px-4 py-2  text-base rounded-full text-green-600 bg-green-200">
                    Healthy Snack
                  </p> 
                  : 
                  <p className="w-48 mx-auto object-center items-center px-4 py-2  text-base rounded-full text-white bg-red-600 hover:bg-red-800">
                    Unhealthy Snack
                  </p>
                }
                </div>
              </div>
            </h4>
            <div class="container flex flex-col mx-auto w-full items-center justify-center bg-white rounded-lg shadow">
              <ul class="w-full flex flex-col divide divide-y">
                <li class="flex flex-row">
                  <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                    <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                      <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 4.009c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm2.449 7.882 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" fill-rule="nonzero"/></svg>
                    </div>
                    <div class="flex-1 pl-1 mr-16">
                      <div class="font-medium text-md text-left">
                        Fiber:
                      </div>
                    </div>
                    <div class="text-gray-600 text-xs">
                      <span className="text-2xl font-bold text-indigo-500">{snack.fiber}g</span>
                    </div>
                  </div>
                </li>
                <li class="flex flex-row">
                  <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                    <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                      <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 4.009c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm2.449 7.882 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" fill-rule="nonzero"/></svg>
                    </div>
                    <div class="flex-1 pl-1 mr-16">
                      <div class="font-medium text-md text-left">
                        Protein:
                      </div>
                    </div>
                    <div class="text-gray-600 text-xs">
                      <span className="text-2xl font-bold text-indigo-500">{snack.protein}g</span>
                    </div>
                  </div>
                </li>
                <li class="flex flex-row">
                  <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                    <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                      <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 4.009c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm2.449 7.882 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" fill-rule="nonzero"/></svg>
                    </div>
                    <div class="flex-1 pl-1 mr-16">
                      <div class="font-medium text-md text-left">
                        Added Sugar:
                      </div>
                    </div>
                    <div class="text-gray-600 text-xs">
                      <span className="text-2xl font-bold text-indigo-500">{snack.added_sugar}g</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center mt-10">
              <button
                onClick={() => handleClick()}
                type="button" 
                className="w-full items-center border-l border-t border-b text-base font-bold rounded-l-md bg-gray-900 hover:bg-gray-700 focus:ring-gray-200 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 px-4 py-4"
                data-bs-toggle="tooltip" data-bs-placement="top" title="Back to snacks"
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className="w-6 h-6 mx-auto object-center" 
                     fill="#FFFFFF" 
                     viewBox="0 0 24 24"
                >
                  <path d="M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z"/>
                </svg>
              </button>
              <button
                onClick={() => handleDelete()} 
                type="button" 
                className="w-full items-center border text-base font-bold bg-gray-900 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 px-4 py-4"
                data-bs-toggle="tooltip" data-bs-placement="top" title="Delete data"
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className="w-6 h-6 mx-auto object-center" 
                     fill="#FFFFFF" 
                     viewBox="0 0 24 24" 
                >
                  <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z"/>
                </svg>
              </button>
              <button
                onClick={() => handleEdit()}
                type="button" 
                className="w-full items-center border-t border-b border-r text-base font-bold rounded-r-md bg-gray-900 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 px-4 py-4"
                data-bs-toggle="tooltip" data-bs-placement="top" title="Submit data"
              >
                <svg  xmlns="http://www.w3.org/2000/svg" 
                      className="w-6 h-6 mx-auto object-center" 
                      fill="#FFFFFF"  
                      viewBox="0 0 24 24"
                >
                  <path d="M1.438 16.872l-1.438 7.128 7.127-1.438 12.642-12.64-5.69-5.69-12.641 12.64zm2.271 2.253l-.85-.849 11.141-11.125.849.849-11.14 11.125zm20.291-13.436l-2.817 2.819-5.69-5.691 2.816-2.817 5.691 5.689z"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-10 p-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1">
            <div className="flex-shrink-0 absolute top-2 right-2 z-50">
            <div className=" flex items-center mx-auto justify-center h-20 w-20 rounded-md bg-indigo-200 text-white p-4">
            {snack.is_healthy 
              ? 
              (<img className="max-h-40 w-full object-cover" src={heartSolid} alt="healthy food" />) 
              : 
              (<img className="max-h-40 w-full object-cover" src={heartRegular} alt="unhealthy food" />)
            }
            </div>
            </div>
            <img src={snack.image} alt={snack.name} className="relative mx-auto shadow-lg rounded w-full"/>
          </div>
        </div>
    </div>
    </div>
  );
}