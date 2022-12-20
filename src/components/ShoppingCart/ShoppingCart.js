import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { DECREASE_QUANTITY, DELETE_CART,INCREASE_QUANTITY} from "../../redux/actions/index";


const Shopingcarddipslay = () => {

  const dispatch=useDispatch()
  const items=useSelector((state)=>state._cardProduct)

  let ListCart = [];
  let TotalCart = 0;
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });
  // function TotalPrice(price, tonggia) {
  //   return Number(price * tonggia).toLocaleString("en-US");
  // }
  
  

  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5">
        <div className="col-lg-8 table-responsive mb-5">
          <table className="table table-bordered text-center mb-0">
            <thead className="bg-info text-dark">
              <tr>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="align-middle">
              {ListCart.map((item, key) => (
                <tr key={key}>
                
                  <td className="d-flex">
                    <img
                      src={item.image}
                      alt={item.title}
                      className=""
                      style={{ width: "90px" }}
                    />
                    <p className="align-center">{item.name}</p>
                  </td>
                  <td className="align-middle">${item.price}</td>
                  <td className="align-middle">
                    <div
                      className="input-group quantity mx-auto"
                      style={{ width: "100px" }}
                    >
                      <div className="input-group-btn">
                        <button
                            onClick={()=>dispatch({type:DECREASE_QUANTITY,payload:key})}
                          // onClick={() => DecreaseQuantity(key)}
                          className="btn btn-sm btn-primary btn-minus"
                        >
                          <i className="fa fa-minus"></i>
                        </button>
                      </div>
                      <h1
                        type="text"
                        className="form-control form-control-sm bg-info text-dark text-center"
                        value={item.quantity}
                      >
                        {item.quantity}
                      </h1>
                      <div className="input-group-btn">
                        <button
                          onClick={()=>dispatch({type:INCREASE_QUANTITY,payload:key})}
                          className="btn btn-sm btn-primary btn-plus"
                        >
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">
                    ${(item.price* item.quantity)}
                  </td>
                  <td className="align-middle">
                    <button
                      onClick={()=>dispatch({type:DELETE_CART,payload:key})}
                      className="btn btn-sm btn-primary"
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
        
          <div className="card border-info mb-5">
            <div className="card-header bg-info border-0">
              <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3 pt-1">
                <h6 className="font-weight-medium">Subtotal</h6>
                <h6 className="font-weight-medium">${TotalCart}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Shipping</h6>
                <h6 className="font-weight-medium">$10</h6>
              </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="font-weight-bold">Total</h5>
                <h5 className="font-weight-bold">${TotalCart + 10}</h5>
              </div>
              <button className="btn btn-block btn-primary my-3 py-3">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   //  console.log(state)
//   return {
//     items: state._cardProduct,
//   };
// };

// export default connect( {
//   IncreaseQuantity,
//   DecreaseQuantity,
//   DeleteCart,
// })(Shopingcarddipslay);
export default Shopingcarddipslay