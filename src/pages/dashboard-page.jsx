import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Penjualan",
    },
  },
};

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Data 1",
      data: [12, 21, 31, 44, 8, 7, 18, 62, 33, 12, 29, 24],
      backgroundColor: "#9EDDFF",
    },
  ],
};

export default function Dashboard() {
  return (
    <div className="w-full">
      <main className="bg-primary-gray grow overflow-y-auto">
        <div className="p-4 h-[calc(100vh-67.33px)]">
          <div>
            <h1 className="text-2xl font-semibold ml-4 my-6">Dashboard</h1>
          </div>
          <div className="px-4 mx-auto grid place-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 text-secondary-gray gap-10 z-10">
            <div className="relative p-6 h-[115px] w-full sm:w-[240px] bg-white shadow-xl rounded-lg flex">
              <div className="mb-2 text-center">
                <p className="text-5xl text-secondary-blue">20</p>
                <p className="font-semibold whitespace-nowrap">Kamar Terisi</p>
              </div>
              <p className="absolute right-2 top-2">
                <i className="ri-equalizer-line"></i>
              </p>
            </div>
            <div className="relative p-6 h-[115px] w-full sm:w-[240px] bg-white shadow-xl rounded-lg flex">
              <div className="mb-2 text-center">
                <p className="text-5xl text-secondary-blue">20</p>
                <p className="font-semibold whitespace-nowrap">Kamar Kosong</p>
              </div>
              <p className="absolute right-2 top-2">
                <i className="ri-equalizer-line"></i>
              </p>
            </div>
            <div className="relative p-6 h-[115px] w-full sm:w-[240px] bg-white shadow-xl rounded-lg flex">
              <div className="mb-2 text-center">
                <p className="text-5xl text-secondary-blue">10</p>
                <p className="font-semibold whitespace-nowrap">
                  Check Out Hari Ini
                </p>
              </div>
              <p className="absolute right-2 top-2">
                <i className="ri-equalizer-line"></i>
              </p>
            </div>
            <div className="relative p-6 h-[115px] w-full sm:w-[240px] bg-white shadow-xl rounded-lg flex md:col-start-2 xl:col-start-4">
              <div className="mb-2 text-center">
                <p className="text-5xl text-secondary-blue">12</p>
                <p className="font-semibold whitespace-nowrap">Pesan Kamar</p>
              </div>
              <p className="absolute right-2 top-2">
                <i className="ri-equalizer-line"></i>
              </p>
            </div>
          </div>
          <div className="bg-white m-8 p-4 rounded shadow">
            <h4 className="text-xl font-semibold ml-4 my-1">
              Transaksi Tahun ini
            </h4>
            <div>
              <Bar options={options} data={data} height={300} width={600} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
