import React, { useEffect, useState } from 'react';

const SiteField = ({ onSelectSite }) => {
  const [sites, setSites] = useState([]);
  const [selectedSite, setSelectedSite] = useState({ siteName: '' });

  useEffect(() => {
    fetch('http://localhost:4000/api/site')
      .then((response) => response.json())
      .then((data) => setSites(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSiteChange = (event) => {
    const selectedSiteData = sites.find(site => site._id === event.target.value);
    setSelectedSite(selectedSiteData.siteName);
    onSelectSite(selectedSiteData.siteName);
  };

  return (
    <>
      Site:
      <select value={selectedSite.siteName} onChange={handleSiteChange}>
        <option value="">Select a site</option>
        {sites.map((site) => (
          <option key={site._id} value={site._id}>
            {site.siteName}
          </option>
        ))}
      </select>
    </>
  );
};

export default SiteField;
