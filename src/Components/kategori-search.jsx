export default function KategoriSearch({ database, cari }) {
  const searching = (e) => {
    const db_filter = database.filter((item) =>
      item.database.includes(e.target.value)
    );
    cari(db_filter);
  };
  return (
    <input
      onChange={searching}
      type="search"
      placeholder="cari..."
      className="pl-4 pr-2 border border-secondary-gray rounded-[20px] focus:outline-none focus:border-gray-500 order-first sm:order-last text-lg"
    />
  );
}
