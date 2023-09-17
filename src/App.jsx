import { BrowserRouter } from "react-router-dom";
import Router from "./routers";
import { global } from "./assets/context";
import { useEffect, useState } from "react";

function App() {
  const [db, setDb] = useState();
  useEffect(() => {
    fetch("https://650742c63a38daf4803f53cd.mockapi.io/kamar")
      .then((res) => res.json())
      .then(setDb);
  }, []);
  console.log(db);
  const store = {
    database: db,
    updateDb: (value) => {
      setDb(value);
    },
  };
  if (db) {
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
