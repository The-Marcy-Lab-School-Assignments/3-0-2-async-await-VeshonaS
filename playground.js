const getUsers = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const users = await fetch(url).then(r => r.json()).catch((err) => []);
  console.log(users)
  return users;
}