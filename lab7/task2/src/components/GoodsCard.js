import React from 'react';

function GoodsCard(props) {
  const { image, name, price } = props;

  return (
    <div className="goods-card">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p className="price">{price} грн</p>
    </div>
  );
}

export default GoodsCard;