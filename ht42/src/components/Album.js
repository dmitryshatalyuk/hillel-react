export function Album({ title, id }) {
  
  return (
    <div>
      <p data-id={id} className="user_title">
        {title}
      </p>
    </div>
  );
}
