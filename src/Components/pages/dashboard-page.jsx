export default function Dasboard(){
    return(
        <div className="w-full">
            <main className="bg-primary-gray grow overflow-y-auto">
            <div className="p-4 h-[calc(100vh-67.33px)]">
            <div>
                <h1 className="text-2xl font-semibold ml-4 my-6">Dashboard</h1>
            </div>
            <div className="px-4 mx-auto grid place-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 text-slate-900 gap-10 z-10">
                <div
                className="relative p-6 h-[115px] w-full sm:w-[240px] bg-[url('https://images.pexels.com/photos/3771827/pexels-photo-3771827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover  shadow-xl rounded-lg flex"
                >
                <div className="mb-2 text-center">
                    <p className="text-5xl text-cyan-500">20</p>
                    <p className="font-semibold whitespace-nowrap">Kamar Terisi</p>
                </div>
                <p className="absolute right-2 top-2"><i className="ri-equalizer-line"></i></p>
                </div>
                <div
                className="relative p-6 h-[115px] w-full sm:w-[240px] bg-[url('https://images.pexels.com/photos/3688261/pexels-photo-3688261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover shadow-xl rounded-lg flex"
                >
                <div className="mb-2 text-center">
                    <p className="text-5xl text-cyan-500">20</p>
                    <p className="font-semibold whitespace-nowrap">Kamar Kosong</p>
                </div>
                <p className="absolute right-2 top-2"><i className="ri-equalizer-line"></i></p>
                </div>
                <div
                className="relative p-6 h-[115px] w-full sm:w-[240px] bg-[url('https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover shadow-xl rounded-lg flex"
                >
                <div className="mb-2 text-center">
                    <p className="text-5xl text-cyan-500">10</p>
                    <p className="font-bold whitespace-nowrap text-hover-red">Check Out Hari Ini</p>
                </div>
                <p className="absolute right-2 top-2"><i className="ri-equalizer-line"></i></p>
                </div>
                <div
                className="relative p-6 h-[115px] w-full sm:w-[240px] bg-[url('https://images.pexels.com/photos/3770238/pexels-photo-3770238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover shadow-xl rounded-lg flex md:col-start-2 xl:col-start-4"
                >
                <div className="mb-2 text-center">
                    <p className="text-5xl text-cyan-500">12</p>
                    <p className="font-semibold whitespace-nowrap text-white">Pesan Kamar</p>
                </div>
                <p className="absolute right-2 top-2"><i className="ri-equalizer-line"></i></p>
                </div>
            </div>
            <div
                className="bg-white m-8 p-4 rounded shadow"
            >
                <h4 className="text-xl font-semibold ml-4 my-1">
                Tranksaksi Tahun ini
                </h4>
                <div id="myChart"></div>
            </div>
            </div>
            </main>
        </div>
    )
}