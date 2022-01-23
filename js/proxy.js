// const validator = {
//   get(target, prop) {
//     return prop in target ? target[prop] : `Поля ${prop} в объекте нет!`;
//   },
//   set(target, prop, value) {
//     if (value.length > 2) {
//       Reflect.set( target, prop, value );
//     } else {
//       console.log(`Длина должна быть более 2х символов. А сейчас ${value.length}`);
//     }
//   }
// }

// // const form = {
// //   login: 'test',
// //   password: 'c9O3q85tb398p5vtb37',
// // }

// // const formProxy = new Proxy( form, validator );
// // console.log( formProxy );
// // console.log(formProxy.username);

// // formProxy.password = '12';

// function log(message) {
//   console.log('Log: ', message);
// }

// const logProxy = new Proxy(log, {
//   apply(target, thisArg, argArray) {
//     if (argArray.length === 1) {
//       Reflect.apply(target, thisArg, argArray);
//     } else {
//       console.log('Кол-во аргументов не совпадает!');
//     }
//   }
// });

// logProxy('Custom message 1');
// logProxy('Custom message 2', 2);



const person = {
  name: 'Artem',
  age: 32,
  job: 'web frontend'
};

const op = new Proxy(person, {
  get(target, prop) {
    console.log('Getting prop: ', prop);
    return target[prop];
  },
  set(target, prop, val) {
    if (prop in target) {
      target[prop] = val;
    } else {
      throw new Error(`No ${prop} field in target`);
    }
  },
  // Custom validation
  has(target, prop) {//для проверок 'name' in op;//true
    return ['age', 'name', 'job'].includes(prop)
  },
  deleteProperty(target, prop) {
    console.log('Deleting '+prop);
    delete target[prop];
    return true;
  }
});



// Functions
const log = text => `Log: ${text}`;