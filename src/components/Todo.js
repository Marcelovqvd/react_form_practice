export const Todo = ({todo}) => {
  return (
    <div>
      <div>
        <input type="checkbox" checked={todo.complete} />
        {todo.name}
      </div>
    </div>
  )
}