import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { sublinks } from '../utils/constants';

const Filters = () => {
  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* categories */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {sublinks.map((link, index) => {
                const { page, links } = link;
                if (page === 'men') {
                  return (
                    <>
                      {links.map((el) => {
                        const { id, text } = el;
                        return (
                          <button key={id + index} type="button">
                            {text}
                          </button>
                        );
                      })}
                    </>
                  );
                }
              })}
            </div>
          </div>
          {/* end of categories */}
          {/* brands */}
          <div className="form-control">
            <h5>brands</h5>
            <select name="brand" className="brands">
              <option value="nike">nike</option>
              <option value="adidas">adidas</option>
              <option value="puma">puma</option>
            </select>
          </div>
          {/* end of brands */}
          {/* sizes */}
          <div className="form-control">
            <h5>sizes</h5>
            <div className="sizes">
              <button className="sizes-btn">35</button>
              <button className="sizes-btn">36</button>
              <button className="sizes-btn">37</button>
              <button className="sizes-btn">38</button>
            </div>
          </div>
          {/* end of sizes */}
          {/* colors */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              <button className="colors-btn" name="color">
                <FaCheck />
              </button>
            </div>
          </div>
          {/* end of colors */}
          {/* prices */}
          <div className="form-control">
            <h5>price</h5>
            <p></p>
            <input type="range" name="price" min="20" max="200" />
          </div>
          {/* end of prices */}
          {/* shipping */}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input type="checkbox" name="shipping" id="shipping" />
          </div>
          {/* end of shipping */}
        </form>
        <button type="button" className="clear-btn">
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  margin-bottom: 3rem;
  .form-control {
    margin-bottom: 1.25rem;

    h5 {
      margin-bottom: 0.5rem;
      text-transform: capitalize;
    }
  }
  button {
    display: block;
    margin: 0.25rem 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--dark-color);
    cursor: pointer;
  }
  .active {
    border-color: var(--dark-color-light);
  }
  .brands {
    background-color: var(--white-color);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
    text-transform: capitalize;
  }
  .sizes,
  .colors {
    display: flex;
    align-items: center;
  }
  .sizes {
    column-gap: 0.5rem;
  }
  .sizes-btn {
    padding: 0.25rem;
    background-color: var(--white-color);
    transition: 0.3s ease;
  }
  .sizes-btn:hover {
    background-color: var(--dark-color);
    color: var(--white-color);
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--dark-color);
    margin-right: 0.5rem;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--white-color);
    }
  }
  .active {
    opacity: 1;
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background-color: var(--dark-color);
    color: var(--white-color);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
