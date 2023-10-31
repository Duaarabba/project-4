import React ,{useEffect,useState} from 'react'


 export default function Restaurant() {
    let [foods,setRestaurant]=useState ([]);

    const getRestaurant= async()=>{
        let response =await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
        let data =await response.json()
        console.log(data);
        setRestaurant(data);}

    useEffect(()=>{
            getRestaurant();
        },[])
  return (
   <div className='row'>
    { foods.map( (ele)=>{
            return <div className='col-md-4 ' key={ele.recipe_id}  >
                <div>
                <h2>{ele.title}</h2>
                <img src={ele.image_url} alt='food-img' className='w-100'/>
                </div>
            </div>
        })
    }
   </div>
  )
}

