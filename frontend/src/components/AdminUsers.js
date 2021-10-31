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
            <th className="admin">admin</th>
            <th className="icons"></th>
          </tr>
          {people.map((person) => {
            const { id, name, email, admin } = person;
            return (
              <tr>
                <td>{id}</td>
                <td className="name">{name}</td>
                <td>{email}</td>
                <td className="admin-icon">
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
                <td className="icons-flex">
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

const Wrapper = styled.article`
  table {
    max-width: 80vw;
    background-color: var(--white-color);
  }
  table,
  th {
    border: 1px solid var(--dark-color-light);
    border-collapse: collapse;
  }

  th,
  td {
    padding: 0.5rem;
  }
  th {
    text-transform: uppercase;
  }
  td {
    color: var(--dark-color);
  }
  tr:nth-child(even) {
    background-color: var(--dark-color-lighten);
  }
  .name,
  .admin,
  .icons {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .admin-icon {
    text-align: center;
  }
  .icons-flex {
    display: flex;
    justify-content: space-between;
  }
`;

export default AdminUsers;
