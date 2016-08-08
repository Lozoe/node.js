// <script src="a.js"></script>
// <script src="b.js"></script>
// <script src="c.js"></script>

//b.js 同步
/*var i=0;
while(true) {
    i++;
}*/

//单线程nodejs,通过回调的方式异步编程，以达到非阻塞的效果
var c=0;
function print() {
    console.log(c);
}

function plus(callback) {
    setTimeout(function() {
        c += 1;
        callback();
    }, 1000);
}

plus(print);
// print();