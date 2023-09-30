import { useContext, useEffect, useState } from "react";
import { global } from "../assets/context";
import { layer } from "../Components/opsi";

export default function FormDetail() {
  const dataID = useContext(global).dataID;

  const [room, setRoom] = useState();
  useEffect(() => {
    fetch(`https://6507a74b3a38daf4803f9ee4.mockapi.io/api/v1/rooms/${dataID}`)
      .then((res) => res.json())
      .then(setRoom);
  }, [dataID]);

  const close = () => {
    layer(document.getElementById("layerFormDetail"));
  };

  return (
    room && (
      <div
        id="layerFormDetail"
        className="h-screen w-screen absolute z-30 top-0 left-0 justify-center hidden"
      >
        <div className="min-w-[500px] w-screen h-screen bg-primary-blue opacity-60" />
        <div
          className="
          font-raleway 
          px-8 
          py-12 
          bg-zinc-100 
          rounded-sm 
          h-fit 
          absolute 
          top-[70px]
          w-[250px]
          min-[300px]:w-[300px]
          min-[1024px]:w-[800px] 
          min-[1440px]:w-[1000px] 
          min-[1700px]:w-[1300px] 
          min-[1920px]:w-[1500px]"
        >
          <button
            onClick={close}
            className="absolute right-6 top-4 font-raleway text-zinc-700 hover:bg-zinc-200 py-1 px-3 rounded-full md:text-3xl"
          >
            X
          </button>
          <div
            className="
          text-center font-bold
          lg:text-3xl"
          >
            Detail Kamar
          </div>
          <form className="text-sm mt-4 overflow-auto font-raleway capitalize">
            <div
              className="
            grid 
            grid-cols-2 
            w-[220px]
            "
            >
              <label
                className="
                font-semibold
                text-third-blue
                mb-2 
                w-[200px]"
              >
                Kategori Kamar
              </label>
              <span
                className="
                text-[10px] 
                text-zinc-600 
                w-[150px]"
              >
                {room.kategori}
              </span>
            </div>
            <div
              className="
              grid 
              grid-cols-2 
              w-[220px]
              "
            >
              <label
                className="
                font-semibold
                text-third-blue
                mb-2 
                w-[200px]"
              >
                Lantai Kamar
              </label>
              <span
                className="
                text-[10px] 
              text-zinc-600 
              w-[150px]"
              >
                {room.lantai}
              </span>
            </div>
            <div
              className="
              grid 
              grid-cols-2 
              w-[220px]
              "
            >
              <label
                className="
                font-semibold
                text-third-blue
                mb-2 
                w-[200px]"
              >
                Nomor Kamar
              </label>
              <span
                className="
                text-[10px] 
                text-zinc-600 
                w-[150px]"
              >
                {room.nomorKamar}
              </span>
            </div>
            <div
              className="
              grid 
              grid-cols-2 
              w-[220px]
              "
            >
              <label
                className="
                font-semibold
                text-third-blue
                mb-2 
                w-[200px]"
              >
                Fasilitas
              </label>
              <span
                className="
                text-[10px] 
                text-zinc-600 
                w-[150px]"
              >
                {room.fasilitas}
              </span>
            </div>
            <div
              className="
              grid 
              grid-cols-2 
              w-[220px]
              "
            >
              <label
                className="
                font-semibold
                text-third-blue
                mb-2 
                w-[200px]"
              >
                Harga
              </label>
              <span
                className="
                text-[10px] 
                text-zinc-600 
                w-[150px]"
              >
                {room.harga}
              </span>
            </div>
            <div
              className="
              grid 
              grid-cols-2 
              w-[220px]
              "
            >
              <label
                className="
                font-semibold
                text-third-blue
                mb-2 
                w-[200px]"
              >
                Status
              </label>
              <span
                className="
                text-[10px] 
                text-zinc-600 
                w-[150px]"
              >
                {room.status}
              </span>
            </div>
            <div
              className="
              grid 
              grid-cols-2 
              w-[220px]
              "
            >
              <label
                className="
                font-semibold
                text-third-blue
                mb-2 
                w-[200px]"
              >
                Keterangan
              </label>
              <span
                className="
              text-[10px] 
              text-zinc-600 
              w-[150px]"
              >
                {room.keterangan}
              </span>
            </div>
            <div
              className="
              grid 
              grid-cols-2 
              w-[220px]
              "
            >
              <label
                className="
                font-semibold
                text-third-blue
                mb-2 
                w-[200px]"
              >
                Image
              </label>
              <img src={room.image} />
            </div>
          </form>
        </div>
      </div>
    )
  );
}
