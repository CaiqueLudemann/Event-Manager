export function Events({ users }) {
  return (
    <>
      {users.map(({ userId, name, cpf, tel, email, address }) => {
        return (
          <div>
            <div>{userId}</div>
            <div>{name}</div>
            <div>{cpf}</div>
            <div>{tel}</div>
            <div>{email}</div>
            <div>{address}</div>
          </div>
        );
      })}
    </>
  );
}
