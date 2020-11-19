import React,{useState,useEffect} from 'react';
import Main from './components/Main';
import axios from 'axios';
import {API,API_KEY} from './Config';
import styled from 'styled-components';

const MainBlock = styled.div`
    *{
        box-sizing:border-box;   
        margin:0;
    }
    width:100%;
    height:100vh;
    background:#121212;
    color: #bbb;
`;

function App() {
  const [Movie, setMovie] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading();
    const apiCall=async ()=>{
      const response =await axios.get(`${API}${API_KEY}targetDt=20201110 `);
      setMovie([...response.data.boxOfficeResult.dailyBoxOfficeList]);
      setloading(true);
    }
    apiCall();
    
  }, [])
  console.log(Movie)
  return (
    <MainBlock>
    {loading?Movie.map((movie,i)=>(
      <Main key={i}
      rank={movie.rank}
      name={movie.movieNm}
     />
    )):<h1>로딩중...</h1>}
    </MainBlock>
  );
}

export default App;
