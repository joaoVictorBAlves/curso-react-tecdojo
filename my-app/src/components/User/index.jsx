const User = ({ name, age }) => {
  return (
    <div className="User">
      <h1>{name}</h1>
      <span>{age} anos</span>
    </div>
  );
};

export default User;
