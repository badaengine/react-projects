import { useState } from "react";

const carItems = ["Honda", "BMW", "Hyundai", "Maruti", "Audi"];

export default function Search() {
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredItems = carItems
    .filter((item) => item.toLowerCase().includes(searchText.toLowerCase()))
    .slice(0, 3);

  const handleSearch = (item) => {
    setSelected(item);
    setSearchText(item);
    setShowDropdown(false);
  };

  return (
    <div className="p-4 max-w-md mx-auto relative">
      <input
        type="text"
        placeholder="Search Car"
        className="w-full p-2 border rounded-lg shadow-sm"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          setShowDropdown(true);
        }}
        onFocus={() => setShowDropdown(true)}
      />

      {showDropdown && searchText && (
        <ul className="absolute w-full bg-white border mt-1 rounded-lg shadow-lg">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleSearch(item)}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results</li>
          )}
        </ul>
      )}

      {selected && (
        <p className="mt-4 text-green-600">Final Selection: {selected}</p>
      )}
    </div>
  );
}
