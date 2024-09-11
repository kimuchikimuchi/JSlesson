let text = 'JavaScriptの練習';
console.log(text);

text = 'JavaScriptをマスターした';
console.log(text);

// 処理①
let longText =
  'looooooong';
console.log(longText);
console.log(longText);
console.log(longText);

// 処理②
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);

let testText;
console.log(testText);

let name = 'ジョニー';
let greet = '私は' + name + '！';
console.log(greet);

let numTen = 10;
let strTen = '10'; // 追記
console.log(numTen, strTen);

let minus = -10;
let decimal = 1.1;
console.log(minus, decimal);

let names = ['John', 'Bob', 'Michael', 'Emma'];

console.log('names[0] => ', names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log('names[3] => ', names[3]);
console.log('names.length => ', names.length);

let emptyNames = [];

emptyNames[0] = 'John';
emptyNames[1] = 'Bob';
emptyNames[2] = 'Michael';
emptyNames[3] = 'Emma';
console.log(emptyNames, emptyNames.length);

// let John = {
  // name: 'John', // key（キー）: value（バリュー）
  // age: 26,
  // bloodType: 'A',
  // favorite: 'card',
// };
// console.log(John.bloodType);

function getArea(radius) {
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}

getArea(5);

function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

// 以下を追記
doFunc(function() {
  console.log('コールバック関数が呼び出されました');
});

function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}

function output() {
  console.log('コールバック関数が呼び出されました');
}
doFunc(output);

let John = {
  name: 'John',  // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  sing: function() {
    console.log('LA~LA~LA~~~♪');
  }
};

John.sing();

if (false) {
  console.log('trueです！');
}
console.log('処理が終わりました');

let tall = 185;
if (tall >= 180) {
  console.log('高身長です');
}

let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');

let myAge = 12; // 数字を12に変更
if (myAge >= 35) {
  console.log('健康診断でバリウムを飲みます');
} else if (myAge >= 20) {
  console.log('お酒が飲めます');
} else if (myAge >= 18) {
  console.log('選挙権があります');
} else {
  console.log('子供です');
}

let numVal = 8;
let strVal = 'text'

console.log(numVal === 7 || strVal === 'text');

let userA = '到着';
let userB = '到着';

if (userA === '到着' && userB === '到着') {
  console.log('全員揃ったので出発します。');
} else {
  console.log('揃っていないため、出発できません。');
}

console.log(userA === '到着' && userB === '到着');

let errMsg = '';

// if 文を使った書き方
if (errMsg === '') {
    console.log('ない！');
} else {
    console.log('ある！');
}

// 三項演算子を使った書き方
errMsg === '' ? console.log('ない！') : console.log('ある！');

for (let i = 0; i < 10; i++) {
  console.log(i + '回目のコンソール');
}