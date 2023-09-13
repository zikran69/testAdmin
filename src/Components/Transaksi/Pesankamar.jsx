import React from "react";

const PesanKamar = () => {
    return (
        <main class="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
            <h1 class="m-4 text-2xl font-semibold">Pesan Kamar</h1>
            <div id="modal" class="bg-white border inset-0 rounded-lg mt-2 mx-4 mb-4 p-4 overflow-x-auto">
                <form>
                    <div class="p-4 flex gap-4 flex-wrap">
                        <div class="flex flex-col">
                            <label class="text-zinc-800 " for="kategori">Kategori</label>
                            <select name="kategori" id=""
                                class="focus:outline-secondary-gray outline-secondary-gray p-2.5 rounded-full border border-gray-300 text-secondary-gray">
                                <option>--pilih kategori--</option>
                                <option>gold</option>
                                <option>silver</option>
                            </select>
                        </div>
                        <div class="flex flex-col">
                            <label class="text-zinc-800 text-primary-grey" for="Lantai">Lantai</label>
                            <select name="Lantai" id=""
                                class="focus:outline-secondary-gray p-2.5 rounded-full border border-gray-300 text-secondary-gray">
                                <option>--pilih Lantai--</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                        <div class="flex flex-col text-secondary-gray">
                            <label class="text-zinc-800" for="No kamar">No kamar</label>
                            <select name="No kamar" id=""
                                class="focus:outline-secondary-gray p-2.5 rounded-full border border-gray-300 text-secondary-gray">
                                <option>--pilih No kamar--</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                        <div class="flex flex-col text-secondary-gray">
                            <label class="text-zinc-800" for="Harga kamar">Harga kamar</label>
                            <input type="text" name="Harga kamar" id="Harga kamar"
                                class="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div class="flex flex-col text-secondary-gray">
                            <label class="text-zinc-800" for="Tanggal check-in">Tanggal check-in</label>
                            <input type="text" name="Tanggal check-in" id="Tanggal checkin"
                                class="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div class="flex flex-col text-secondary-gray">
                            <label class="text-zinc-800" for="jam check-in">jam check-in</label>
                            <input type="text" name="jam check-in" id="jam check-in"
                                class="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div class="flex flex-col text-secondary-gray">
                            <label class="text-zinc-800" for="Tanggal Check-out">Tanggal Check-out</label>
                            <input type="text" name="Tanggal Check-out" id="Tanggal Check-out"
                                class="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div class="flex flex-col text-secondary-gray">
                            <label class="text-zinc-800" for="Jam Check-out">Jam Check-out</label>
                            <input type="text" name="Jam Check-out" id="Jam Check-out"
                                class="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div class="flex flex-col text-secondary-gray">
                            <label class="text-zinc-800" for="jumlah-hari">Jumlah hari</label>
                            <input type="text" name="jumlah-hari" id="jumlah-hari"
                                class="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                    </div>
                    <div class="mx-2">
                        <h3 class="font-semibold text-secondary-gray">Custummer</h3>
                    </div>
                    <div class="p-4 flex gap-4 flex-wrap">
                        <div class="flex flex-col text-secondary-gray">
                            <label class="text-zinc-800" for="nik">Nik</label>
                            <input type="text" name="nik" id="nik"
                                class="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div class="flex flex-col text-secondary-gray">
                            <label class="text-zinc-800" for="nama-lengkap">Nama lengkap</label>
                            <input type="text" name="nama-lengkap" id="nama-lengkap"
                                class="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div class="flex flex-col text-secondary-gray">
                            <label class="text-zinc-800" for="no-telepon">No telepon</label>
                            <input type="text" name="no-telepon" id="no-telepon"
                                class="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div class="flex flex-col text-secondary-gray">
                            <label class="text-zinc-800" for="email">Email</label>
                            <input type="text" name="email" id="email"
                                class="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div class="flex flex-col text-secondary-gray">
                            <label class="text-zinc-800" for="alamat">Alamat</label>
                            <input type="text" name="alamat" id="alamat"
                                class="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                    </div>
                    <div class="p-4 flex gap-4 flex-wrap justify-end">
                        <div class="flex flex-col text-secondary-gray">
                            <label class="text-zinc-800" for="untuk-berapa-orang">Untuk berapa orang</label>
                            <input type="text" name="untuk-berapa-orang" id="untuk-berapa-orang"
                                class="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div class="flex flex-col text-secondary-gray">
                            <label class="text-zinc-800" for="metode-pembayaran">Metode pembayaran</label>
                            <input type="text" name="metode-pembayaran" id="metode-pembayaran"
                                class="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                        <div class="flex flex-col text-secondary-gray">
                            <label class="text-zinc-800" for="jumlah-bayar">Jumlah bayar</label>
                            <input type="text" name="jumlah-bayar" id="jumlah-bayar"
                                class="focus:outline-secondary-gray p-2 rounded-full border border-gray-300"/>
                        </div>
                    </div>
                    <div class="flex justify-end p-4">
                        <button class="bg-blue-400 hover:bg-hover-blue text-white py-2 px-4 rounded-full">Bayar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default PesanKamar;