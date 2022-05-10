var now = new Date();
var start = new Date('2020-06-30');

var timeDIFF = now.getTime() - start.getTime();
var day = Math.floor(timeDIFF / (1000 * 60 * 60 * 24) +1); //밀리초를 일수로 계산
$('#love').text(day+'일째');

var valentine = new Date('2022-02-14');
var timeDIFF2 = valentine.getTime() - now.getTime();
var day2 = Math.floor(timeDIFF2/ (1000 * 60 * 60 * 24)+ 1);
$('#valentine').text(day2 + '일 남음');

var ms = start.getTime() + 999 * 1000 * 60 * 60 * 24;
var thousand = new Date(ms);
var thousandDate = thousand.getFullYear() + '.' + thousand.getMonth()+1 +'.' + thousand.getDate();
$('#thousand-date').text(thousandDate);