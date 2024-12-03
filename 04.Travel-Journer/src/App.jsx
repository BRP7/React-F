import Header from "./Components/Header"
import Card from "./Components/Card"

export default function App(){
  return (
    <>
    <Header/>
    <Card 
      imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/1200px-Empire_State_Building_%28aerial_view%29.jpg"
      location="New York" 
      locationDescription="New York, the city that never sleeps, is a melting pot of cultures, cuisines, and experiences. From the iconic Statue of Liberty to the bright lights of Times Square, and from the peaceful green oasis of Central Park to the vibrant neighborhoods of Brooklyn and Queens, New York is a city that seamlessly blends history, art, and entertainment. With its world-class museums like the Met and MoMA, iconic music venues like Madison Square Garden, and diverse culinary scene, New York is a destination that has something to offer for every kind of traveler." 
      link="https://www.google.com/maps" 
      startDate="2024-01-01" 
      endDate="2024-01-31" 
    />
    <Card 
      imageUrl="https://cdn.britannica.com/01/94501-050-7C939333/Big-Ben-London.jpg" 
      location="London" 
     locationDescription="London, the vibrant capital of England, is a city steeped in history and culture. From the iconic Buckingham Palace to the majestic Tower of London, and from the bustling streets of Soho to the tranquil parks of Kensington, London is a city that seamlessly blends tradition and modernity. With its world-class museums, theaters, and restaurants, London is a destination that has something to offer for every kind of traveler." 
      link="https://www.google.com/maps" 
      startDate="2024-02-01" 
      endDate="2024-02-28" 
    />
    <Card 
      imageUrl="https://i.natgeofe.com/k/c41b4f59-181c-4747-ad20-ef69987c8d59/eiffel-tower-night.jpg?wp=1&w=1084.125&h=1627.5"
      location="Paris" 
      locationDescription="The City of Light, famous for its iconic Eiffel Tower, stunning Notre-Dame Cathedral, and world-class art museums like the Louvre, Paris is a must-visit destination for any traveler."
      link="https://www.google.com/maps" 
      startDate="2024-03-01" 
      endDate="2024-03-31" 
    />
    </>
  )
}