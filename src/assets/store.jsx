import db_hotel from "../db_hotel.json";
import { global } from "./context";
import App from "../App";

export default function Store() {
  let database = db_hotel;
  return (
    <global.Provider value={database}>
      <App />
    </global.Provider>
  );
}
