import React, {useState} from 'react';

const Menu = ({items}) => {
  return <div className="container">
    {
      items.map((menuItem) =>{
        const {id, title, img, price, desc} = menuItem;
        return <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12 my-4">
              <div key={id} className="card">
                <img className="img-fluid" src={img} alt={title} />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12 my-4 parent">
              <div className="d-flex price justify-content-between align-items-center">
              <h3>{title}</h3>
                <h3 className="price-number">${price}</h3>
              </div>
              <div>
              <p className="mb-5">{desc}</p>
                <div className="control">
                  <button onClick={() => alert(`Thanks`)} type="button" className="btn ml-3">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      })
    }
    </div>
};

export default Menu;