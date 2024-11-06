import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToDo,
  deleteToDo,
  changeCompletedState,
} from "../../redux/features/todoList/todoListSlice";
import { VISIBILITY_FILTERS } from "../../core/utilis/constants";
import getTodosByVisibilityFilter from "../../redux/selectors";
import { Button, Checkbox, Input, Typography, notification } from "antd";
import "./index.css";

const { Title } = Typography;

const ToDoList = () => {
  const allTodos = useSelector((state) => state.todoList.value);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const [visibilityFilter, setVisibilityFilter] = useState(
    VISIBILITY_FILTERS.ALL
  );
  const [displayedToDos, setDisplayedTodos] = useState(
    getTodosByVisibilityFilter(allTodos, visibilityFilter)
  );

  useEffect(() => {
    setDisplayedTodos(getTodosByVisibilityFilter(allTodos, visibilityFilter));
  }, [allTodos, visibilityFilter]);

  const handleAddToDo = () => {
    if (!inputValue.trim()) {
      notification.error({ message: "Please enter a task name" });
      return;
    }
    dispatch(addToDo(inputValue.trim()));
    setInputValue("");
  };

  return (
    <div className="todoList_container">
      <Title className="title">To-Do Task Manager</Title>
      <Input
        placeholder="Enter task name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddToDo()}
        className="inputField"
      />
      <Button onClick={handleAddToDo} className="primaryButton" type="primary">
        Add Task
      </Button>
      {displayedToDos.map((item, index) => (
        <div
          key={index}
          className={`todoItem ${item.completed ? "completed" : ""}`}
        >
          <Title level={4} className="taskName">
            {item.name}
          </Title>
          <Checkbox
            checked={item.completed}
            onChange={() => dispatch(changeCompletedState(index))}
          >
            {item.completed ? "Completed" : "Not Completed"}
          </Checkbox>
          <Button danger onClick={() => dispatch(deleteToDo(index))}>
            Delete
          </Button>
        </div>
      ))}
      <div className="filterButtons">
        <Button
          onClick={() => setVisibilityFilter(VISIBILITY_FILTERS.COMPLETED)}
        >
          Completed
        </Button>
        <Button onClick={() => setVisibilityFilter(VISIBILITY_FILTERS.ALL)}>
          All
        </Button>
        <Button
          onClick={() => setVisibilityFilter(VISIBILITY_FILTERS.INCOMPLETE)}
        >
          Incomplete
        </Button>
      </div>
    </div>
  );
};

export default ToDoList;
