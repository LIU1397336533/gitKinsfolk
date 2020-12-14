function ajax(opt) {
    var xhr = new XMLHttpRequest();
    var req = '';
    for (var i in opt.data) {
        req += i + '=' + opt.data[i] + '&';
    }
    req = req.slice(0, req.length - 1);
    if (opt.method.toLocaleUpperCase() == 'GET') {
        opt.url += ('?' + req)
    }
    xhr.open(opt.method, opt.url);
    if (opt.method.toLocaleUpperCase() == 'POST') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf8');
    }
    else {
        req = null;
    }
    xhr.send(req);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            opt.success && opt.success(data);
        }
    }
}
