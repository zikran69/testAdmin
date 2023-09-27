import { useState } from "react";
import { useContext } from "react";
import { global } from "../assets/context";

import KategoriTable from "../Components/kategori-table";
import NewKamar from "../Components/new-kamar";
import Cari from "../Components/Cari";

export default function KategoiKamarPage() {
  const storage = useContext(global).database;
  const [database, setDatabase] = useState(storage);
  const updateDb = useContext(global).updateDb;

  const tambah = (value) => {
    setDatabase(value.map((el) => el));
    updateDb(value);
  };

  const cari = (value) => {
    setDatabase(storage.filter((e) => e.kategori.includes(value)));
  };
  const hapus = (value) => {
    console.log(value);
  };

  return (
    <div className="w-full lg:w-[calc(100vw-220px)]">
      <div className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
        <h1 className="p-4 font-raleway text-2xl font-semibold">
          Kategori Kamar
        </h1>
        <form className="font-roboto px-4 mx-4 border rounded-lg bg-white max-md:text-sm overflow-auto">
          <div className="grid gap-5 place-items-start sm:flex justify-between m-4 ">
            <NewKamar database={database} />
            <Cari database={database} cari={cari} />
          </div>
          <KategoriTable database={database} value={hapus} />
        </form>
      </div>
    </div>
  );
}
