export function UserInfo({ name, email, phone, visibility }) {
  console.log(visibility);

  if (visibility) {
    return (
      <div className="userInfo">
        <p><b>Name:</b> {name}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Phone:</b> {phone}</p>
      </div>
    );
  }
}
