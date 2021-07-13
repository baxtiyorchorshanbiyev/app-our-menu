import React from 'react';

const Categorias = ({categorias, filterItems}) => {
  
  return (
    <main>
    <div className="btn-content ml-auto mr-auto">
      {categorias.map((category, index) =>{
        return(
          <button 
          type="button"
          className="btn btn-category m-3 " 
          key={index}
          onClick ={() =>filterItems(category)}
        >{category}</button>
        
        )
        
      })}
    </div>
    </main>
  );
};

export default Categorias;