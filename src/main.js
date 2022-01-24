import Navigo from "navigo";
import Home from "./pages/home";
import All_products from "./pages/products";
import Contact from "./pages/contact";
import Post from "./pages/post";
const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.querySelector("#app").innerHTML = content.render();
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
    }

});
router.resolve();