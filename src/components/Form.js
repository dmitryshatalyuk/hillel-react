export function Form({ handleSubmit }) {
  return (
    <div className="form-box">
      <form className="addTask" onSubmit={handleSubmit}>
        <input type="title" name="title" required></input>
        <input type="date" name="date"></input>
        <button type="submit">Add task</button>
      </form>
    </div>
  );
}
