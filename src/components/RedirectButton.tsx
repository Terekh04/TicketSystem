import React from 'react';

const apiUrl = import.meta.env.VITE_API_URL;

const RedirectButton = () => {
  const handleClick = () => {
    window.location.href = apiUrl + '/auth/google'; // Переход по URL
  };

  return (
    <button onClick={handleClick}>
      Перейти на site/auth/me
    </button>
  );
};

export default RedirectButton;