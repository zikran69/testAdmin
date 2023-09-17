import { useState } from "react";
import db_hotel from "../db_hotel.json";
import LantaiTable from "../Components/lantai-table";

export default function LantaiKamarPage() {
  const [database, setdatabase] = useState(db_hotel);

  //   const dataTambahKategori = (value) => {
  //     setdatabase(value.map((el) => el));
  //   };

  //   const dataMencari = (value) => {
  //     // setPostKategori(value.map(el=>el));
  //   };
  const deleteKategori = (value) => {
    setdatabase(value.map((el) => el));
  };

  return (
    <div className="w-full">
      <div className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
        <h1 className="p-4 font-raleway text-2xl font-semibold">
          Lantai Kamar
        </h1>
        <form className="font-roboto px-4 mx-4 border rounded-lg bg-white max-md:text-sm overflow-auto">
          <div className="grid gap-5 place-items-start sm:flex justify-between m-4 ">
            {/* <Tambah dataKategori={database} menambahKategori={dataTambahKategori} /> */}
            {/* <Search dataKategori={database} mencariKategori={dataMencari} /> */}
          </div>
          <LantaiTable database={database} menghapus={deleteKategori} />
        </form>
      </div>
    </div>
  );
}
