import React from 'react';
import styled from 'styled-components';
import { useSubmenuContext } from '../context/submenuContext';

const ProductHelp = () => {
  const { closeSubmenu } = useSubmenuContext();

  const tableHeaders = ['EUR', 'UK', 'US', 'CM'];
  const menSizes = [
    [
      '36',
      '36 2/3',
      '37 1/3',
      '38',
      '38 2/3',
      '39 1/3',
      '40',
      '40 2/3',
      '41 1/3',
      '42',
      '42 2/3',
      '43 1/3',
    ],
    [3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
    [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5],
    [22.1, 22.5, 22.9, 23.3, 23.8, 24.2, 24.6, 25, 25.5, 25.9, 26.3, 26.7],
  ];

  return (
    <Wrapper className="section-center" onMouseOver={closeSubmenu}>
      <h1>product help</h1>
      <div className="underline"></div>
      <div className="table-flex">
        <table>
          <caption>Men table size</caption>
          <tbody>
            <tr>
              {tableHeaders.map((header) => {
                return <th>{header}</th>;
              })}
            </tr>

            <tr>
              <td>36</td>
              <td>3.5</td>
              <td>4</td>
              <td>22.1</td>
            </tr>
            <tr>
              <td>36 2/3</td>
              <td>4</td>
              <td>4.5</td>
              <td>22.5</td>
            </tr>
            <tr>
              <td>37 1/3</td>
              <td>4.5</td>
              <td>5</td>
              <td>22.9</td>
            </tr>
            <tr>
              <td>38</td>
              <td>5</td>
              <td>5.5</td>
              <td>23.3</td>
            </tr>
            <tr>
              <td>38 2/3</td>
              <td>5.5</td>
              <td>6</td>
              <td>23.8</td>
            </tr>
            <tr>
              <td>39 1/3</td>
              <td>6</td>
              <td>6.5</td>
              <td>24.2</td>
            </tr>
            <tr>
              <td>40</td>
              <td>6.5</td>
              <td>7</td>
              <td>24.6</td>
            </tr>
            <tr>
              <td>40 2/3</td>
              <td>7</td>
              <td>7.5</td>
              <td>25</td>
            </tr>
            <tr>
              <td>41 1/3</td>
              <td>7.5</td>
              <td>8</td>
              <td>25.5</td>
            </tr>
            <tr>
              <td>42</td>
              <td>8</td>
              <td>8.5</td>
              <td>25.9</td>
            </tr>
            <tr>
              <td>42 2/3</td>
              <td>8.5</td>
              <td>9</td>
              <td>26.3</td>
            </tr>
            <tr>
              <td>43 1/3</td>
              <td>9</td>
              <td>9.5</td>
              <td>26.7</td>
            </tr>
          </tbody>
        </table>

        <table>
          <caption>Women table size</caption>
          <tbody>
            <tr>
              <th>EUR</th>
              <th>UK</th>
              <th>US</th>
              <th>CM</th>
            </tr>
            <tr>
              <td>35.5</td>
              <td>3</td>
              <td>4.5</td>
              <td>21.5</td>
            </tr>
            <tr>
              <td>36</td>
              <td>3.5</td>
              <td>5</td>
              <td>22</td>
            </tr>
            <tr>
              <td>36 2/3</td>
              <td>4</td>
              <td>5.5</td>
              <td>22.5</td>
            </tr>
            <tr>
              <td>37 1/3</td>
              <td>4.5</td>
              <td>6</td>
              <td>23</td>
            </tr>
            <tr>
              <td>38</td>
              <td>5</td>
              <td>6.5</td>
              <td>23.5</td>
            </tr>
            <tr>
              <td>38 2/3</td>
              <td>5.5</td>
              <td>7</td>
              <td>24</td>
            </tr>
            <tr>
              <td>39 1/3</td>
              <td>6</td>
              <td>7.5</td>
              <td>24.5</td>
            </tr>
            <tr>
              <td>40</td>
              <td>6.5</td>
              <td>8</td>
              <td>25</td>
            </tr>
            <tr>
              <td>40 2/3</td>
              <td>7</td>
              <td>8.5</td>
              <td>25.5</td>
            </tr>
            <tr>
              <td>41 1/3</td>
              <td>7.5</td>
              <td>9</td>
              <td>26</td>
            </tr>
            <tr>
              <td>42</td>
              <td>8</td>
              <td>9.5</td>
              <td>26.5</td>
            </tr>
            <tr>
              <td>42 2/3</td>
              <td>8.5</td>
              <td>10</td>
              <td>27</td>
            </tr>
            <tr>
              <td>43 1/3</td>
              <td>9</td>
              <td>10.5</td>
              <td>27.5</td>
            </tr>
            <tr>
              <td>44</td>
              <td>9.5</td>
              <td>11</td>
              <td>28</td>
            </tr>
          </tbody>
        </table>

        <table>
          <caption>Children table size</caption>
          <tbody>
            <tr>
              <th>EUR</th>
              <th>UK</th>
              <th>US</th>
              <th>CM</th>
            </tr>
            <tr>
              <td>26.5</td>
              <td>9k</td>
              <td>9.5</td>
              <td>16</td>
            </tr>
            <tr>
              <td>27</td>
              <td>9.5k</td>
              <td>10</td>
              <td>16.5</td>
            </tr>
            <tr>
              <td>28</td>
              <td>10.5k</td>
              <td>11</td>
              <td>17</td>
            </tr>
            <tr>
              <td>29</td>
              <td>11k</td>
              <td>11.5</td>
              <td>16.8</td>
            </tr>
            <tr>
              <td>30</td>
              <td>11.5k</td>
              <td>12</td>
              <td>18</td>
            </tr>
            <tr>
              <td>31</td>
              <td>12.5k</td>
              <td>13.5</td>
              <td>19</td>
            </tr>
            <tr>
              <td>31.5</td>
              <td>13k</td>
              <td>13.5</td>
              <td>19.5</td>
            </tr>
            <tr>
              <td>32</td>
              <td>13.5</td>
              <td>1</td>
              <td>19.7</td>
            </tr>
            <tr>
              <td>33</td>
              <td>1</td>
              <td>1.5</td>
              <td>20</td>
            </tr>
            <tr>
              <td>32</td>
              <td>2</td>
              <td>2.5</td>
              <td>21</td>
            </tr>
            <tr>
              <td>42</td>
              <td>8</td>
              <td>9.5</td>
              <td>26.5</td>
            </tr>
            <tr>
              <td>42 2/3</td>
              <td>8.5</td>
              <td>10</td>
              <td>27</td>
            </tr>
            <tr>
              <td>43 1/3</td>
              <td>9</td>
              <td>10.5</td>
              <td>27.5</td>
            </tr>
            <tr>
              <td>44</td>
              <td>9.5</td>
              <td>11</td>
              <td>28</td>
            </tr>
          </tbody>
        </table>

        <table>
          <caption>Socks table size</caption>
          <tbody>
            <tr>
              <th>EUR</th>
              <th>UK</th>
              <th>US</th>
            </tr>
            <tr>
              <td>25 - 31</td>
              <td>8C - 13C</td>
              <td>8C - 13C</td>
            </tr>
            <tr>
              <td>32 - 36</td>
              <td>13C - 3</td>
              <td>1 - 4</td>
            </tr>
            <tr>
              <td>36 - 40</td>
              <td>3 - 6</td>
              <td>4 - 7</td>
            </tr>
            <tr>
              <td>40 - 45</td>
              <td>6 - 9</td>
              <td>7 - 10</td>
            </tr>
            <tr>
              <td>44 - 47</td>
              <td>9 - 12</td>
              <td>10 - 13</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-bottom: 4rem;

  .table-flex {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
  }
  table {
    position: relative;
    background-color: var(--white-color);
  }
  table,
  tr {
    border: 1px solid var(--dark-color-light);
    border-collapse: collapse;
  }
  th,
  td {
    padding: 0.7rem 2rem;
    text-align: center;
  }
  tr {
    font-weight: 400;
  }
  th {
    background-color: var(--dark-color);
    color: var(--white-color);
  }
  caption {
    border-top: 1px solid var(--dark-color-light);
    border-left: 1px solid var(--dark-color-light);
    border-right: 1px solid var(--dark-color-light);
    background-color: var(--white-color);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    padding: 1rem 0;
    font-weight: var(--font-semi-bold);
  }
`;

export default ProductHelp;
