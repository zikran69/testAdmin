import { object } from "prop-types";
import { global } from "../assets/context";
import { useContext } from "react";

export default function FormTambah() {
  const addDataHotel = useContext(global).addDataHotel;
  const close = () => {
    document.getElementById("layerFormTambah").classList.toggle("hidden");
    document.getElementById("layerFormTambah").classList.toggle("flex");
  };

  const submitTambah = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {
      kategori,
      lantai,
      nomorKamar,
      fasilitas,
      harga,
      status,
      keterangan,
      image,
    } = Object.fromEntries(formData);
    console.log(
      kategori,
      lantai,
      nomorKamar,
      fasilitas,
      harga,
      status,
      keterangan
    );
    close();
  };

  return (
    <div
      id="layerFormTambah"
      className="hidden h-screen w-screen absolute z-30 top-0 left-0 justify-center "
    >
      <div className="w-screen h-screen bg-primary-blue opacity-60" />
      <div className="font-raleway px-8 py-4 bg-zinc-100 w-fit rounded-sm h-fit absolute top-[25%]">
        <div className="flex justify-between">
          <button type="button" onClick={close}>
            <i className="ri-close-line text-2xl font-semibold hover:text-hover-blue"></i>
          </button>
        </div>
        <div className="grid grid-cols-1 bg-white px-8 py-16 rounded-sm lg:w-[900px] max-lg:max-h-[450px] overflow-auto">
          <div className="text-center text-3xl font-semibold">Tambah Kamar</div>
          <form onSubmit={submitTambah} className="text-sm mt-4 overflow-auto">
            <div className="grid mx-sm:grid-cols-1 lg:grid-cols-2 lg:my-8 min-w-[350px]">
              <div className="grid gap-1 mb-2 ml-2">
                <label className="text-left">Kategori Kamar</label>
                <select
                  name="kategori"
                  className="font-raleway h-10 pl-1 border rounded-sm bg-blue-50 active:bg-blue-100 md:w-[500px] lg:w-full"
                >
                  <option value="Junior Suite">Junior Suite</option>
                  <option value="Executive Suite">Executive Suite</option>
                  <option value="Super Deluxe">Super Deluxe</option>
                </select>
              </div>
              <div className="grid gap-1 mb-2 ml-2">
                <label className="text-left">Lantai Kamar</label>
                <select
                  name="lantai"
                  className="font-raleway h-10 pl-1 border rounded-sm bg-blue-50 active:bg-blue-100 md:w-[500px] lg:w-full"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="grid gap-1 mb-2 ml-2">
                <label className="text-left">Harga</label>
                <select
                  name="harga"
                  className="font-raleway h-10 pl-1 border rounded-sm bg-blue-50 active:bg-blue-100 md:w-[500px] lg:w-full"
                >
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                </select>
              </div>
              <div className="grid gap-1 mb-2 ml-2">
                <label className="text-left">Status</label>
                <select
                  name="status"
                  className="font-raleway h-10 pl-1 border rounded-sm bg-blue-50 md:w-[500px] lg:w-full"
                >
                  <option value="tersedia">tersedia</option>
                  <option value="penuh">penuh</option>
                </select>
              </div>
              <div className="grid gap-1 mb-2 ml-2">
                <label className="text-left">Fasilitas</label>
                <textarea
                  name="fasilitas"
                  className="font-raleway h-16 px-2 pt-2 border rounded-sm bg-gray-100 resize-none md:w-[500px] lg:w-full"
                >
                  ac, tv
                </textarea>
              </div>
              <div className="grid gap-1 mb-2 ml-2">
                <label className="text-left">Keterangan</label>
                <textarea
                  name="keterangan"
                  className="font-raleway h-16 px-2 pt-2 border rounded-sm bg-blue-50 resize-none md:w-[500px] lg:w-full"
                ></textarea>
              </div>
              <div className="grid gap-1 mb-2 ml-2">
                <label className="text-left">No Kamar</label>
                <input
                  name="nomorKamar"
                  className="py-[7px] h-10 pl-4 border rounded-sm bg-gray-50 md:w-[500px] lg:w-full"
                ></input>
              </div>
              <div className="grid gap-1 mb-2 ml-2">
                <label className="mr-2">Image (url)</label>
                <input
                  name="image"
                  type="text"
                  className="py-[7px] h-10 pl-4 border rounded-sm bg-gray-50 md:w-[500px] lg:w-full"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4 my-4">
              <button
                onClick={close}
                type="button"
                className="bg-yellow-500 hover:bg-hover-yellow text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-hover-blue text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
