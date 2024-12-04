import { Outlet, useLocation } from "react-router-dom";

import Profile from "../Pages/Profile";

function Leyout() {
  const location = useLocation();

  // تعیین کنید که آیا باید Bloga را نمایش دهیم یا خیر
  const blogs = location.pathname !== "/" && !location.pathname.startsWith("/Profile");

  return (
    <>

          <div>
          {blogs && (
          <div>
           <Profile/> {/* باکس Bloga فقط در صفحات خاص نمایش داده می‌شود */}
          </div>
              )}
               <Outlet />
      </div>
    </>
  );
}

export default Leyout;
