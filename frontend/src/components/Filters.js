import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { getUniqueValues } from '../utils/helpers';
import { useFilterContext } from '../context/filterContext';

const Filters = () => {
  const {
    filters: {
      category,
      subCategory,
      color,
      min_price,
      max_price,
      price,
      shipping,
      brand,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();
  const categories = getUniqueValues(all_products, 'category');
  const subCategories = getUniqueValues(all_products, 'subCategory');
  const brands = getUniqueValues(all_products, 'brand');
  const sizes = getUniqueValues(all_products, 'sizes');
  const colors = getUniqueValues(all_products, 'colors');

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* categories */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((category, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    className="filter-btn"
                    onClick={updateFilters}
                    name="category"
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of categories */}
          {/* sub categories */}
          <div className="form-control">
            <h5>sortiment</h5>
            <div>
              {subCategories.map((sub, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    className="filter-btn"
                    onClick={updateFilters}
                    name="subCategory"
                  >
                    {sub}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of sub categories */}
          {/* brands */}
          <div className="form-control">
            <h5>brands</h5>
            <select
              name="brand"
              value={brand}
              className="brands"
              onChange={updateFilters}
            >
              {brands.map((b, index) => {
                return (
                  <option key={index} value={b}>
                    {b}
                  </option>
                );
              })}
            </select>
          </div>
          {/* end of brands */}
          {/* sizes */}
          <div className="form-control">
            <h5>sizes</h5>
            <div className="sizes">
              {sizes.map((size, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    className="sizes-btn"
                    onClick={updateFilters}
                    name="size"
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of sizes */}
          {/* colors */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      name="color"
                      onClick={updateFilters}
                      key={index}
                      data-color="all"
                      className={`${
                        color === 'all' ? 'all-btn active' : 'all-btn'
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c ? 'color-btn active' : 'color-btn'
                    }`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* end of colors */}
          {/* prices */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{price}</p>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              onChange={updateFilters}
              value={price}
            />
          </div>
          {/* end of prices */}
          {/* shipping */}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input type="checkbox" name="shipping" id="shipping" />
          </div>
          {/* end of shipping */}
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
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
    border-bottom: 1px solid transparent;
    border: none;
    letter-spacing: var(--spacing);
    cursor: pointer;
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
    flex-wrap: wrap;
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
    background: #222;
    margin-right: 0.5rem;
    border: none;
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
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
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

  .filter-btn:hover {
    color: var(--dark-color);
    font-size: var(--smaller-font-size);
    font-weight: var(--font-bold);
  }

  @media (min-width: 768px) {
    .content {
      /* position: sticky; */
      top: 1rem;
    }
  }
`;

export default Filters;
