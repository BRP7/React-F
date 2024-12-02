import Header from "./Components/Header"
import Card from "./Components/Card"

export default function App(){
  return (
    <>
    <Header/>
    <Card 
      imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/1200px-Empire_State_Building_%28aerial_view%29.jpg"
      location="New York" 
      locationDescription="This is the description of New York" 
      link="https://www.google.com/maps" 
      startDate="2024-01-01" 
      endDate="2024-01-31" 
    />
    <Card 
      imageUrl="https://cdn.britannica.com/01/94501-050-7C939333/Big-Ben-London.jpg" 
      location="London" 
      locationDescription="This is the description of London" 
      link="https://www.google.com/maps" 
      startDate="2024-02-01" 
      endDate="2024-02-28" 
    />
    <Card 
      imageUrl="https://i.natgeofe.com/k/c41b4f59-181c-4747-ad20-ef69987c8d59/eiffel-tower-night.jpg?wp=1&w=1084.125&h=1627.5"
      location="Paris" 
      locationDescription="This is the description of Paris" 
      link="https://www.google.com/maps" 
      startDate="2024-03-01" 
      endDate="2024-03-31" 
    />
    </>
  )
}