import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    projects: [],
    categories: [],
    founder: [],
    contacts: [],
    footer: []
    });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbxf1OMYTHlpJLYA8JmXz4YqzMHwwHjA-HWxKAj1AvafqWR_t5hGdFIxK7p9IGi_UFAT-Q/exec")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
