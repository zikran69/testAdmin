export default function TambahKamar() {
  const tambahKamar = (e) => {
    e.preventDefault();
    const formTambah = document.getElementById("layer");
    formTambah.classList.toggle("hidden");
    formTambah.classList.toggle("flex");
  };
  return (
    <button
      onClick={tambahKamar}
      className="py-2 px-5 bg-blue-400 rounded-md text-sm text-white hover:bg-hover-blue"
    >
      <i className="ri-hotel-bed-line mr-2"></i>Tambah Kamar
    </button>
  );
}
