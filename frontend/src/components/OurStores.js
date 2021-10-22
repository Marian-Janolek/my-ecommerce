import React from 'react';
import styled from 'styled-components';
import { useSubmenuContext } from '../context/submenuContext';
import { stores, storesInfo } from '../utils/constants';

const OurStores = () => {
  const { closeSubmenu } = useSubmenuContext();

  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const hours = ['10:00 - 20: 00', '09:00 - 20:00'];

  const displayHours = (index) => {
    if (index >= 0 || index < 5) {
      return hours[0];
    } else {
      return hours[1];
    }
  };

  return (
    <Wrapper className="section-center" onMouseOver={closeSubmenu}>
      <h1>our stores</h1>
      <div className="underline"></div>
      <article className="store-grid">
        {stores.map((store) => {
          const { id, image } = store;
          return (
            <div className="sortiment-card" key={id}>
              <img src={image} className="sortiment-img" />
            </div>
          );
        })}
      </article>
      <article className="info-grid">
        {storesInfo.map((store, index) => {
          const { id, city, name, postCode, address } = store;
          return (
            <div className="info-flex" key={index}>
              <div className="info-stores" key={id}>
                <p className="p-city">{city}</p>
                <p className="p-name">{name}</p>
                <p className="p-name">{city}</p>
                <p className="p-post">
                  {postCode}, {address}
                </p>
              </div>
              <table className="table">
                <tbody>
                  {days.map((day, index) => {
                    return (
                      <tr key={index}>
                        <th>{day} : </th>
                        <td>{displayHours(index)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-bottom: 4rem;

  .store-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-bottom: 3rem;
  }
  .sortiment-card {
    height: 16rem;
  }
  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
    column-gap: 3rem;
    row-gap: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .info-flex {
    display: flex;
    position: relative;
    justify-content: space-between;
    border: 1px solid var(--dark-color-light);
  }
  .info-flex:hover {
    border: 1px solid var(--dark-color);
  }
  .info-stores {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    padding: 0 0 0 2rem;
  }

  .p-city {
    text-transform: capitalize;
    font-weight: var(--font-semi-bold);
  }
  .p-name {
    text-transform: uppercase;
    font-weight: var(--font-semi-bold);
  }
  .p-post {
    text-transform: capitalize;
    font-weight: 400;
  }
  .table {
    padding: 0.5rem 2rem 0.5rem 0;
  }
  tbody tr th {
    letter-spacing: var(--spacing);
  }
  tbody th {
    text-align: left;
  }
  tbody tr td {
    padding-left: 0.5rem;
  }
`;

export default OurStores;
