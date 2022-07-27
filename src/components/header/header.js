export default function Header({ incomplete }) {
  return (
      <header>
          <h1>To Do List: {incomplete} Items Pending</h1>
      </header>
  )
}