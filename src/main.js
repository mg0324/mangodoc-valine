let config = {
    el: '#vcomments',
    placeholder: "请输入您的评论！(可匿名)"
}
function title(){
    return window.document.title;
}
export default {
    afterEach(html,next){
        // console.info("demo afterEach:"+html);
        html += `<div id="vcomments"></div>`;
        next(html);
    },
    doneEach(){
        let theConfig = Object.assign({}, config, window.$mangodoc.valine);
        theConfig.path = title();// 默认按标题
        new Valine(theConfig)
        console.info("[mangodoc-valine] render success!")
    }
}