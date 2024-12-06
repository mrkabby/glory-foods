import { useState, useEffect } from "react";


const useGoogleSheetData = (tabName, range) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!tabName || !range) return;

    const fetchData = async () => {
      const sheetID = import.meta.env.VITE_GOOGLE_SHEET_ID;
      const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${tabName}!${range}?key=${apiKey}`;

      try {
        const response = await fetch(url);
        const result = await response.json();
        if (result.values) {
          setData(result.values);
        } else {
          setError("No data found.");
        }
      } catch (err) {
        setError("Error fetching data.");
        console.error(err);
      }
    };

    fetchData();
  }, [tabName, range]);

  return [data, error];
};

export default useGoogleSheetData;
