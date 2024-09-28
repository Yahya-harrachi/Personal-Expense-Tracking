import React from "react";

export default function Profile({setActiveComponent}) {
  return (
    <div>
      <h1>Profile</h1>
      <input type="button" value="Update Profile" onClick={() => setActiveComponent("UpdateProfile")}/>
    </div>
  );
}
