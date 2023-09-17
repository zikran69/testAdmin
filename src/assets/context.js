import { createContext } from "react";
import database from "../db_hotel.json";
export const stores = createContext(database);
