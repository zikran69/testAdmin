import FormTambah from "../utils/form-tambah";
export default function TambahKamar() {
  const tambahKamar = (e) => {
    e.preventDefault();
    const formTambah = document.getElementById("layer");
    console.log(formTambah);
    formTambah.classList.toggle("hidden");
    formTambah.classList.toggle("flex");
  };
  return (
    <>
      <button
        onClick={tambahKamar}
        className="py-2 px-5 bg-blue-400 rounded-md text-sm text-white hover:bg-hover-blue"
      >
        <i className="ri-hotel-bed-line mr-2"></i>Tambah Kamar
      </button>
      <FormTambah />
      {/* <div
        id="layer"
        className="hidden w-screen h-screen absolute z-30 top-0 left-0"
      >
        <div className="bg-primary-blue z-30 absolute top-0 w-screen h-screen"></div>
        <div className="z-30 bg-green-200 w-screen h-fit flex justify-center my-auto">
          <FormTambah />
        </div>
      </div> */}
    </>
  );
}
