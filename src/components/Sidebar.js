import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const { user } = useAuth();

  const linkClass = ({ isActive }) =>
    isActive ? 'sidebar-link active' : 'sidebar-link';

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <ul className="sidebar-menu">
        <li><NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink></li>
        <li><NavLink to="/users" className={linkClass}>Users</NavLink></li>
        {user?.role === 'Super Admin' && (
          <li><NavLink to="/audit-logs" className={linkClass}>Audit Logs</NavLink></li>
        )}
        <li><NavLink to="/settings" className={linkClass}>Settings</NavLink></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
