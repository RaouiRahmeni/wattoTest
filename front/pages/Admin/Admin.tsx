import { useState } from "react";
import Modal from "../../components/AddNewUserModal";
import Navigation from "../../components/Navigation";

const Admin = () => {
  const [search, setsearch] = useState("");
  const names = [
    "Miranda Freeman",
    "Arnav Suarez",
    "Trey Marks",
    "Zachery Berry",
    "Daniela Galloway",
    "Casey Barnes",
    "Trevon Mcmillan",
    "Danna Becker",
    "Braylen Terrell",
    "Haven Bush",
    "Jesus Ashley",
    "Omar Burnett",
  ];
  console.log(search);
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="container flex justify-center items-center">
              <div className="relative">
                <input
                  type="text"
                  className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none"
                  placeholder="Search by name..."
                  onChange={(e) => setsearch(e.target.value)}
                />
              </div>
            </div>
            <div className="mr-1">
              <Modal />
            </div>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      users
                    </th>

                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100">
                      Action{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {names
                    .filter((item) => {
                      return search.toLocaleLowerCase() === ""
                        ? item
                        : item.toLocaleLowerCase().includes(search);
                    })
                    .map((name) => {
                      return (
                        <tr>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex">
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {name}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                            <div className="inline-flex">
                              <button
                                className="bg-transparent hover:bg-red-500 text-red-700
                          font-semibold hover:text-white py-2 px-4 border
                          border-red-500 hover:border-transparent rounded"
                              >
                                delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
