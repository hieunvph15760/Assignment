import axios from "axios";
const Posts = {
        async render() {
            const { data } = await axios.get("https://61c734ec9031850017547346.mockapi.io/Post");
            return /* html */ `
        <div class="w-full h-auto">
        <div class="max-w-screen-lg m-auto">
            <div class="w-80 m-auto flex flex-col items-center">
                <div class="text-3xl font-medium">
                    BÀI VIẾT
                </div>
                <div class="w-28 h-1 bg-red-500 my-5"></div>
            </div>
            <div class="w-full h-auto flex justify-between my-3 flex-wrap">
            ${data.map((item) => /* html */
                `<div class="blog w-80 h-80 relative flex justify-center my-3">
                <img class="w-full h-full" src="${item.img}" alt="">
                <div class="title-blog bg-white h-auto flex flex-col text-center absolute top-28 rounded-sm hidden">
                    <div class="w-60 px-5 font-medium mt-3">
                    ${item.title}
                    </div>
                    <div class="font-medium mt-3 text-red-500 pb-3">
                        <a href="">Đọc Thêm</a>
                    </div>
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
export default Posts;