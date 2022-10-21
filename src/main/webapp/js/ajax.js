/**
 * /ajax1/src/main/webapp/js/ajax.js
 */
 
 function ajax(url,param,callBack,method) {
	const xhttp = new XMLHttpRequest()
	method = method.toUpperCase()	//대문자로 변환
	if(method != 'POST') {
		method = 'GET'
	}
	if(method != 'GET') {	//요청 url+파라미터정보
		url = url + "?" + param
	}
	//true : 비동기 방식 사용
	xhttp.open(method,url,true)
	//POST 방식 반드시 설정. GET 방식은 상관 없음
	xhttp.setRequestHeader('Content-Type',
	'application/x-www-form-urlencoded;charset=UTF-8')
	xhttp.send(method == 'POST'?param : null)
	xhttp.onreadystatechange = callBack	//콜백함수
}