// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
  // 需要移除的元素选择器列表
  const elementsToRemove = [
    'div._41b9122',
    'div.a1e75851',
    'span.ad0c98fd'
  ];
  
  function removeElements() {
    elementsToRemove.forEach(selector => {
      const element = document.querySelector(selector);
      if (element) {
        console.log(`成功移除元素: ${selector}`);
        element.remove();
      }
    });
  }
  
  // 立即执行一次
  removeElements();
  
  // 每0.2秒重复执行一次，没有次数限制
  const retryInterval = 200; // 0.2秒
  setInterval(removeElements, retryInterval);
});
