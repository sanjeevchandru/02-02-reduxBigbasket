
import './Home.scss'
import { FaRegHeart } from "react-icons/fa";
import { BsBasket } from "react-icons/bs"
import { FcLike } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { update } from './store/Slice';
// import { FaShoppingCart } from "react-icons/fa";
export const Home = () => {
    const a = useSelector((d)=>d.data)
    const b=useDispatch();
    const nav = useNavigate();
    const handleFav = (i) => {
        console.log("hello fav")
        let x = a.arr.map((e) => { return i === e.id ? { ...e, isfav: !e.isfav } : e })
        b(update(x))
    }
    const addcart = (id) => {
        let x = a.arr.map((e) => { return id === e.id ? { ...e, isadd: true } : e })
        b(update(x))
    }
    const increcart = (id) => {
        let x = a.arr.map((e) => { return id === e.id ? { ...e, count: e.count + 1 } : e })
        b(update(x))
        let y = x.some((e) => { return e.count > 10 })
        console.log(y)
        if (y === true) {
            let x = a.arr.map((e) => { return id === e.id ? { ...e, isadd: true } : e })
            b(update(x))
            alert("You cannot add more than 10 quantities of this product")
        }
        else {
            b(update(x))
        }
    }
    const decrecart = (id) => {
        let x = a.arr.map((e) => { return id === e.id ? { ...e, count: e.count - 1 } : e })
        console.log(x.map((e) => { return id === e.id ? e.count : e }))
        let y = x.some((e) => { return e.count < 1 })


        if (y === true) {
            let x = a.arr.map((e) => { return id === e.id ? { ...e, isadd: false } : e })
            b(update(x))
        }
        else {
            b(update(x))
        }
    }

    const details = (id) => {
        nav(`/det?i=${id}`)
        console.log(id)
    }
    const dropprice = (i) => {
        let x = a.arr.map((e) => { return e.id === i ? { ...e, isprice: !e.isprice } : e })
        b(update(x))
    }
    const setprice = (p, index, key) => {
        //arr of object index=>key
        //index =>weight index
        //p => weight object
        console.log(p)
        let x = a.arr.map((e, i) => {
            return key === i ? { ...e, originalKg: p.kg, originalPrice: p.price, isprice: false, weight: e.weight.map((ei, ind) => { return index === ind ? { ...ei, isActive: true } : { ...ei, isActive: false } }) } : e
        })
        b(update(x))
    }
    return (
        <div>
            <div className="nav">
                <div className="container">
                    <div className="nav-row">
                        <div className="logo">
                            <img src={"data:image/png;base64,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"} alt="logo" />
                        </div>
                        <div className="nav-col">
                            <div className="nav-fav">
                                <Link to='/fav'><FaRegHeart /></Link>
                            </div>
                            <div className="nav-cart">
                                <Link to='/cart'><BsBasket style={{ color: "#fff", fontSize: "25px", padding: "5px", borderRadius: "50%", backgroundColor: "rgb(139, 10, 10)" }} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container con">

                <div className="row">
                    {a.arr.map((e, index) => {
                        return (
                            <div key={index} className="col">
                                <div className="card">
                                    <div className="img-col" onClick={() => details(e.id)}>
                                        <p>{e.offer}</p>
                                        <img src={e.img} alt="pic" />
                                    </div>

                                    <h4 className="brand">{e.brand}</h4>
                                    <p className="pro-name">{e.name}</p>

                                    <div className="kg-row">
                                        <div>
                                            <p style={{ backgroundColor: "#999", borderRadius: "4px" }} onClick={() => { dropprice(e.id) }}>{e.originalKg} </p>
                                            {e.isprice ?

                                                <div className="kg-abs">
                                                    {e.weight.map((v, i) => {
                                                        return (
                                                            <div key={i} className="kg-col">
                                                                <div className="kg-card">
                                                                    <div className="kg-p" onClick={() => setprice(v, i, index)}>
                                                                        <h3>{v.kg}</h3>
                                                                        <div className="kg-offer">
                                                                            <p className="offer">{v.offer}</p>
                                                                            <p>{v.price}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div> : ''
                                            }
                                        </div>

                                    </div>
                                    <h4>{e.originalPrice}<sup style={{ padding: "0 10px", color: "#999", fontWeight: "normal" }}><s>{e.mrp}</s></sup></h4>
                                    <div className="btn-row">

                                        <div onClick={() => handleFav(e.id)} className="fav-btn" title="Save to favourite">
                                            {e.isfav ? <FcLike /> : <FaRegHeart />}
                                        </div>
                                        {e.isadd ?
                                            <div className="addtrue">
                                                <button onClick={() => decrecart(e.id)}>-</button>
                                                <p>{e.count}</p>
                                                <button onClick={() => increcart(e.id)}>+</button>
                                            </div> :
                                            <div className="cart-btn" onClick={() => addcart(e.id)}>
                                                Add
                                            </div>}
                                    </div>

                                    {/* {console.log(e.weight.map((val)=>{return val.kg}))} */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}