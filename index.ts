//type 이 아닌 interface 로 구현해보기
interface Square {              
    color : string; //              interface 쓰는 이유 : extends 사용가능
    width : number;
}
let square : Square = {color : "red", width : 100}

//interface 로 겹치는 부분 extends 해보기
interface Student {
    name : string;
}
interface Teacher extends Student
{
    // name : string;
    age : number;
}
// let student : Student = {name : 'kim'}
// let teacher : Teacher = {name : 'park', age : 10}


//type은 안되나? -> 된다!
type Animal = {name : string}
type Cat = { age : number } & Animal //&기호 사용하면 된다. intersection type
let cat : Cat = {
    name : '고양이',
    age : 3
}                   //오류 안나는 것 확인!


//// type VS interface 가장 큰 차이점!
//// interface 는 중복 선언이 가능하다. / type은 불
interface Student{
    name :string;
}
interface Student{
    score : number
}           //오류 x , 중복선언을 해주면 자동 extends 된다고 생각 하면 된다. 둘다 가진다. name, score
            //그래서 외부 라이브러리에 interface 많이 쓴다. 자기가 속성 추가하면서 쓰기 위해서(재정의)



//함수 rest 파라미터, destructuring 할 때 타입 지정
function 함수(...a : number[]){ //rest파리미터는 Array 형식이다.
 console.log(a)
}
함수(1,2,3,4)


let {student, age } = {student : true, age : 20}
let object1 = {student : true, age : 22}
function 함수1({student, age}){

}
함수1({student : true, age:20})






//////////////////////////////////////////////////////////////////
//typeof 안쓰고 Narrowing 쉽게 할 수 있는 방법1 = &&쓰면 된다.  
function 함수2(a : string | undefined){
   if(a && typeof a === 'string'){  // &&쓰면 된다. undefined
                    // a 가 undefined 면 if 문 실행 x
                    // a 가 string 이면 if 문 실행 0

   }
}

//typeof 안쓰고 Narrowing 쉽게 할 수 있는 방법2 = in 사용
type Fish = { swim: string };
type Bird = { fly: string };
function 함수3(animal: Fish | Bird) {
  if ("swim" in animal) {  //in 사용하면 오른쪽에 있는 속성에 있는지 확인한다음 맞으면 true 틀리면 false 반환.
    return animal.swim
  }
  return animal.fly
} 

//typeof 안쓰고 Narrowing 쉽게 할 수 있는 방법3 = instanceof
let 날짜 = new Date()
if(날짜 instanceof Date){
    //이런식으로 사용함.
}

//typeof 안쓰고 Narrowing 쉽게 할 수 있는 방법4 = literal type
type Car1 = {
    wheel : '4개',
    color : string
  }
type Bike = {
wheel : '2개',
color : string
}

function 함수4(x : Car1 | Bike){
if (x.wheel == '4개'){ //wheel로 구분(바퀴가 4개면 자동차) 고정된 값을 넣으라는 말임.
    console.log('이 차는 ' + x.color)
} else {
    console.log('이 바이크는 ' + x.color)
}
}