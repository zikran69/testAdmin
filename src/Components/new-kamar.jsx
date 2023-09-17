import PropTypes from "prop-types";
export default function NewKamar({ database, tambah }) {
  const db = database;
  const tambahKamar = () => {
    const create = (
      id,
      kategori,
      lantai,
      nomorKamar,
      fasilitas,
      harga,
      keterangan,
      status
    ) => {
      const newKamar = {
        id: id,
        kategori: kategori,
        lantai: lantai,
        nomorKamar: nomorKamar,
        fasilitas: fasilitas,
        harga: harga,
        keterangan: keterangan,
        status: status,
      };
      db.push(newKamar);
    };
    create(
      `id-${Math.random() * 11}`,
      `kategori-${Math.random() * 3}`,
      `lantai-${Math.random() * 4}`,
      `nomorKamar-${Math.random() * 5}`,
      `fasilitas-${Math.random() * 6}`,
      `harga-${Math.random() * 7}`,
      `keterangan-${Math.random() * 8}`,
      `status-${Math.random() * 9}`
    );
    tambah(db);
  };
  return (
    <button
      onClick={tambahKamar}
      id="tambah"
      type="button"
      className="py-2 px-5 bg-blue-400 rounded-md text-sm text-white hover:bg-hover-blue"
    >
      <i className="ri-hotel-bed-line mr-2"></i>Tambah Kamar
    </button>
  );
}
NewKamar.propTypes = {
  database: PropTypes.array,
  tambah: PropTypes.func,
};
