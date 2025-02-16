// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = "false";
// const userKeys = Object.keys(user);
// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};

//   const key = 'mood';
user.mood = "happy";
//   user['mood'] = 'happy';
//   user[key] = 'happy';
user.hobby = "skydiving";
user.premium = false;

//   for (const key in user) {
//     if (user.hasOwnProperty(key)){
//         console.log(key);
//     }
//   }
const userKeys = Object.keys(user);
// console.log(userKeys);

for (const key of userKeys) {
  console.log(`${key}: ${user[key]}`);
}

// const prop = Object.entries(user)
// // console.log(prop);

// for (const pr of prop) {
//     const key = pr[0];
//     const value = pr[1];
//     console.log(`${key}: ${value}`);
// }
