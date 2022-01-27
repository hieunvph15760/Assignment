import Navigo from "navigo";
import Home from "./pages/home";
import All_products from "./pages/products";
import Contact from "./pages/contact";
import Post from "./pages/post";
import Dashboard from "./pages/admin/dashboard";
import AdminProduct from "./pages/admin/products";
import addProduct from "./pages/admin/products/addProduct";
import editProduct from "./pages/admin/products/editProduct";
import AdminPost from "./pages/admin/posts";
import addPost from "./pages/admin/posts/addPost";
import editPost from "./pages/admin/posts/editPost";
const router = new Navigo("/", { linksSelector: "a" });
const print = async(content) => {
    document.querySelector("#app").innerHTML = await content.render();
    content.afterRender ? content.afterRender() : "";

};
router.on({
    "/": () => {
        print(Home);
    },
    "/products": () => {
        print(All_products);
    },
    "/contact": () => {
        print(Contact);
    },
    "/post": () => {
        print(Post);
    },
    "/admin/dashboard": () => {
        print(Dashboard);
    },
    "/admin/product": () => {
        print(AdminProduct);
    },
    "/admin/addProduct": () => {
        print(addProduct);
    },
    "/admin/editProduct": () => {
        print(editProduct);
    },
    "/admin/post": () => {
        print(AdminPost);
    },
    "/admin/addPost": () => {
        print(addPost);
    },
    "/admin/editPost": () => {
        print(editPost);
    },

});
router.resolve();