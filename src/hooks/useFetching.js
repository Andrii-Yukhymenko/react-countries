import { useState } from 'react';

export const useFetching = (callback) => {
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoad(true);
    }
  };

  return [fetching, isLoad, error];
};

// Принимает коллбек функцию которая должна(выполнитца).
// Возвращает: первое значение - ту же функцию, но уже обработаную;
//             второе значение - булевое значение закончилась ли загрузка
//             третее значение - ошибка, если она есть.
