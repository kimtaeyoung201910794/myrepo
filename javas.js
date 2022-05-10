document.write("코드라이언 짱짱");//write에 글을 쓰면 그 글이 화면에 나오는 코드//
var name = '엄준식'; //자바스크립트에서는 변수앞에 var을 써줌
document.write(name);
document.write(typeof name); // 데이터의 형태를 알고싶으면 이렇게 앞에 typeof 붙여주기
var num = Math.random();//Math.random()는 0~1미만의 임의의 실수중 하나 출력
document.write(num); // num을 출력하면 0~1미만의 숫자나옴
var num2 = Math.random() * 45 + 1; //이렇게 45를 곱해주면 1~46미만의 실수중 하나 램덤 추첨
var num3 = parseInt(Math.random() * 45);//parseInt를 씌어주면 실수의 소수점 밑부분을 제거한 정수만 출력
var lotto = [1,2,3,4,5,6]; //자바스크립트에서 이렇게 배열 사용 가능
document.write(lotto[0]); //이라고하면 lotto배열의 첫번째값 출력
lotto.push(7); //이라고하면 lotto배열의 7값 추가됨
lotto.indexOf(num) == -1//.indexOf는 어떤 배열에 num값이 있으면 -1을 출력해주는 성질이있음
lotto.lengh //lotto 배열의 길이를 알려주는 코드 while문과 접목시켜서 사용함
lotto.sort((a,b)=>a-b) //배열의 숫자를 오름차순으로 정렬해주는 코드
console.log('코드라이언'); //브라우저말고 콘솔 화면에 출력하는 방법
var content = document.getElementById('jasoseol').value //자소서의 값을 가져와서 콘텐트 변수에 저장하기
console.log(content.length) // 콘솔에서 가져온값 길이 세기
document.getElementById('count').innerHTML = content.length; //id가 count인 span태그에 글자수 넣어주는 코드
if (content.length > 200)
{
content = content.substring(0,200);
document.getElementById('jasoseol').value = content;
}//만약 content의 글자수가 200자 이상이되면 substring함수를 사용하여 글자 잘라주고 글자를 자른
//200자의 content값을 jasoseol의 넣어줌
<textarea onkeydown='counter();'class="form-control" rows="3" id="jasoseol">저는 인성 문제가 없습니다.</textarea>
//키보드를 누를때마다 글자수를 세는 기능을 넣으려면 그 기능을 넣으려고하는 html코드에 onkeydown라는 이벤트 코드를 넣으면되고 counter()이 글자수를 세는 것이니까 onkeydown='counter(); html코드에 이렇게 안에 써주면됨
$('#content').val(); //id가 content인것의 값을 jquery로 가져오는 방법
<button id="click" onclick="hello();">클릭</button>//html에서 클릭을하면 hello함수가 실행되는 클릭버튼 이벤트
$('#click').click(hello); //jquery로 위에있는것처럼 표현하기
$('#click').click(function(){
    console.log('hello');
}); //함수 따로  정의해줄필요없이 jquery에서는 익명함수로 바로 정의해서 실행할수있음
$('#drone').click(function(){
    $('#spit').fadeIn();
    $('#spit').animate({left: '+=250'});
    $('#spit').fadeOut();
    $('#spit').css({left: '150px'});
});//드론이미지를 클릭하면 숨겨져있던 총알이 나타남과 동시에 animate함수로 왼쪽으로 250만큼 이동하는걸 구현
//그 후에 총알이 벙커에 맞으면 없어지도록 fadeOut함수 이용
//그 후 총알이벙커에 맞게되면 총알이 벙커앞에있으므로 다시 드론으로 오게 해주어야함
//그래서 css를 이용하여 총알을 드론위치인left: '150px'로 이동
$('#spit').fadeOut(function(){
    hp = hp - 1;
    $('#hp').text('HP :' + hp);
});//추가적으로 총알이 벙커에 맞은후 hp가 깍이는걸 자연스럽게 표현하기 위해 callback을 이용하여
//fadeOut에 익명함수를 넣어줘서 fadeOut이 다 실행된후에 hp가 깍이게함
var hp = 3;//hp변수도 위에 선언 해줘여함
var person = {
    name: 'jocoding',
    sayhello: function() {console.log('hello'); }
}
//person.name은 jocoding출력
//person.sayhello();는 console에 hello출력