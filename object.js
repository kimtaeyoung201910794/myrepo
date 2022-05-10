var person = {
    name: 'jocoding',
    sayhello: function() {console.log('hello'); }
}
var now = new Date();
console.log(now.getFullYear()); //년도를 가져오는 메서드
console.log(now.getFullMonth());//월정보를 가져오는 메서드
console.log(now.getFullDate());//일정보를 가져오는 메서드
console.log(now.getFullTime());//1970년 1월 1일 00:00:00을 기준으로 흐른 시간을 밀리초로 표시하는 메서드
var christmas = new Date('2020-12-25');
console.log(christmas);// 하면 크리스마스 날짜 나옴
