function pay(method) {
      if (method === 'wechat') {
          document.getElementById("wechatModal").style.display = "block";
            } else if (method === 'usdt') {
                alert("请使用USDT支付：\n地址：TRX1234567890ABCDEF\n金额：14.99 USDT");
                  }
                  }

                  function closeModal() {
                    document.getElementById("wechatModal").style.display = "none";
                    }

                    window.onclick = function(event) {
                      const modal = document.getElementById("wechatModal");
                        if (event.target === modal) {
                            modal.style.display = "none";
                              }
                              }
}