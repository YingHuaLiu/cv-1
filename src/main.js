let html = document.querySelector('#html');
let style = document.querySelector('style');

let string = `
/*你好，我是一名前端新人
*接下来我要加样式了
*我要加的样式是
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我要把div变成一个八卦图
  首先把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*然后是一黑一白*/
#div1{
    /*https://cssgradient.io/ 自动生成*/
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    border-radius:50%;
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    border-radius:50%;
}
`;

let n = 0;
let string2 = '';
let fn = () => {
    setTimeout(() => {
        if (n < string.length) {
            if (string[n] === '\n') {
                string2 += '<br>';
                n++;
            } else if (string[n] === ' ') {
                string2 += '&nbsp;';
                n++;
            } else {
                console.log(string[n]);
                string2 += string[n++];
            }
            html.innerHTML = string2;
            style.innerHTML = string.substring(0, n);
            window.scrollTo(0, 99999);
            html.scrollTo(0, 9999);
            fn();
        }
    }, 0);
};
fn();