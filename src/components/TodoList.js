import { Todo } from "./Todo"

export const TodoList = (props) => {
  return (
    props.todos.map(todo => {
      return <Todo key={todo.id} todo={todo} />
    })
  )
}
