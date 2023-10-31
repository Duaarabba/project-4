import React ,{useEffect,useState} from 'react'


 export default function Products() {
    let [products,setProducts]=useState ([]);

    const getProducts= async()=>{
        let response =await fetch('https://fakestoreapi.com/products');
        let data =await response.json()
        console.log(data);
        setProducts(data);}

    useEffect(()=>{
            getProducts();
        },[])
  return (
   <div className='row'>
    { products.map( (ele)=>{
            return <div className='col-md-2 ' key={ele.id} >
                <div>
                <p className='py-3'>{ele.title}</p>
                <img src={ele.image} alt='product-img' className='w-100'/>
                </div>
            </div>
        })
    }
   </div>
  )
}

