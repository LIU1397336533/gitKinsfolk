let main = new BScroll('main', {
    click: true
});


ajax({
    method: 'post',
    url: "http://127.0.0.1:3001/data",
    data: {
        'listr': 'zhangsan'
    },
    success: function (data) {
        console.log(homeList)
        //renderleft(homeMenu);

        Nav(homeMenu);
        Songren(homeList);
    }
})

//渲染nav
function Nav(data){
    let nav = '';
    data.forEach(item => {
         nav += `<dl>
        <dt><img src="../img/微信图片_202009021618513.jpg" alt=""></dt>
        <dd>${item.text}</dd>
    </dl>`;
    });
    $('.nav').html(nav);

}

//渲染songren
function Songren(data) {
    let songren = '';
    data.forEach(item => {
        songren += `<h2>${item.tit}</h2>`;
        item.list.forEach(item => {
            songren += `
            <dl>
                <dt><img src="../img/${item.img}" alt=""></dt>
                <dd>
                    <p>${item.name}</p>
                    <p>${item.text}</p>
                    <p>销售爆款</p>
                    <p>${item.tit}</p>
                    <p>
                        <span>
                            <span>￥${item.now_price}<del>￥${item.price}</del></span>
                            <span>${item.haso}</span>
                        </span>
                        <span>
                            <img src="../img/购物车底部_03.gif" alt="">
                        </span>
                    </p>
                </dd>
            </dl>
            `;
        })
        songren += `<div class="gengduo"><p>查看更多</p></div>`;
    })
    $('.songren').html(songren);
}
console.log(parseInt('17',15))