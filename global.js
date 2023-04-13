console.log('__filename: ', __filename);
console.log('__dirname: ', __dirname);

process.on('exit', function(){
    console.log('process exit')
})
process.on('beforeExit', function(){
    console.log('process beforeExit')
})
process.on('uncaughtException', function(){
    console.log('process uncaughtException')
})


// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform);