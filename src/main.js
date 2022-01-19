import Navigo from "navigo";
import Home from "./pages/home";
import Page from "./pages/about";
const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.querySelector("#app").innerHTML = content;
};
router.on({
    "/": () => {
        print(Home.render());
    },
    "/about": () => {
        print(Page.render());
    }
});