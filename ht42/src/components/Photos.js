export function Photos({ id, title, url }) {
  return (
    <div className="photo">
      <img className="photo_img" src={url} alt={id} />
      <p className="photo_title">{title}</p>
    </div>
  );
}
