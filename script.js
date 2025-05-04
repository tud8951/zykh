function pay(method) {
  if (method === 'wechat') {
    // 直接跳转到 pay.html 页面
    window.location.href = "pay.html";
  } else if (method === 'usdt') {
    alert("请使用USDT支付：\n地址：0xAdeB8A7967c59bC7E99b15E3884D3bb3FbAb6645);
  }
}