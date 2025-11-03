import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

export default function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todos);
  return (
    <div>
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
