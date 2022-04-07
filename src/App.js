import React from "react";

function Food({name, picture}) {
  return (
    <div>
      <h2> like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike =[
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5zbitDmSr5pOFWiP3qnAhv04pAe-pi1gvA&usqp=CAU'
  },
  {
    id:2,
    name: 'Samgyeopsal',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPbFhWQxUlVOn3z0GXbprWSrlN-eTtxy-XA&usqp=CAU'
  },
  {
    id:3,
    name:'Bibimbap',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8TgzcEGvR9rAOG8unUUaLnKWwyzRgIl5ew&usqp=CAU'
  },
  {
    id:4,
    name:'Doncasu',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVecIPObOrlhha3phjqGB4cH6yNVEh6_FuwY5tC_gWopcIUHVonh1vVkl6Ao-0fVukcs4&usqp=CAU'
  },
  {
    id:5,
    name:'Kimbap',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZ7JhEx6mwZ86gmYiCGmLxce3_R31-3MOfg&usqp=CAU'
  }
];

const renderFood= dish => <Food key={dish.name} name={dish.name} picture={dish.image} />;


function App() {
  console.log(foodILike.map(renderFood));
  return (
    <div> 
      {foodILike.map(renderFood)}
    </div>
  );
}


export default App;