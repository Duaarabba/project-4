import React ,{useEffect,useState} from 'react'


 export default function Pizza() {
    let [pizza,setPizza]=useState ([]);
    let [Onion,setOnion]=useState ([]);
     let [Salad,setSalad]=useState ([]);
    const getPizza= async()=>{
        let response =await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
        let data =await response.json()
        console.log(data);
        setPizza(data.recipes);}
       

    const getOnion= async()=>{
    let response =await fetch('https://forkify-api.herokuapp.com/api/search?q=onion');
    let data =await response.json()
    console.log(data);
    setOnion(data.recipes);}

    const getSalad= async()=>{
    let response =await fetch('https://forkify-api.herokuapp.com/api/search?q=salad');
    let data =await response.json()
    console.log(data);
    setSalad(data.recipes);}

    useEffect(()=>{
            getPizza();
            getOnion();
            getSalad();
          
        },[])
  return ( 
   <div className='row'>
    <h2 className='text-center py-3'>Pizza</h2>
    {
      pizza.map( (ele)=>{
            return <div className='col-md-2 ' key={ele.recipe_id}  >
                <p>{ele.publisher}</p>
                <img src={ele.image_url} alt='food-img' className='w-100'/>
                
            </div>
        })
    }
        
       
        <div className='row'>
    <h2 className='text-center py-3'>Onion</h2>
    {
      Onion.map( (ele)=>{
            return <div className='col-md-2 ' key={ele.recipe_id}  >
                <p>{ele.publisher}</p>
                <img src={ele.image_url} alt='food-img' className='w-100'/>
                
            </div>
        })
    }
        
       
     
     </div> 
     <div className='row'>
    <h2 className='text-center py-3'>Salad</h2>
    {
      Salad.map( (ele)=>{
            return <div className='col-md-2 ' key={ele.recipe_id}  >
                <p>{ele.publisher}</p>
                <img src={ele.image_url} alt='food-img' className='w-100'/>
                
            </div>
        })
    }
        
       
     
     </div>
    </div>
    
    
     )
    }













   
  
 



