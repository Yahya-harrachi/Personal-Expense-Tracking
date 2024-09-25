import React, { useState } from 'react';
import './dashbord.css';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import ExpenseList from './ExpenseList/ExpenseList';
import ExpenseSummary from './ExpenseSummary/ExpenseSummary';

export default function Dashbord() {
  const [activeComponent, setActiveComponent] = useState('ExpenseForm');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'ExpenseForm':
        return <ExpenseForm />;
      case 'ExpenseList':
        return <ExpenseList />;
      case 'ExpenseSummary':
        return <ExpenseSummary />;
      default:
        return <ExpenseForm />;
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li onClick={() => setActiveComponent('ExpenseForm')}>Expense Form</li>
          <li onClick={() => setActiveComponent('ExpenseList')}>Expense List</li>
          <li onClick={() => setActiveComponent('ExpenseSummary')}>Expense Summary</li>
        </ul>
      </nav>
      <div className="main-content">
        {renderComponent()}
      </div>
    </div>
  );
}
