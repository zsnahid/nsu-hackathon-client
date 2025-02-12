import React, { useState } from "react";

export default function Filtering() {
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // Predefined divisions and districts
  const divisions = [
    {
      name: "Dhaka",
      districts: [
        "Dhaka",
        "Faridpur",
        "Gazipur",
        "Kishoreganj",
        "Madaripur",
        "Manikganj",
        "Munshiganj",
        "Mymensingh",
        "Narayanganj",
      ],
    },
    {
      name: "Chittagong",
      districts: [
        "Chittagong",
        "Cox's Bazar",
        "Comilla",
        "Chandpur",
        "Feni",
        "Khagrachari",
        "Lakshmipur",
        "Noakhali",
      ],
    },
    {
      name: "Rajshahi",
      districts: [
        "Rajshahi",
        "Naogaon",
        "Pabna",
        "Chapai Nawabganj",
        "Bogura",
        "Joypurhat",
        "Dinajpur",
        "Kurigram",
      ],
    },
    {
      name: "Khulna",
      districts: [
        "Khulna",
        "Bagerhat",
        "Satkhira",
        "Meherpur",
        "Kusumgram",
        "Jhenidah",
      ],
    },
    {
      name: "Barisal",
      districts: ["Barisal", "Bhola", "Patuakhali", "Pirojpur", "Jhalokathi"],
    },
    {
      name: "Sylhet",
      districts: ["Sylhet", "Moulvibazar", "Habiganj", "Sunamganj"],
    },
    {
      name: "Rajshahi",
      districts: [
        "Rajshahi",
        "Dinajpur",
        "Pabna",
        "Naogaon",
        "Chapai Nawabganj",
      ],
    },
    {
      name: "Mymensingh",
      districts: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"],
    },
  ];

  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
    setSelectedDistrict(""); // Reset selected district when division changes
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const selectedDivisionObj = divisions.find(
    (division) => division.name === selectedDivision
  );

  return (
    <div>
      <div className="mb-4">
        <span className="font-semibold text-lg">Filtering by</span>
      </div>
      <div class="flex gap-3">
        {/* Division Selector */}
        <select
          onChange={handleDivisionChange}
          value={selectedDivision}
          className="mb-4"
        >
          <option value="">Select Division</option>
          {divisions.map((division, index) => (
            <option key={index} value={division.name}>
              {division.name}
            </option>
          ))}
        </select>

        {/* District Selector */}
        <select
          onChange={handleDistrictChange}
          value={selectedDistrict}
          disabled={!selectedDivision}
          className="mb-4"
        >
          <option value="">Select District</option>
          {selectedDivisionObj &&
            selectedDivisionObj.districts.map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
        </select>

        {/* Verification Score Selector */}
        <select onChange={(e) => console.log(e.target.value)} className="mb-4">
          <option value="">Veri. Score</option>
          <option value="high">High (80+)</option>
          <option value="medium">Medium (50-80)</option>
          <option value="low">Low (50)</option>
        </select>
      </div>
    </div>
  );
}
