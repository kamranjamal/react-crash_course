function ChildComponent({ user, myName }) {
  return (
    <div>
      <h1>Hello, {user.name}</h1>
      <h2>My name is {myName} </h2>
    </div>
  );
}

export default ChildComponent;
