import styled from 'styled-components';
import { BASE_URL, Button, Container } from '../../App';

const SearchResult = ({data}) => {
  return (
    <FoodContainer>
        <Container>
        <FoodCards>{data?.map(({ name, image, text, price}) => (        // "data?" used for waiting data fetching 
        <FoodCard key={name}>
            <div className='food_cart'>
                <div>
                    <img src={BASE_URL + image} />
                </div>
                <div>
                    <div className='food_info'>
                        <div className='info'>
                            <h3>{name}</h3>
                            <p>{text}</p>
                        </div>
                        <Button>{price.toFixed(2)}</Button>
                    </div>
                </div>
            </div>
        </FoodCard>
        ))}
    </FoodCards>
        </Container>
    </FoodContainer>
  )
}

export default SearchResult;

const FoodContainer = styled.section`
  min-height: calc(100vh - 240px);
  background-image: url("/bg.png");
  background-size: cover;
`;
const FoodCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 20px;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
`;
const FoodCard = styled.div`
    width: 340px;
    height: 167px;
    border: 0.66px solid;

    backdrop-filter: blur(15px);

    border-radius: 20px;

    display: flex;
    padding: 8px;

    .food_cart {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h3 {
        margin-top: 8px;
        font-size: 16px;
        font-weight: 500;
    }
    p {
        margin-top: 6px;
        font-size: 12px;
    }
    .food_info {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
`;