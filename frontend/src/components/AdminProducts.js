import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';

const AdminProducts = () => {
  const products = [
    {
      id: '121ddsfsdfasfasdf12',
      name: 'nike performance',
      price: 111.99,
      category: 'men',
      brand: 'nike',
    },
    {
      id: '121ddzzsdfassx22zsf12',
      name: 'adidas performance',
      price: 79.99,
      category: 'women',
      brand: 'adidas',
    },
    {
      id: '1212112dd7uyjghsf12',
      name: 'puma sneakers',
      price: 99.99,
      category: 'children',
      brand: 'puma',
    },
  ];

  return (
    <Wrapper>
      <div className="header-flex">
        <h2>products</h2>
        <Link to="/admin/createProduct" className="btn">
          <i>
            <AiOutlinePlus />
          </i>
          create product
        </Link>
      </div>
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>category</th>
            <th>brand</th>
            <th className="icons"></th>
          </tr>
          {products.map((product) => {
            const { id, name, price, brand, category } = product;
            return (
              <tr>
                <td>{id}</td>
                <td className="name">{name}</td>
                <td className="price">{price} €</td>
                <td className="category">{category}</td>
                <td className="brand">{brand}</td>
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
  .header-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  h2 {
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-size: 2rem;
    font-weight: var(--font-semi-bold);
  }
  .header-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn {
    padding: 0.5rem 1rem;
    text-transform: uppercase;
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
  .name,
  .price,
  .brand,
  .icons {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .name,
  .category,
  .brand {
    text-transform: capitalize;
    text-align: center;
  }

  .icons-flex {
    display: flex;
    justify-content: space-between;
  }
`;

export default AdminProducts;
