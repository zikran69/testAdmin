import { BrowserRouter } from "react-router-dom";
import Router from "./routers";
import { global } from "./assets/context";
import { useEffect, useState } from "react";

function App() {
  const [dataHotel, setDataHotel] = useState();

  useEffect(() => {
    fetch("https://6507a74b3a38daf4803f9ee4.mockapi.io/kamar")
      .then((res) => res.json())
      .then(setDataHotel);
  }, []);

  const store = {
    dataHotel: dataHotel,
    updateDataHotel: (value) => {
      setDataHotel(value);
    },

    addDataHotel: (value) => {
      setDataHotel([...dataHotel, value]);
    },
  };

  if (dataHotel) {
    return (
      <BrowserRouter>
        <global.Provider value={store}>
          <Router />
        </global.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
