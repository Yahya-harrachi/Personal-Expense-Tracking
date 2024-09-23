// Home.jsx
import React from 'react';
import './home.css'; // Make sure this CSS file is updated


const Home = () => {
  return (
    <>
     
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Expense Tracker</h1>
          <p>Your one-stop solution for managing your expenses with elegance and ease.</p>
          <a href="/signup" className="btn-signup">Sign Up Now</a>
        </div>
      </header>

      <section className="features">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M3 3h18v18H3z" fill="#3498db" />
              <path d="M12 14l-4-4h3V8h2v2h3l-4 4z" fill="#ecf0f1" />
            </svg>
            <h3>Track Your Expenses</h3>
            <p>Stay on top of your spending with our intuitive expense tracking tools.</p>
          </div>
          <div className="feature-card">
            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M3 3h18v18H3z" fill="#e67e22" />
              <path d="M12 14l-4-4h3V8h2v2h3l-4 4z" fill="#ecf0f1" />
            </svg>
            <h3>Beautiful Design</h3>
            <p>Experience a sleek and elegant interface that makes budgeting a pleasure.</p>
          </div>
          <div className="feature-card">
            <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M3 3h18v18H3z" fill="#2ecc71" />
              <path d="M12 14l-4-4h3V8h2v2h3l-4 4z" fill="#ecf0f1" />
            </svg>
            <h3>Secure and Private</h3>
            <p>Your data is secure with us, ensuring your privacy and peace of mind.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Expense Tracker has transformed how I manage my expenses. The design is beautiful and intuitive!"</p>
            <h4>- Sarah L.</h4>
          </div>
          <div className="testimonial-card">
            <p>"I love the features and the ease of use. It makes budgeting fun!"</p>
            <h4>- John D.</h4>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Expense Tracker. All rights reserved.</p>
      </footer>
    </div>
    </>
   
  );
};

export default Home;
