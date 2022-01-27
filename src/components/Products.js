import axios from "axios";
const Products = {
        async render() {
            const { data } = await axios.get("https://61c734ec9031850017547346.mockapi.io/product");
            return /* html*/ `
        <div class="w-full h-auto">
        <div class="max-w-screen-lg h-auto m-auto">
            <div class="w-80 m-auto flex flex-col items-center">
                <div class="text-3xl font-medium">
                    SẢN PHẨM
                </div>
                <div class="w-28 h-1 bg-red-500 my-5"></div>
                <div class="w-full flex justify-between my-3">
                    <div class="w-28 category bg-red-500 h-11 items-center text-white flex justify-center font-medium rounded-sm">
                        <a href="" class="text-white">TẤT CẢ</a>
                    </div>
                    <div class="w-28 category h-11 items-center text-white flex justify-center font-medium rounded-sm">
                        <a href="" class="text-black">NAM</a>
                    </div>
                    <div class="w-28 category h-11 items-center text-white flex justify-center font-medium rounded-sm">
                        <a href="" class="text-black">NỮ</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full h-auto">
        <div class="max-w-screen-lg m-auto h-automt-5">
            <div class="flex justify-between flex-wrap mt-4">
            ${data.map((item) =>  /* html */
        `<div class="product w-60 h-auto text-center my-3 relative">
                <img class="h-96" src="${item.img}" alt="">
                <div class="align-center text-[#1e1e27] font-medium mb-3">
                    <a href="">${item.product_name}</a>
                </div>
                <div class="flex justify-center pb-2">
                    <div class="text-red-500 mr-3 font-bold">
                    ${item.price} ₫
                    </div>
                    <div>
                        <del class="text-[#b9b4c7] font-bold"> ${item.sale} ₫</del>
                    </div>
                </div>
                <div class="cart w-full h-10 bottom-0 bg-red-500  hidden absolute">
                    <a href="" class="font-semibold text-white leading-10">THÊM VÀO GIỎ HÀNG</a>
                </div>
            </div>
                `
    ).join("")}
            </div>
        </div>
    </div>
        `;
    }
};
export default Products;