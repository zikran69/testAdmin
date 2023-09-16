import { useState } from "react";

import db_hotel from "../db_hotel.json";
import KategoriTable from "../Components/kategori-table";
import KategoriTambah from "../Components/kategori-tambah";
import KategoriSearch from "../Components/kategori-Search";

export default function KategoiKamarPage() {
  const [database, setStorage] = useState(db_hotel);
  // const [postKategori, setPostKategori] = useState(storage);
  // let dataKategori = storage;

  // if(dataKategori.length>1){
  //     document.querySelector('table').classList.remove('hidden');
  // }

  const dataTambahKategori = (value) => {
    setStorage(value.map((el) => el));
    // dataKategori = value;
    // setPostKategori(value.map(el=>el));
    // console.log(storage)
  };

  const dataMencari = () => {
    // setPostKategori(value.map(el=>el));
  };
  const deleteKategori = (value) => {
    setStorage(value.map((el) => el));
    // dataKategori = value;
    // setPostKategori(value.map(el=>el))
    // console.log(storage)
  };

  return (
    <div className="w-full">
      <div className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
        <h1 className="p-4 font-raleway text-2xl font-semibold">
          Kategori Kamar
        </h1>
        <form className="font-roboto px-4 mx-4 border rounded-lg bg-white max-md:text-sm overflow-auto">
          <div className="grid gap-5 place-items-start sm:flex justify-between m-4 ">
            <KategoriTambah database={database} tambah={dataTambahKategori} />
            <KategoriSearch database={database} mencariKategori={dataMencari} />
          </div>
          <KategoriTable database={database} menghapus={deleteKategori} />
        </form>
      </div>
    </div>
  );
}
