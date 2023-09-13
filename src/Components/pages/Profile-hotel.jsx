const ProfileHotel = ()=>{
    return(
        <div className="w-full">
            <main className="bg-primary-gray grow overflow-y-auto h-[calc(100vh-67.33px)]">
                <h1 className="p-6 font-raleway text-3xl font-semibold">Profile Hotel</h1>
                <div className="px-16 max-md:px-6 py-6 grid grid-cols-1 gap-3 overflow-auto">
                    <div className="mb-2 m-2 max-md:grid max-md:grid-cols-1">
                        <label for="nama_hotel" className="text-left text-2xl text-hover-blue font-roboto mr-2 tracking-[5px]">Nama Hotel</label>
                        <span className="border-collapse focus:outline-none font-raleway text-lg">MyHotel</span>
                        <div className="h-[1px] bg-blue-200 md:w-[500px] lg:w-full"></div>
                    </div>
                    <div className="mb-2 m-2 max-md:grid max-md:grid-cols-1">
                        <label for="nomor_telepon" className="text-left text-2xl text-hover-blue font-roboto mr-2 tracking-[5px]">Nomor Telepon</label>
                        <span className="border-collapse focus:outline-none font-raleway text-lg">021-1239875</span>
                        <div className="h-[1px] bg-blue-200 md:w-[500px] lg:w-full"></div>
                    </div>
                    <div className="mb-2 m-2 max-md:grid max-md:grid-cols-1">
                        <label for="email" className="text-left text-2xl text-hover-blue font-roboto mr-2 tracking-[5px]">Email</label>
                        <span className="border-collapse focus:outline-none font-raleway text-lg">contact@myhotel.group</span>
                        <div className="h-[1px] bg-blue-200 md:w-[500px] lg:w-full"></div>
                    </div>
                    <div className="mb-2 m-2 max-md:grid max-md:grid-cols-1">
                        <label for="alamat" className="text-left text-2xl text-hover-blue font-roboto mr-2 tracking-[5px]">Alamat</label>
                        <span className="border-collapse focus:outline-none font-raleway text-lg">Jl. Soekarno-Hatta 2023 Yogyakarta, Indonesia</span>
                        <div className="h-[1px] bg-blue-200 md:w-[500px] lg:w-full"></div>
                    </div>
                    <div className="mb-2 m-2 max-md:grid max-md:grid-cols-1">
                        <label for="website" className="text-left text-2xl text-hover-blue font-roboto mr-2 tracking-[5px]">Website</label>
                        <span className="border-collapse focus:outline-none font-raleway text-lg">https://www.myhotel-yogya.com</span>
                        <div className="h-[1px] bg-blue-200 md:w-[500px] lg:w-full"></div>
                    </div>
                    <div className="mb-2 m-2 max-md:grid max-md:grid-cols-1">
                        <label for="facebook" className="text-left text-2xl text-hover-blue font-roboto mr-2 tracking-[5px]">Facebook</label>
                        <span className="border-collapse focus:outline-none font-raleway text-lg">myhotelOnFacebook</span>
                        <div className="h-[1px] bg-blue-200 md:w-[500px] lg:w-full"></div>
                    </div>
                    <div className="mb-2 m-2 max-md:grid max-md:grid-cols-1">
                        <label for="twitter" className="text-left text-2xl text-hover-blue font-roboto mr-2 tracking-[5px]">Twitter</label>
                        <span className="border-collapse focus:outline-none font-raleway text-lg">myhotelOnTwitter</span>
                        <div className="h-[1px] bg-blue-200 md:w-[500px] lg:w-full"></div>
                    </div>
                    <div className="mb-2 m-2 max-md:grid max-md:grid-cols-1">
                        <label for="instagram" className="text-left text-2xl text-hover-blue font-roboto mr-2 tracking-[5px]">Instagram</label>
                        <span className="border-collapse focus:outline-none font-raleway text-lg">myhotelOnInstagram</span>
                        <div className="h-[1px] bg-blue-200 md:w-[500px] lg:w-full"></div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProfileHotel;