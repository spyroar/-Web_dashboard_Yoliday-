import { useState, useEffect } from "react";
import { RiSearchLine, RiFilter2Line } from "react-icons/ri";

export default function Portfolio() {
  const [data, setData] = useState([]);
  const [copydata, copySetData] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/data`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        copySetData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    const oldData = [...copydata];
    const filteredData = oldData.filter(
      (item) =>
        item.title.toLowerCase().includes(term) ||
        item.price.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term)
    );
    setData(filteredData);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="relative flex-1 max-w-lg">
          <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search a project"
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            onChange={handleSearchChange}
          />
        </div>
        {/* <button className="flex items-center px-4 py-2 border rounded-lg ml-4">
          <RiFilter2Line className="mr-2" />
          Filter
        </button> */}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-2">
                {project.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-medium">
                  {project.price}
                </span>
                <button className="bg-primary text-white px-4 py-2 rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
