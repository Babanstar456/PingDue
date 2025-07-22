'use client';
import { useState } from 'react';
import './page.css'; // ✅ Import your CSS file here

export default function Home() {
  const [tickets, setTickets] = useState([
    { id: 1, title: '50 Strategies to Reduce Payment Delays and Cash Flow', author: 'By Michael Jackson', date: 'March 12, 2024', type: 'Article' },
    { id: 2, title: 'John Doe Submissions 2023', author: 'John Doe', date: 'January 15, 2023', type: 'Report' },
    { id: 3, title: 'Sarah Mitchell Business Plan for employees', author: 'Sarah Mitchell', date: 'June 10, 2023', type: 'Plan' },
    { id: 4, title: 'AT#2024-0156', author: 'Alice Johnson', date: 'February 20, 2024', type: 'Ticket' },
    { id: 5, title: 'AT#2022-0150', author: 'Bob Smith', date: 'March 5, 2022', type: 'Ticket' },
    { id: 6, title: 'Promo campaign marketing', author: 'Charlie Brown', date: 'July 1, 2023', type: 'Campaign' },
  ]);

  return (
    <div className="container">
      <h1 className="page-title">Marketing & Support</h1>
      
      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3 className="sidebar-title">Quick Admin</h3>
          <ul className="sidebar-list">
            <li>Blog Performance</li>
            <li>Contact Messages</li>
            <li>Support Tickets</li>
            <li>FAQ Road Test</li>
            <li>Response Time</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <section className="stats-bar">
            <h3>Marketing & Support Management</h3>
            <div className="stats">
              <span>Blog performance: <strong>24.5%</strong> (+)</span>
              <span>Contact Messages: <strong>168</strong> (-)</span>
              <span>Support Tickets: <strong>12</strong> (+)</span>
              <span>FAQ Road Test: <strong>4.8%</strong> (+)</span>
              <span>Response Time: <strong>2.3 hrs</strong> (-)</span>
            </div>
          </section>

          {/* Ticket Cards */}
          <section className="tickets-grid">
            {tickets.map((ticket) => (
              <article key={ticket.id} className="ticket-card">
                <h4 className="ticket-title">{ticket.title}</h4>
                <p className="ticket-meta">{ticket.author} – {ticket.date}</p>
                <span className="ticket-tag">{ticket.type}</span>
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
