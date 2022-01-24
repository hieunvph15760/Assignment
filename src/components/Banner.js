const Banner = {
    render() {
        return /* html */ `
        <div class="w-full h-auto bg-[#f2f2f2] mt-5 mb-8">
        <div class="max-w-screen-lg m-auto flex justify-between">
            <div>
                <img class="h-96 w-96" src="./img/deal_ofthe_week.png" alt="">
            </div>
            <div class="h-96 w-auto flex flex-col items-center">
                <div class="text-4xl font-medium mt-40">
                    GIAO DỊCH TRONG TUẦN
                </div>
                <div class="h-1 w-64 bg-red-500 my-5"></div>
                <div class="text-center w-36 h-10 rounded-sm font-medium bg-black mt-3 text-white">
                    <a href="" class="leading-10">MUA NGAY</a>
                </div>
            </div>
        </div>
    </div>
    `;
    }
};
export default Banner;