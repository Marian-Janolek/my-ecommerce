import React from 'react';
import styled from 'styled-components';
import { FaTrash, FaYenSign } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import { GrFormCheckmark, GrFormClose } from 'react-icons/gr';

const AdminUsers = () => {
  const people = [
    {
      id: '123124524535435',
      name: 'majko',
      email: 'majko@example.com',
      admin: true,
    },
    {
      id: '1231245245333335435',
      name: 'peter',
      email: 'peter@example.com',
      admin: false,
    },
    {
      id: '123124524533333asdfads5',
      name: 'erik',
      email: 'erik@example.com',
      admin: false,
    },
  ];

  return (
    <Wrapper>
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>admin</th>
            <th></th>
          </tr>
          {people.map((person) => {
            const { id, name, email, admin } = person;
            return (
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  {admin ? (
                    <i>
                      <GrFormCheckmark />
                    </i>
                  ) : (
                    <i>
                      <GrFormClose />
                    </i>
                  )}
                </td>
                <td>
                  <i>
                    <BsPencilSquare />
                  </i>
                  <i>
                    <FaTrash />
                  </i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.article``;

export default AdminUsers;
