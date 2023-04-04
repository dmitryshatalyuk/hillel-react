import { useState } from "react";
import { Form } from "./Form";
import { Task } from "./Task";

export function Body() {
  const moveTask = (id, status) => {
    const taskIndex = tasks.findIndex((task) => task.id === id); // Находим индекс задачи
    const updatedTasks = [...tasks]; // Создаем копию массива tasks
    updatedTasks[taskIndex].completed = status; // Изменяем свойство completed у задачи
    setTasks(updatedTasks); // Обновляем состояние tasks
  };

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Сделать покупки в магазине",
      deadline: "2023-04-10",
      completed: false,
    },
    {
      id: 2,
      title: "Записаться на курс английского языка",
      deadline: "2023-04-15",
      completed: false,
    },
    {
      id: 3,
      title: "Выучить новый рецепт для ужина",
      deadline: "2023-04-07",
      completed: true,
    },
    {
      id: 4,
      title: "Провести уборку в квартире",
      deadline: "2023-04-12",
      completed: false,
    },
    {
      id: 5,
      title: "Сделать презентацию для работы",
      deadline: "2023-04-20",
      completed: true,
    },
    {
      id: 6,
      title: "Пойти на спортивную тренировку",
      deadline: "2023-04-08",
      completed: true,
    },
    {
      id: 7,
      title: "Прочитать новую книгу",
      deadline: "2023-04-25",
      completed: false,
    },
    {
      id: 8,
      title: "Посмотреть новый фильм",
      deadline: "2023-04-06",
      completed: true,
    },
    {
      id: 9,
      title: "Провести время с семьей",
      deadline: "2023-04-14",
      completed: false,
    },
    {
      id: 10,
      title: "Выучить новое слово на иностранном языке",
      deadline: "2023-04-09",
      completed: true,
    },
  ]);

  const current = tasks.filter((item) => {
    return item.completed == false;
  });

  const completed = tasks.filter((item) => {
    return item.completed == true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    const newTask = {
      id: tasks.length + 1,
      title: formData.title,
      deadline: formData.date,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
  };

  return (
    <div className="todo-list">
      <h3>To-Do:</h3>
      <ul className="current-tasks">
        {current.map((task) => (
          <Task key={task.id} {...task} moveTask={moveTask} />
        ))}
      </ul>
      <h3 className="completed">Completed:</h3>
      <ul className="completed-tasks">
        {completed.map((task) => (
          <Task key={task.id} {...task} moveTask={moveTask} />
        ))}
      </ul>
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}
