/**
 * 手写一个ajax
 */
function request(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(xhr.responseText);
      }
    }
  };

  xhr.send(null);
}
