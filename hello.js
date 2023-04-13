//把一个对象封装到模块
function Hello() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
};

function World() {
    console.log('Hello World');
  }

module.exports = {Hello, World};
