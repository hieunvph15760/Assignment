import Header from "../components/Header";
import axios from "axios";
const All_products = {
        async render() {
            const { data } = await axios.get("https://61c734ec9031850017547346.mockapi.io/product")
            return /* html */ `
        ${Header.render()}
        <div class="w-full h-auto">
        <div class="max-w-screen-lg m-auto h-automt-5">
            <div class="flex justify-between flex-wrap mt-4">
            ${data.map((item) => /* html */ `
            <div class="product w-60 h-auto text-center my-3 relative">
            <img class="h-96" src="${item.img}" alt="">
            <div class="align-center text-[#1e1e27] font-medium mb-3">
                <a href="">${item.product_name}</a>
            </div>
            <div class="flex justify-center pb-2">
                <div class="text-red-500 mr-3 font-bold">
                ${item.price}
                </div>
                <div>
                    <del class="text-[#b9b4c7] font-bold"> ${item.sale}</del>
                </div>
            </div>
            <div class="cart w-full h-10 bottom-0 bg-red-500  hidden absolute">
                <a href="" class="font-semibold text-white leading-10">THÊM VÀO GIỎ HÀNG</a>
            </div>
        </div>
            `).join("")}
            </div>
        </div>
    </div>
        `;
    }
};
export default All_products;