import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GrFormCheckmark, GrFormClose } from 'react-icons/gr';

const AdminOrders = () => {
  const orders = [
    {
      id: '11312312b312j312n3',
      user: 'majko',
      date: '2021-10-11',
      total: 822,
      paid: true,
      delivered: false,
    },
    {
      id: '11312312b312xxxj312n3',
      user: 'peter',
      date: '2021-07-11',
      total: 111,
      paid: true,
      delivered: true,
    },
    {
      id: '11312312b312212j312n3',
      user: 'erik',
      date: '2021-10-08',
      total: 323.77,
      paid: false,
      delivered: false,
    },
  ];

  return (
    <Wrapper>
      <div className="header-flex">
        <h2>orders</h2>
      </div>
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>user</th>
            <th>date</th>
            <th>total</th>
            <th>paid</th>
            <th>delivered</th>
            <th className="details"></th>
          </tr>
          {orders.map((order) => {
            const { id, user, total, paid, delivered, date } = order;
            return (
              <tr>
                <td>{id}</td>
                <td className="user">{user}</td>
                <td className="date">{date}</td>
                <td className="total">{total} €</td>
                <td className="paid">
                  {paid ? <GrFormCheckmark /> : <GrFormClose />}
                </td>
                <td className="delivered">
                  {delivered ? <GrFormCheckmark /> : <GrFormClose />}
                </td>
                <Link to="/products" className="btn">
                  details
                </Link>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  h2 {
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-size: 2rem;
    font-weight: var(--font-semi-bold);
    margin-bottom: 1rem;
  }
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
  .user,
  .total,
  .paid {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .date {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .delivered,
  .total {
    text-align: center;
  }
  .btn {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 0.3rem;
    text-transform: uppercase;
    font-size: 0.7rem;
  }
`;

export default AdminOrders;
