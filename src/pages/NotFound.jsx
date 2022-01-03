import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      Страница не найдена. Вернутся на главную: <Link to="/">Главная</Link>
    </div>
  );
}

export default NotFound;
