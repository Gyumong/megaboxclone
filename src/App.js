import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import axios from 'axios';
import { API, API_KEY } from './Config';
import styled from 'styled-components';

const MainBlock = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #121212;
  color: #bbb;
`;
const R_Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const L_Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

function App() {
  const [Movie, setMovie] = useState([]);
  const [loading, setloading] = useState(false);
  let today = new Date();
  let year = today.getFullYear() + ''; // 년도
  let month = today.getMonth() + 1 + ''; // 월
  let date = today.getDate() + ''; // 날짜
  const yesterday = parseInt(year + month + date) - 1;

  useEffect(() => {
    setloading();
    const apiCall = async () => {
      const response = await axios.get(
        `${API}${API_KEY}&targetDt=${yesterday}`,
      );
      setMovie([...response.data.boxOfficeResult.dailyBoxOfficeList]);
      console.log(Movie);
      setloading(true);
    };
    apiCall();
  }, []);
  const TOP5 = Movie.slice(0, 5);
  const TOP10 = Movie.slice(5);
  console.log(Movie);
  return (
    <MainBlock>
      <L_Block>
        {loading ? (
          TOP5.map((movie, i) => (
            <Main key={i} rank={movie.rank} name={movie.movieNm} />
          ))
        ) : (
          <h1>로딩중...</h1>
        )}
      </L_Block>
      <R_Block>
        {loading ? (
          TOP10.map((movie, i) => (
            <Main key={i} rank={movie.rank} name={movie.movieNm} />
          ))
        ) : (
          <h1>로딩중...</h1>
        )}
      </R_Block>
    </MainBlock>
  );
}

export default App;
