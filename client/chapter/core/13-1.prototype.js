/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우


const animal = {
  legs: 4,
  tail : true,
  stomach : [],
  // setEat(food){
  //   this.stomach.push(food)
  // },
  set eat(food){
    this.stomach.push(food)
  },
  // getEat(){
  //   return this.stomach
  // }
  get eat(){
    return this.stomach
  }
}

// animal.setEat('고기')
// animal.getEat
animal.eat
animal.eat = '고기'
animal.eat.push('사료')


const tiger = {
  pattern: '호랑이무늬',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  }
}


const 백두산호랑이 = {
  color: 'white',
  name: '백돌이',
  __proto__:tiger
}




// 생성자 함수


function Animal(){
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function(){
    return this.stomach
  }

  this.setEat = function(food){
    this.stomach.push(food)
  }
}


const a1 = new Animal();
a1.setEat('고기');
a1.getEat()



function Tiger (name){
  Animal.call(this)
  this.name = name;
  this.pattern = '호랑이무늬'
  this.hunt = function(target){
    return `${target}에게 조용히 접근한다`
  }
}


Tiger.prototype = new Animal()

const 금강산호랑이 = new Tiger('금순이')


function User(name,address,age){
  
  this.name = name;
  this.address = address;
  this.age = age;

  this.sayHi = function(){
    return `안녕 ? 난 ${this.name} 이야 만나서 반가워~!`
  }
}


const person1 = new User('심','서울시 중랑구',40)
const person2 = new User('beom','서울시 ',35)
const person3 = new User('tiger','서울시',30)
const person4 = new User('kindtiger','서울시 중랑구',10)
const person5 = new User('이아영','서울시 중랑구',25)