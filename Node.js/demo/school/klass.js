var student = require('./student.js');
var teacher = require('./teacher.js');

teacher.add('Scott');

function add(teacherName, students) {
    teacher.add(teacherName);
    students.forEach(function(item, index) {
        console.log(item+index);
        student.add(item);
    });
}

exports.add = add;//传统的模块实例，module.exports的辅助方法  xxx.add(a,b)
// module.exports = add;//模块成为特别的对象类型，真是存在的东西，有此种方法exports.add失效  xxx(a,b)