var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

life.setMaxListeners(11);
//addEventlistener
life.on('hey',function(who) {
    console.log(who+',1.drink water please');
});
life.on('hey',function(who) {
    console.log(who+',2.cook please');
});
life.on('hey',function(who) {
    console.log(who+',3.play please');
});
function sing(who) {
    console.log(who+',4.sing please');
}
life.on('hey',sing);
life.removeListener('hey', sing);
life.on('hey',function(who) {
    console.log(who+',5.dance please');
});
life.on('hey',function(who) {
    console.log(who+',6.read please');
});
life.on('hey',function(who) {
    console.log(who+',7.read please');
});
life.on('hey',function(who) {
    console.log(who+',8.read please');
});
life.on('hey',function(who) {
    console.log(who+',9.read please');
});
life.on('hey',function(who) {
    console.log(who+',10.read please');
});
life.on('hey',function(who) {
    console.log(who+',11.read please');
});

life.removeAllListeners('hey');

var hey = life.emit('hey','xiaoming');
console.log(hey); //true
var hey1 = life.emit('hey1','xiaoming');
console.log(hey1);  //false

console.log(life.listeners('hey').length);  //10
console.log(EventEmitter.listenerCount(life,'hey'));  //10