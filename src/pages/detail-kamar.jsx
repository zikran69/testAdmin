import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

export default function DetailKamarForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState();
  useEffect(() => {
    fetch("https://apibackendtest.vercel.app/rooms/" + id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setId(resp.idRoom);
        setCategory(resp.categoryId);
        setFloor(resp.floorId);
        setName(resp.nameRoom);
        setNumber(resp.numberRoom);
        setDesc(resp.descRoom);
        setStatus(resp.statusId);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [idRoom, setId] = useState("");
  const [categoryId, setCategory] = useState("");
  const [floorId, setFloor] = useState("");
  const [nameRoom, setName] = useState("");
  const [numberRoom, setNumber] = useState("");
  const [descRoom, setDesc] = useState("");
  const [statusId, setStatus] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const admData = {
      categoryId,
      nameRoom,
      floorId,
      numberRoom,
      descRoom,
      statusId,
    };

    fetch("https://apibackendtest.vercel.app/rooms/" + id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(admData),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/list-kamar");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="w-full">
        <main className="bg-primary-gray grow overflow-y-auto">
          <div
            id="modal-overlay"
            className="hidden bg-black h-full w-full absolute top-0 left-0 opacity-90"
          ></div>
          <div className="p-4 h-[calc(100vh-67.33px)]">
            <div>
              <h1 className="text-2xl font-semibold">Detail Room</h1>
            </div>
            <div className="p-4">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div className="relative overflow-x-auto">
                  <form onSubmit={handlesubmit}>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 m-5">
                      <div className="md:col-span-3">
                        <label>Room Category</label>
                        <select
                          onChange={(e) => setCategory(e.target.value)}
                          required
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                        >
                          <option value={""}>--select--</option>
                          <option value={1}>Admin</option>
                          <option value={2}>Superadmin</option>
                        </select>
                      </div>
                      <div className="md:col-span-3">
                        <label>Floor</label>
                        <select
                          onChange={(e) => setFloor(e.target.value)}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                        >
                          <option value={""}>--select--</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                        </select>
                      </div>
                      <div className="md:col-span-3">
                        <label>Name Room</label>
                        <input
                          value={nameRoom}
                          onChange={(e) => setName(e.target.value)}
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Name Room"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Number Room</label>
                        <select
                          onChange={(e) => setNumber(e.target.value)}
                          required
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                        >
                          <option value={""}>--select--</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                        </select>
                      </div>
                      <div className="md:col-span-3">
                        <label>Description</label>
                        <input
                          value={descRoom}
                          onChange={(e) => setDesc(e.target.value)}
                          required
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Desc"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Status</label>
                        <select
                          onChange={(e) => setStatus(e.target.value)}
                          required
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-0"
                        >
                          <option value={""}>--select--</option>
                          <option value={1}>Empty</option>
                          <option value={2}>Booked</option>
                        </select>
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <Link to="/list-kamar">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Close
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
