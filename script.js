function pay(method) {
    if (method === 'wechat') {
      alert("跳转到微信支付二维码页面（此处可接入支付接口）");
      // 例如 window.location.href = "/pay/wechat";
    } else if (method === 'usdt') {
      alert("请使用USDT支付：\n地址：TRX1234567890ABCDEF\n金额：14.99 USDT");
    }
  }