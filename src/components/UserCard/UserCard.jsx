import React from 'react';
import styles from './UserCard.module.css';
import { useDispatch } from 'react-redux';
import { toggleStatus } from '../../features/users/userSlice';

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <h4>{user.name}</h4>
      <p>{user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Status:</strong> {user.status}</p>
      <button onClick={() => dispatch(toggleStatus(user.id))}>
        Toggle Status
      </button>
    </div>
  );
};

export default UserCard;
