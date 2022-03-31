import Table from 'components/UI/Table';
import { COLUMNS } from 'features/admin/columns';
import React, { useEffect, useState } from 'react';
import appApi from 'services/appApi';

const ManageUser = () => {
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    (async () => {
      try {
        const usersData = await appApi.getAllUsers();
        setUsers(usersData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  console.log(users);
  if (users.length === 0) {
    return <div>Loading</div>;
  }
  return <Table data={users} columns={COLUMNS} />;
};

export default ManageUser;
