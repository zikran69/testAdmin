import PropTypes from "prop-types";
export default function LantaiTambah({ database, tambah }) {
  const lantaiKategori = () => {
    const db = database;
    const create = (lantai, keterangan, status) => {
      const newLantai = {
        id: Math.random() * 321,
        lantai: lantai,
        keterangan: keterangan,
        status: status,
      };
      db.push(newLantai);
    };
    create(`${Math.random() * 11}`, 0, "ramdom", "missing");
    tambah(db);
  };
  return (
    <button
      onClick={lantaiKategori}
      id="tambah"
      type="button"
      className="py-1 px-5 bg-blue-400 rounded-md text-sm text-white hover:bg-hover-blue"
    >
      <i className="ri-hotel-bed-line mr-2"></i>Tambah
    </button>
  );
}
LantaiTambah.propTypes = {
  database: PropTypes.object,
  tambah: PropTypes.func,
};
