import React from 'react';
import styles from './AuditLogs.module.css';

const logs = [
  { id: 1, action: 'User A updated profile', time: '2025-08-01 10:45 AM' },
  { id: 2, action: 'User B deactivated', time: '2025-08-01 11:00 AM' },
  { id: 3, action: 'User C created', time: '2025-08-01 11:15 AM' },
];

const AuditLogs = () => {
  return (
    <div className={styles.auditLogsContainer}>
      {logs.map((log) => (
        <div key={log.id} className={styles.logItem}>
          <span className={styles.action}>{log.action}</span>
          <span className={styles.time}>{log.time}</span>
        </div>
      ))}
    </div>
  );
};

export default AuditLogs;
