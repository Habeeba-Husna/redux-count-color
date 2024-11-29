function Header({count,color}) {
    return (
      <div className="header">
        <h1 style={{color}}>REDUX Project</h1>
        <h3>Count is-{count} </h3>
      </div>
    );
  }
  
  export default Header;