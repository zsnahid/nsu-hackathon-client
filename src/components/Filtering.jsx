import React, { useState, useEffect } from "react";

export default function Filtering() {
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // Fetch divisions on component mount
  useEffect(() => {
    fetch("https://bdapis.com/api/v1.2/divisions")
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setDivisions(data.data); // Assuming "data" holds division details
        }
      })
      .catch((error) => console.error("Error fetching divisions:", error));
  }, []);

  // Fetch districts when a division is selected
  const handleDivisionChange = (e) => {
    const division = e.target.value;
    setSelectedDivision(division);
    setSelectedDistrict(""); // Reset selected district when division changes

    if (division) {
      fetch(`https://bdapis.com/api/v1.2/districts?division=${division}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.data) {
            setDistricts(data.data); // Set districts based on the selected division
          }
        })
        .catch((error) => console.error("Error fetching districts:", error));
    } else {
      setDistricts([]); // Reset districts if no division is selected
    }
  };

  // Handle district selection
  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  return (
    <div>
      {/* Division Selector */}
      <select onChange={handleDivisionChange} value={selectedDivision}>
        <option value="">Select Division</option>
        {divisions.map((division, index) => (
          <option key={index} value={division.division}>
            {division.division}
          </option>
        ))}
      </select>

      {/* District Selector */}
      <select onChange={handleDistrictChange} value={selectedDistrict}>
        <option value="">Select District</option>
        {districts.length > 0 ? (
          districts.map((district, index) => (
            <option key={index} value={district.district}>
              {district.district}
            </option>
          ))
        ) : (
          <option value="">Please select a division first</option>
        )}
      </select>
    </div>
  );
}
