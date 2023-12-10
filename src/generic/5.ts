/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T, K> {
  key: T;
  value: K;
}

const a: KeyValuePair<string, number> = { key: "text", value: 3 };
const b: KeyValuePair<number, boolean> = { key: 4, value: true };
const c: KeyValuePair<string, KeyValuePair<string, number>> = {
  key: "97",
  value: { key: "0", value: 0 },
};

export {};
