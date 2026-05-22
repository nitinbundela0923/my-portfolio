import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background:"#0a0a0a",
        padding:"20px 40px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        borderBottom:"1px solid #222",
        position:"sticky",
        top:"0",
      }}
    >
      <h1 style={{color:"cyan"}}>NITIN | PORTFOLIO</h1>

      <div style={{display:"flex",gap:"25px"}}>
        <Link to="/" style={{color:"white"}}>Home</Link>
        <Link to="/about" style={{color:"white"}}>About</Link>
        <Link to="/projects" style={{color:"white"}}>Projects</Link>
        <Link to="/skills" style={{color:"white"}}>Skills</Link>
        <Link to="/contact" style={{color:"white"}}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
