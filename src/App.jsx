import { BrowserRouter } from "react-router-dom";
import Router from "./routers";
import { global } from "./assets/context";
import db_hotel from "./db_hotel.json";
import { useState } from "react";

function App() {
  const [db, setDb] = useState(db_hotel);
  const store = {
    database: db,
    func: (value) => {
      setDb(value);
    },
  };
  return (
    <BrowserRouter>
      <global.Provider value={store}>
        <Router />
      </global.Provider>
    </BrowserRouter>
  );
}

export default App;
