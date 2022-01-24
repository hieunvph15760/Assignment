import Header from "../components/Header";
import Slider from "../components/Slider";
import Products from "../components/Products";
import Banner from "../components/Banner";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

const Home = {
    render() {
        return /*html*/ `
            ${Header.render()}
            ${Slider.render()}
            ${Products.render()}
            ${Banner.render()}
            ${Posts.render()}
            ${Footer.render()}
        `;
    }
};
export default Home;