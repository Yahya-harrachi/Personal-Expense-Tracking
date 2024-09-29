import React, { useContext, useEffect, useState } from "react";
import "./updateProfile.css";
import { AuthContext } from "../../../../Auth/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { Database } from "../../../../Firebase";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sallary, setSallary] = useState("");

  const { user } = useContext(AuthContext);

  const fetchUserData = async () => {
    if (user) {
      try {
        const dataDoc = doc(Database, "User", user.uid);
        await updateDoc(dataDoc, {
          name: name,
          email: email,
          sallary: sallary,
        });

        Swal.fire("Updated!", "Your profile has been updated.", "success");
      } catch (error) {
        console.error("Error updating document: ", error);
        Swal.fire(
          "Error!",
          "There was an error updating your profile.",
          "error"
        );
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Show confirmation dialog
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to update your profile?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      fetchUserData();
      setName('')
      setEmail('')
      setSallary('')
    }
  };

  useEffect(() => {}, [user]);

  return (
    <div className="profile-container">
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            required
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="monthlySalary">Monthly Salary:</label>
          <input
            required
            type="number"
            id="monthlySalary"
            placeholder="Enter your monthly salary"
            value={sallary}
            onChange={(e) => setSallary(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture:</label>
          <input type="file" id="profilePicture" />
        </div>

        <button type="submit" className="submit-btn">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
