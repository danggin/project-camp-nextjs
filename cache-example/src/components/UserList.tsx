async function fetchUsers() {
  return await (await fetch('http:/localhost:4000/users')).json();
}

export default async function UsetList() {
  const users = await fetchUsers();

  return (
    <>
      <ul className='flex flex-col gap-4'>
        {users &&
          users.map((user: { id: string; name: string; email: string }) => {
            <li key={user.id} className='bg-white w-[300px] p-3 rounded-lg'>
              <div>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <div className='flex gap-4 justify-end'>
                  <button className='underline text-rose-400'>Delete</button>
                </div>
              </div>
            </li>;
          })}
      </ul>
    </>
  );
}
