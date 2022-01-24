const Posts = {
    render() {
        return /* html */ `
        <div class="w-full h-auto">
        <div class="max-w-screen-lg m-auto">
            <div class="w-80 m-auto flex flex-col items-center">
                <div class="text-3xl font-medium">
                    BÀI VIẾT
                </div>
                <div class="w-28 h-1 bg-red-500 my-5"></div>
            </div>
            <div class="w-full h-auto flex justify-between my-3">
                <div class="blog w-80 h-80 relative flex justify-center">
                    <img class="w-full h-full" src="./img/blog_1.jpg" alt="">
                    <div class="title-blog bg-white h-36 flex flex-col text-center absolute top-28 rounded-sm hidden">
                        <div class="w-60 px-5 font-medium mt-3">
                            Bật mí 10+ cách phối đồ với áo blazer nam ĐƠN GIẢN mà ĐẸP
                        </div>
                        <div class="font-medium mt-3 text-red-500">
                            <a href="">Đọc Thêm</a>
                        </div>
                    </div>
                </div>
                <div class="blog w-80 h-80 relative flex justify-center">
                    <img class="w-full h-full" src="./img/blog_2.jpg" alt="">
                    <div class="title-blog bg-white h-36 flex flex-col text-center absolute top-28 rounded-sm hidden">
                        <div class="w-60 px-5 font-medium mt-3">
                            Bật mí 10+ cách phối đồ với áo blazer nam ĐƠN GIẢN mà ĐẸP
                        </div>
                        <div class="font-medium mt-3 text-red-500">
                            <a href="">Đọc Thêm</a>
                        </div>
                    </div>
                </div>
                <div class="blog w-80 h-80 relative flex justify-center">
                    <img class="w-full h-full" src="./img/blog_3.jpg" alt="">
                    <div class="title-blog bg-white h-36 flex flex-col text-center absolute top-28 rounded-sm hidden">
                        <div class="w-60 px-5 font-medium mt-3">
                            Bật mí 10+ cách phối đồ với áo blazer nam ĐƠN GIẢN mà ĐẸP
                        </div>
                        <div class="font-medium mt-3 text-red-500">
                            <a href="">Đọc Thêm</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    }
};
export default Posts;