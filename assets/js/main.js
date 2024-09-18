// 定义要访问的 API URL
const apiUrl = 'https://whyta.cn/api/tx/verse?key=96e175d76865';
// 使用 fetch 获取数据
fetch(apiUrl)
  .then(response => {
    // 检查请求是否成功
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    // 将响应内容解析为 JSON
    return response.json();
  })
  .then(data => {
    // 输出获取的 JSON 数据
    console.log(data);
  })
  .catch(error => {
    // 捕获并处理错误
    console.error('There was a problem with the fetch operation:', error);
  });
