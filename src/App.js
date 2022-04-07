import React from "react";

function Food({name}) {
  return <h1>I like {name}</h1>;
}

const foodILike =[
  {
    name: 'Kimchi',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5zbitDmSr5pOFWiP3qnAhv04pAe-pi1gvA&usqp=CAU'
  },
  {
    name: 'Samgyeopsal',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmPbFhWQxUlVOn3z0GXbprWSrlN-eTtxy-XA&usqp=CAU'
  },
  {
    name:'Bibimbap',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8TgzcEGvR9rAOG8unUUaLnKWwyzRgIl5ew&usqp=CAU'
  },
  {
    name:'Doncasu',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVecIPObOrlhha3phjqGB4cH6yNVEh6_FuwY5tC_gWopcIUHVonh1vVkl6Ao-0fVukcs4&usqp=CAU'
  },
  {
    name:'Kimbap',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZ7JhEx6mwZ86gmYiCGmLxce3_R31-3MOfg&usqp=CAU'
  }
];

function App() {
  return (
    <div> 
      {foodILike.map(dish => <Food key={dish.name} name={dish.name} />)}
    </div>
  );
}


export default App;