import axios from 'axios';
import {Link} from "react-router-dom";

export default function ProductCard(props ) {


  const Delete = async () => {
    try {
      await axios.delete(`https://dummyjson.com/products/${props.product.id}`);
      console.log('ürün silindi');
      console.log(props.product.id)
      props.onDelete(props.product);
    } catch (error) {
      console.error('Hataa:', error);
    }
  };

  return (

    <div className="card">
    <img src={props.product.thumbnail} className="card-img-top" alt="..." />
    <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="card-text">{props.product.description}</p>
        <Link
            to={"/product-detail/" + props.product.id}
            className="btn btn-primary"
        >
            Details
        </Link>
        <button onClick={Delete} className="btn btn-danger">Sil</button>
        <br />
        <Link  to={"/product-add/" + props.product.id}
            className="btn btn-success">Ekle</Link>

    </div>
</div>
  )
}
