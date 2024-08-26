import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Delhi",
    },
    {
      id: 2,
      title: "Jaipur",
    },
    {
      id: 3,
      title: "Mumbai",
    },
    {
      id: 4,
      title: "Bangalore",
    },
    {
      id: 5,
      title: "Goa",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6 ">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium focus:shadow-xl focus:text-gray-400 focus:font-light "
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
