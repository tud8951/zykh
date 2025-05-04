function pay(method) {
  if (method === 'wechat') {
    // 直接跳转到 pay.html 页面
    window.location.href = "pay.html";
  } else if (method === 'usdt') {
    alert("请使用USDT支付：\n地址：TRX1234567890ABCDEF\n金额：14.99 USDT");
  }
}