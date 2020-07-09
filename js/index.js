function search() {
    var path = "";
    var keywordC = new Array("c", "C", "씨", "씨언어");
    var keywordPython = new Array("python", "Python", "PYTHON", "파이썬");
    var keywordWeb = new Array("web", "Web", "WEB", "웹", "html", "HTML", "css", "CSS", "javascript", "JAVASCRIPT", "js", "JS", "자바스크립트");

    var keyword = document.getElementById('keyword').value;

    for (var i = 0; i < keywordC.length; i++) {
        if (keywordC[i] == keyword) {
            alert("C 관련 페이지로 이동합니다.");
            path = "Language_C.html";
            location.href = path;
        }
    }
    for (var j = 0; j < keywordPython.length; j++) {
        if (keywordPython[j] == keyword) {
            alert("Python 관련 페이지로 이동합니다.");
            path = "Language_Python.html";
            location.href = path
        }
    }
    for (var k = 0; k < keywordWeb.length; k++) {
        if (keywordWeb[k] == keyword) {
            alert("WEB 관련 페이지로 이동합니다.");
            path = "WEB.html";
            location.href = path
        }
    }
    if (path == "") {
        alert("검색 결과가 없습니다.");
    }
}