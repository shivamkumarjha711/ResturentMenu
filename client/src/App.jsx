import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";


function App() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null)
  const [loading, setLoading] = useState(false);    // For loading icon when data is loading
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
  
      try {
        const response = await fetch(BASE_URL)
    
        const jsonData = await response.json();
        
        setData(jsonData);
        setFilteredData(jsonData);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch Data")
      }
    }
  
    fetchFoodData();
  }, []);                          // Isse kevel ek bar rendering hoga

  const searchFood = (e) => {
    const searchValue = e.target.value;

    console.log(searchValue);

    if(searchValue ==="") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) => 
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  }

  if (error) return <div>{error}</div>
  if (loading) return <div>Loading.....</div>

  return (
    <>
          <Container>
      <TopContainer>
        <div className="logo">
          <img src="../public/logo.png" alt="logo" />
        </div>

        <div className="search">
          <input onChange={searchFood} placeholder="Search Food" />
        </div>
      </TopContainer>

      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>

    </Container>
    <SearchResult data = {filteredData} />
    </>
  )
}

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  `;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search{
    input{
      background-color: transparent;
      border: 1px solid #47ba08;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }

  .logo{
    img{
      height: 150px;
    }
  }
`;
const FilterContainer = styled.section`
  display: flex;
  gap: 12px;
  padding-bottom: 35px;
`;
export const Button = styled.button`
  background-color: #47ba08;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #47ba08;
    font-weight: 550;
  }
`;
