import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();

  const getProductData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProduct(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const handldetail = (item) => {
    navigate(`/product-detail`, {
      state: item
    });
  };

  return (
    <div className="container">
      <h1 className="heading">Our Products</h1>

      <div className="grid">
        {product?.map((item) => {
          return (
            <div key={item.id} className="card">
              <div className="imageBox">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="cardBody">
                <p className="category">{item.category}</p>

                <h3 className="title">{item.title.slice(0, 50)}...</h3>

                <div className="rating">
                  ⭐ {item.rating.rate}
                  <span>({item.rating.count})</span>
                </div>

                <div className="bottom">
                  <span className="price">${item.price}</span>
                  <button onClick={() => handldetail(item)}>view detail</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
