var fs = require("fs");
var zlib = require('zlib');

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

var buf = new Buffer.alloc(1024);
fs.open('input1.txt', 'r+', function(err, fd){
    if (err) {
        return console.error(err);
    }

    fs.ftruncate(fd, 10, function(err){
        if (err){
            console.log(err);
         }
         
         fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
            if (err){
               console.log(err);
            }
   
            // 仅输出读取的字节
            if(bytes > 0){
               console.log('ftruncate=========>', buf.slice(0, bytes).toString());
            }
   
            // 关闭文件
            fs.close(fd, function(err){
               if (err){
                  console.log(err);
               } 
               console.log("文件关闭成功！");
            });
         });

    })

})

console.log("程序执行完毕");
