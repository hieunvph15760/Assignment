import Header from "../components/Header";
import Footer from "../components/Footer";
const checkOut = {
        render() {
            const cart = JSON.parse(localStorage.getItem("cart"));
            return /*html*/ `
            ${Header.render()}
            <div class="w-full h-auto">
            <div class="max-w-screen-lg m-auto h-auto flex py-2 border-b-2 border-[#f2f2f2]">
                <div class="text-[#5d5f6c]">
                    Trang chủ
                </div>
                <div class="mx-2 text-xs leading-7 text-[#5d5f6c]">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
                <div class="text-[#5d5f6c]">
                    Chi tiết thanh toán
                </div>
            </div>
        </div>
        <div class="w-full h-auto mt-3">
            <div class="max-w-screen-lg m-auto h-auto py-2 flex justify-between">
                <form class="w-8/12">
                    <div class="flex w-full justify-between mb-3">
                        <div>
                            Tên<br>
                            <input type="text" class="order-solid border-1 rounded-sm border-gray h-10 w-80 mt-2">
                        </div>
                        <div>
                            Họ<br>
                            <input type="text" class="order-solid w-80 border-1 rounded-sm h-10 border-gray mt-2">
                        </div>
                    </div>
                    <div class="w-full mb-3">
                        Địa chỉ<br>
                        <input type="text" class="order-solid  border-1 w-full rounded-sm h-10 border-gray mt-2">
                    </div>
                    <div class="flex w-full justify-between mb-3">
                        <div>
                            Tên<br>
                            <input type="text" class="order-solid border-1 rounded-sm border-gray h-10 w-80 mt-2">
                        </div>
                        <div>
                            Họ<br>
                            <input type="text" class="order-solid w-80 border-1 rounded-sm h-10 border-gray mt-2">
                        </div>
                    </div>
                    <div class="w-full">
                        Ghi chú<br>
                        <textarea class="order-solid w-full border-1 rounded-sm h-10 border-gray mt-2" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </form>
                <div class="w-3/12 bg-gray-100 rounded-sm h-auto">
                    <div class="donhang w-52 font-bold mt-2 text-xl m-auto">Đơn hàng của bạn</div>
                    <div class="mt-3 w-52 m-auto flex justify-between">
                        <div class=" text-lg font-medium">Sản phẩm</div>
                        <div class=" text-lg font-medium">Giá</div>
                    </div>
                    ${cart.map((item)=>{
                        return /*html*/ `
                        <div class="border-pice mt-2 w-52 m-auto flex justify-between">
                        <div class="text-sm font-medium w-28 break-words">${item.product_name}</div>
                        <div class="text-sm font-medium text-red-500">${new Intl.NumberFormat("VND", { style: "currency", currency: "VND" }).format((item.price - (item.price * item.sale / 100)) * item.quantity)}</div>
                    </div>
                        `;
                    }).join("")}
                    <div class="donhang mt-2 w-52 m-auto flex justify-between">
                        <div class=" text-lg font-medium">Thành tiền</div>
                        <div>1.000.000</div>
                    </div>
                    <div class="mt-2 w-52 m-auto flex justify-center bg-[#f74877] h-10 rounded-sm text-white items-center">
                        <a class="font-medium mua-hang" href="">Mua hàng</a>
                    </div>
                </div>
            </div>
        </div>
            ${Footer.render()}
            `;
    },
    afterRender() {

    }
};
export default checkOut;