import Header from "../components/Header";
import Content_post from "../components/content_post";
import Footer from "../components/Footer";
const Post = {
    render() {
        return /*html*/ `
        ${Header.render()}
        ${Content_post.render()}
        ${Footer.render()}
        `;
    }
};
export default Post;