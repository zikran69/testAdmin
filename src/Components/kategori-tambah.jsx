import PropTypes from "prop-types";
export default function KategoriTambah({ database, tambah }) {
  const db = database;
  const tambahKategori = () => {
    const create = (kategori, harga, fasilitas, status) => {
      const newKategori = {
        id: Math.random() * 321,
        kategori: kategori,
        harga: harga,
        fasilitas: fasilitas,
        status: status,
      };
      db.push(newKategori);
    };
    create(`${Math.random() * 11}`, 0, "ramdom", "missing");
    tambah(db);
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
