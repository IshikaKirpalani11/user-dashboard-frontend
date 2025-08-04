import React from 'react';
import { useSelector } from 'react-redux';
import UserCard from '../UserCard/UserCard';

const UserList = () => {
  const { userList, searchText, selectedRole } = useSelector((state) => state.users);

  // Safely handle undefined userList
  if (!userList) return <p>Loading users...</p>;

  const filteredUsers = userList.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesRole = selectedRole === 'All' || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;
