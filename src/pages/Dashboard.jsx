import React from 'react';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar/SearchBar';
import RoleFilter from '../components/RoleFilter/RoleFilter';
import UserList from '../components/UserList/UserList';
import AuditLogs from '../components/AuditLogs/AuditLogs'; // ✅ Importing AuditLogs
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const { role, username } = useAuth();

  return (
    <div className={styles.container}>
      <Sidebar />

      <main className={styles.main}>
        <section className={styles.header}>
          <h1 className={styles.title}>Welcome {username}</h1>
          <p className={styles.subtitle}>
            Role: <strong>{role}</strong>
          </p>
        </section>

        <div className={styles.filters}>
          <SearchBar />
          <RoleFilter />
        </div>

        <div className={styles.usersSection}>
          <h2 className={styles.sectionTitle}>User List</h2>
          <UserList />
        </div>

        {role === 'Super Admin' && (
          <div className={styles.auditSection}>
            <h2 className={styles.sectionTitle}>Audit Logs</h2>
            <p className={styles.subtitle}>(Only visible to Super Admin)</p>
            <AuditLogs />
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
