// // app/profile/page.js
// import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
// import React from "react";

// const Profile = () => {
//     const {isAuthenticated,user}=useKindeAuth() 

//   if (!isAuthenticated) {
//     if (typeof window !== "undefined") {
//       window.location.href = "/login";
//     }
//     return null;
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Welcome to your profile!</h1>
//       <p>Hello, {user?.first_name || "User"}!</p>
//     </div>
//   );
// };

// export default Profile;



import React from "react";


const Profile = () => {
//   const { isAuthenticated, user } = useKindeAuth(); 

//   if (!isAuthenticated) {
//     if (typeof window !== "undefined") {
//       window.location.href = "/login";
//     }
//     return null;
//   }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to your profile!</h1>
      {/* <p>Hello, {user?.first_name || "User"}!</p> */}
    </div>
  );
};

export default Profile;
