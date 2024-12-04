import { Link, Outlet } from "react-router-dom";

function Sefaresh() {
    const isActive = (path) => location.pathname.includes(path)
  return (
    <div >
      <div className="dddd" >
        <div className="sssss">
          <ul>
            <Link to="Jar"><li className={isActive('/Sefaresh/Jar')?'active':'color="red"'}>جاری</li></Link>
            <Link to="Tah"><li className={isActive('/Sefaresh/Tah')?'active':'color="red"'}>تحویل شده</li></Link>
            <Link to="Mar"><li className={isActive('/Sefaresh/Mar')?'active':'color="red"'}>مرجوع شده</li></Link>
            <Link to="Laq"><li className={isActive('/Sefaresh/Laq')?'active':'color="red"'}>لغو شده</li></Link>
          </ul>
        </div>
              <div >
              <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Sefaresh;
