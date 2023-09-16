import PropTypes from "prop-types";
export default function KategoriTambah({ database, tambah }) {
  const tambahKategori = () => {
    const db_kategori = database;
    const createKategori = (parKategori, parHarga, parFasilitas, parStatus) => {
      const newKategori = {
        id: Math.random() * 321,
        kategori: parKategori,
        harga: parHarga,
        fasilitas: parFasilitas,
        status: parStatus,
      };
      db_kategori.push(newKategori);
    };
    createKategori(`${Math.random() * 11}`, 0, "ramdom", "missing");
    tambah(db_kategori);
  };
  return (
    <button
      onClick={tambahKategori}
      id="tambah"
      type="button"
      className="py-1 px-5 bg-blue-400 rounded-md text-sm text-white hover:bg-hover-blue"
    >
      <i className="ri-hotel-bed-line mr-2"></i>Tambah
    </button>
  );
}
KategoriTambah.propTypes = {
  database: PropTypes.object,
  tambah: PropTypes.func,
};
