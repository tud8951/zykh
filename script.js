function pay(method) {
  if (method === 'wechat') {
    // 创建一个弹出层或模态框显示二维码
    const qrContainer = document.createElement('div');
    qrContainer.style.position = 'fixed';
    qrContainer.style.top = '0';
    qrContainer.style.left = '0';
    qrContainer.style.width = '100%';
    qrContainer.style.height = '100%';
    qrContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    qrContainer.style.display = 'flex';
    qrContainer.style.justifyContent = 'center';
    qrContainer.style.alignItems = 'center';
    qrContainer.style.zIndex = '1000';

    const img = document.createElement('img');
    img.src = 'img/kh.jpg';
    img.style.maxWidth = '300px';
    img.style.maxHeight = '300px';
    img.style.border = '5px solid white';
    img.style.borderRadius = '10px';
    img.style.boxShadow = '0 0 15px black';

    // 点击图片外部关闭弹窗
    qrContainer.addEventListener('click', () => {
      document.body.removeChild(qrContainer);
    });

    qrContainer.appendChild(img);
    document.body.appendChild(qrContainer);
  } else if (method === 'usdt') {
    alert("请使用USDT支付：\n地址：TRX1234567890ABCDEF\n金额：14.99 USDT");
  }
}