import React, {useEffect,useState} from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Homepage() {

  const myAsyncFunction = () => {
		return new Promise((resolve, reject) => {
			reject("HTTP VERİSİ");
		});
	};

	useEffect(() => {
		makeAsyncCall();
		makeHttpCall();
	}, []);

	

	const makeAsyncCall = async () => {
		// myAsyncFunction()
		// .then(response => {
		// 	console.log("İşlem başarılı cevap:", response);
		// }) // async işlem başarılı ise (resolve edildi ise)
		// .catch(error => {
		// 	console.log("İşlem başarısız cevap:", error);
		// }) // async işlem başarısız ise (reject edildi ise)
		// .finally(() => {
		// 	console.log("İşlem bitti");
		// }); // her halükarda en son çalışır

		//es2017 async-await
		try {
			let response = await myAsyncFunction();
			console.log(response);
		} catch (e) {
			console.log(e);
		}
	};

  axios.get('https://dummyjson.com/products')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

	const makeHttpCall = async () => {
		// fetch("https://dummyjson.com/products")
		// 	.then(response => response.json())
		// 	.then(json => console.log(json))
		// 	.catch(err => console.log(err));
		// zincirleme promise

		let response = await fetch("https://dummyjson.com/products");
		let json = await response.json();
		console.log(json);
	};

  const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = async () => {
		let response = await axios.get("https://dummyjson.com/products");
		setProducts(response.data.products);
	};
	
	
	
  return (
    <div className="container mt-5">
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-lg-3 col-md-6 col-12 mb-5">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  </div>
  )
}
