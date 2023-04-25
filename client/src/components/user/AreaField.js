import React, { useEffect, useState } from 'react';

const AreaField = ({ onSelectArea }) => {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState({ name: '' });

  useEffect(() => {
    fetch('http://localhost:4000/api/area')
      .then((response) => response.json())
      .then((data) => setAreas(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAreaChange = (event) => {
    const selectedAreaData = areas.find(area => area._id === event.target.value);
    setSelectedArea(selectedAreaData.name);
    onSelectArea(selectedAreaData.name);
  };

  return (
    <>
      Area:
      <select value={selectedArea.name} onChange={handleAreaChange}>
        <option value="">Select an area</option>
        {areas.map((area) => (
          <option key={area._id} value={area._id}>
            {area.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default AreaField;
