import React, { useState } from "react";

export default function CrimePost() {
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
        "Narsingdi",
        "Netrokona",
        "Shariatpur",
        "Tangail",
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
        "Brahmanbaria",
        "Bandarban",
        "Rangamati",
        "Hill Districts",
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
        "Kurigram",
        "Moulvibazar",
        "Rangpur",
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
        "Chuadanga",
      ],
    },
    {
      name: "Barisal",
      districts: [
        "Barisal",
        "Bhola",
        "Patuakhali",
        "Pirojpur",
        "Jhalokathi",
        "Barguna",
      ],
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
    setSelectedDistrict(""); // Reset district when division changes
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const selectedDivisionObj = divisions.find(
    (division) => division.name === selectedDivision
  );

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1"></div>

      <div className="col-span-1">
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Report a Crime
          </h2>

          <div className="mb-4">
            <label
              htmlFor="division"
              className="block text-sm font-medium text-gray-700"
            >
              Select Division
            </label>
            <select
              id="division"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              onChange={handleDivisionChange}
            >
              <option value="">Select Division</option>
              {divisions.map((division, index) => (
                <option key={index} value={division.name}>
                  {division.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="district"
              className="block text-sm font-medium text-gray-700"
            >
              Select District
            </label>
            <select
              id="district"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              onChange={handleDistrictChange}
              disabled={!selectedDivision}
            >
              <option value="">Select District</option>
              {selectedDivisionObj &&
                selectedDivisionObj.districts.map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700"
            >
              Upload a Photo (Required)
            </label>
            <input
              id="photo"
              type="file"
              accept="image/*"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {/* AI-generated description */}
          <div className="mb-4">
            <label
              htmlFor="aiDescription"
              className="block text-sm font-medium text-gray-700"
            >
              AI-Generated Description (Image Only)
            </label>
            <textarea
              id="aiDescription"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="AI will generate the description based on the image."
              rows="4"
              readOnly
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="video"
              className="block text-sm font-medium text-gray-700"
            >
              Upload a Video (Optional)
            </label>
            <input
              id="video"
              type="file"
              accept="video/*"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description (If Video Uploaded)
            </label>
            <textarea
              id="description"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Enter description of the crime scene..."
              rows="4"
            ></textarea>
          </div>

          <button className="w-full py-3 mt-6 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600">
            Submit Report
          </button>
        </div>
      </div>

      <div className="col-span-1"></div>
    </div>
  );
}
