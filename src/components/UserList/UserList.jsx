import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../features/users/userSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const { list, status, searchText, filterRole } = useSelector((state) => state.users);
  const [localStatus, setLocalStatus] = useState({});

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    // Initialize local status from users list
    const statusMap = {};
    list.forEach((user) => {
      statusMap[user.id] = user.status;
    });
    setLocalStatus(statusMap);
  }, [list]);

  const handleToggleStatus = (userId) => {
    setLocalStatus((prevStatus) => ({
      ...prevStatus,
      [userId]: prevStatus[userId] === 'Active' ? 'Inactive' : 'Active',
    }));
  };

  const filteredUsers = list.filter((user) => {
    const matchesRole = filterRole === 'All' || user.role === filterRole;
    const matchesSearch = user.name.toLowerCase().includes(searchText.toLowerCase());
    return matchesRole && matchesSearch;
  });

  if (status === 'loading') return <div>Loading users...</div>;
  if (filteredUsers.length === 0) return <div>No users found.</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* Heading Removed */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            style={{
              background: '#f9f9f9',
              border: '1px solid #ddd',
              padding: '10px 15px',
              marginBottom: '10px',
              borderRadius: '6px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <div><strong>Name:</strong> {user.name}</div>
            <div><strong>Email:</strong> {user.email}</div>
            <div><strong>Role:</strong> {user.role}</div>
            <div>
              <strong>Status:</strong> {localStatus[user.id] || user.status}{' '}
              <button
                onClick={() => handleToggleStatus(user.id)}
                style={{
                  marginLeft: '10px',
                  padding: '5px 10px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  backgroundColor: localStatus[user.id] === 'Active' ? '#dc3545' : '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                }}
              >
                Toggle
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
