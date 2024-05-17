import React from "react";

const cityNameField = {
  borderRadius: "15px",
  borderColor: "#4C4DDB",
  width: "334px",
  height: "42px",
  fontSize: "18px",
  padding: "10px",
  margin: "10px",
  border: "3px solid #4C4DDB",
}

function LocationField({ location, setLocation, searchLocation }) {
  return (
    <div className="search">
      <input
        style={cityNameField}
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"
      />
    </div>
  );
}

export default LocationField;