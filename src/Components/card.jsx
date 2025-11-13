import React, { useEffect, useState } from "react";

export default function Card() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetch("https://api.allorigins.win/raw?url=https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setLocation(`${data.city}, ${data.country_name}`);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-lg hover:border-blue-400 transition duration-300 p-5 w-[320px] text-center">
        <h2 className="text-lg font-semibold text-gray-800">
          Your Location
        </h2>
        <p className="text-gray-600 mt-2 text-sm">
          {location || "Fetching location..."}
        </p>
      </div>
    </div>
  );
}
