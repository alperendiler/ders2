import React ,{useEffect,useState} from 'react'
import axios from 'axios';
import './ProductDetail.css'

import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  let { id } = useParams();

  const [productDetail, setProductDetail] = useState(null);

  const getProduct = async () => {
    try {
      let response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProductDetail(response.data);
    } catch (error) {
      console.error('Ürün bulunamadı:', error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);


  return (
    <>
  
          <>
           
          </>
     
          <div className="container">
  <div className="row row-cols-2">
    <div className="col-lg-6 col-md-1 ">
      {productDetail && (
        <img src={productDetail.thumbnail} alt="Product Thumbnail" />
      )}
    </div>
    <div className="col-lg-6 col-md-1  ">
      <h1 className="card-text">
        {productDetail && productDetail.title}{" "}
        {productDetail && productDetail.description}
      </h1>
      <h5>Kategori: {productDetail && productDetail.category}</h5>
      <br />
      <br />
      <br />
      <h4>
        <button type="button" className="btn btn-primary btn-lg">
          Sepete Ekle
        </button>{" "}
        Fiyat: {productDetail && productDetail.price} TL
      </h4>
      <h5 className="card-text">
        Stok Adedi: {productDetail && productDetail.stock}
      </h5>
    </div>
  </div>
</div>
     
    </>
  )
}
