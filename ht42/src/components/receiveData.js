export async function receiveData(callback) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  callback(data);
}
