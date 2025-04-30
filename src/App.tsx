import { useEffect } from 'react';
import ListGroup from "./components/ListGroup";

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/users/`, {
          method: 'GET',
          credentials: 'include', // Если нужны куки/авторизация
          headers: {
            'Content-Type': 'application/json',
            // Добавьте другие заголовки при необходимости
            // 'Authorization': 'Bearer your-token',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Получено: ", data);
      } catch (error) {
        console.error("Ошибка при запросе: ", error);
      }
      try {
        const response = await fetch(`${apiUrl}/users/`);
        
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
      
        const contentType = response.headers.get('content-type');
        if (!contentType?.includes('application/json')) {
          throw new Error('Ответ не в формате JSON!');
        }
      
        const data = await response.json();
        console.log("Данные пользователей:", data);
      
      } catch (error) {
        console.error("Ошибка запроса:", error);
      }
    };

    fetchData();
  }, []); // Пустой массив зависимостей означает, что эффект выполнится один раз при монтировании

  return (
    <div>
      <ListGroup />
    </div>
  );
}

export default App;