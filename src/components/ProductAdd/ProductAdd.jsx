import React, { useState } from 'react';
import axios from 'axios';

export default function ProductAdd() {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: 0,
        category: '',
        stock: '',
        image: null,
      });
    
      const handleChange = (e) => {
        const { name, value, type } = e.target;
    
        if (type === 'file') {
          setProduct({
            ...product,
            [name]: e.target.files[0],
          });
        } else {
          setProduct({
            ...product,
            [name]: value,
          });
        }
      };
    
      const handleAddProduct = async () => {
        try {
          const formData = new FormData();
          formData.append('title', product.title);
          formData.append('description', product.description);
          formData.append('price', product.price);
          formData.append('stock', product.stock);
          formData.append('category', product.category);
          formData.append('thumbnail', product.thumbnail);
    
          const response = await axios.post('https://dummyjson.com/products/add', formData);
    
          console.log('Ürün eklendi:', response.data);
    
          setProduct({
            title: '',
            stock: 0,
            description: '',
            category: '',
            price: 0,
            thumbnail: null,
          });
        } catch (error) {
          console.error('Ürün eklenirken hata oluştu:', error);
        }
      };
    
  return (
    <form >
    <label>
      Ürün Adı:
      <input type="text" name="title" value={product.title} onChange={handleChange} />
    </label>
    <br />
    <label>
      Açıklama:
      <textarea name="description" value={product.description} onChange={handleChange} />
    </label>
    <br />
    <label>
      Kategori:
      <input  name="category" value={product.category} onChange={handleChange} />
    </label>
   
    <br />
    <label>
      Fiyat:
      <input type="number" name="price" value={product.price} onChange={handleChange} />
    </label>
    <br />
    <label>
      Stok Adedi:
      <input type="number"  name="stock" value={product.stock} onChange={handleChange} />
    </label>
    <br />
  
     <label>
          Resim Yükle:
          <input type="file" name="thumbnail" onChange={handleChange} accept="thumbnail/*" />
        </label>
        <br />
        <button type="button" onClick={handleAddProduct}>
          Ürün Ekle
        </button>
  </form>  )
}
