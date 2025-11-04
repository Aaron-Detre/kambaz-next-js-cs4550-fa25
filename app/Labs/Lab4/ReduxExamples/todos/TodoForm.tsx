import { Button, FormControl, FormLabel, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: RootState) => state.todos);
  const dispatch: AppDispatch = useDispatch();

  return (
    <ListGroupItem>
      <Button onClick={() => dispatch(addTodo(todo))} id="wd-add-todo-click">
        Add
      </Button>
      <Button
        onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"
      >
        Update
      </Button>
      <FormLabel htmlFor="wd-todo-form-entry">test</FormLabel>
      <FormControl
        id="wd-todo-form-entry"
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
    </ListGroupItem>
  );
}
