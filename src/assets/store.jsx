import { createContext } from "react";
import db_hotel from "../db_hotel.json";
import App from "../App";

const stores = createContext(null);

export default function Store() {
  const database = db_hotel;
  return (
    <stores.Provider value={database}>
      <App />
    </stores.Provider>
  );
}
