import React, { useState } from "react";
import "./dashbord.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseList from "./ExpenseList/ExpenseList";
import ExpenseSummary from "./ExpenseSummary/ExpenseSummary";
import Profile from "../Users/Profile/Profile";
import Settings from "../Users/Settings/Settings";
import DashbordAcceuil from "./DashbordAcceuil/DashbordAcceuil";
import UpdateProfile from "../Users/Profile/updateProfile/UpdateProfile";

export default function Dashbord({ activeComponent, setActiveComponent }) {
  const renderComponent = () => {
    switch (activeComponent) {
      case "ExpenseForm":
        return <ExpenseForm />;
      case "ExpenseList":
        return <ExpenseList />;
      case "ExpenseSummary":
        return <ExpenseSummary />;
      case "Profile":
        return <Profile setActiveComponent={setActiveComponent} />;
      case "UpdateProfile":
        return <UpdateProfile />;
      case "Settings":
        return <Settings />;
      default:
        return <DashbordAcceuil setActiveComponent={setActiveComponent}/>;
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <h2 onClick={() => setActiveComponent("DashbordAcceuil")}>Dashboard</h2>
        <ul>
          <li onClick={() => setActiveComponent("ExpenseForm")}>
            Expense Form
          </li>
          <li onClick={() => setActiveComponent("ExpenseList")}>
            Expense List
          </li>
          <li onClick={() => setActiveComponent("ExpenseSummary")}>
            Expense Summary
          </li>
        </ul>
      </nav>
      <div className="main-content">{renderComponent()}</div>
    </div>
  );
}
