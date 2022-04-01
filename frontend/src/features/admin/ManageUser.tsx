import { sagaActions } from 'app/sagaActions';
import Table from 'components/UI/Table';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import appApi from 'services/appApi';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { users } from './adminSlice';

const ManageUser = () => {
  const usersData = useAppSelector(users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const COLUMNS = [
    {
      Header: 'Id',
      accessor: 'id',
    },
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Phone Number',
      accessor: 'phoneNumber',
      Cell: ({ value }: any) => (value ? value : '-'),
    },
    {
      Header: 'Gender',
      accessor: 'gender',
      Cell: ({ value }: any) => (value ? 'Male' : 'Female'),
    },
    {
      Header: 'Action',
      accessor: 'action',
      Cell: (row: any) => (
        <div>
          <button onClick={(e) => handleEdit(row.row.original)}>Edit</button>
          <button onClick={(e) => handleDelete(row.row.original)}>Delete</button>
        </div>
      ),
    },
  ];

  const handleEdit = (value: any) => {
    console.log(value);
    navigate(`/admin/edit/${value.id}`)
  };
  const handleDelete =async (value: any) => {
    try {
      console.log(value.id);
      await appApi.deleteUser(value.id);
      dispatch({ type: sagaActions.FETCH_USERS})
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_USERS})
  }, []);
  console.log(usersData);
  if (usersData.length === 0) {
    return <div>Loading</div>;
  }
  return <Table data={usersData} columns={COLUMNS} />;
};

export default ManageUser;
