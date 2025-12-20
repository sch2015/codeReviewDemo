// 示例：有问题的JavaScript代码（包含多种常见错误）
function calculatePrice(quantity, price) {
  // 错误1：参数未进行有效性验证（可能导致NaN计算）
  let total = quantiy * price; // 错误2：拼写错误（quantity写成quantiy）
  
  // 错误3：使用==进行类型不敏感比较
  if (discount == undefined) {
    console.log("No discount applied");
  }
  
  // 错误4：浮点数精度问题（0.1+0.2 !== 0.3）
  let serviceFee = total * 0.1 + 0.2;
  
  // 错误5：未处理除零情况
  let average = total / 0;
  
  // 错误6：异步操作中的经典问题（循环内使用var+setTimeout）
  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log("Processing item: " + i); // 将输出3次"Processing item: 3"
    }, 100);
  }
  
  // 错误7：尝试修改const声明的常量
  const taxRate = 0.08;
  taxRate = 0.1;
  
  return total + serviceFee;
}

// 错误8：JSON字符串格式错误（尾随逗号）
let config = JSON.parse('{"debug": true,}');

// 错误9：调用未定义的函数
initApp(); // ReferenceError: initApp is not defined

// 错误10：访问未定义对象的属性
let user = {name: "John"};
console.log(user.age.toString()); // TypeError: Cannot read properties of undefined