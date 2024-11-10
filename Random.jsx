import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { configDotenv } from 'dotenv';
import Spinner from './Spinner';



const Random = () => {
    const [gif,setGif]=useState('');
    const [loader,Setloader]=useState('false')
     async function fetchData(){
        Setloader(true)
        const url =`https://api.giphy.com/v1/gifs/random?api_key=P6u2q1s5Pt9fqYcVi4DKM2jlUJ2hADR5`;
        const {data} = await axios.get(url);
        const imageSourcee= data.data.images.downsized_large.url;
        setGif(imageSourcee);
        Setloader(false)
        
    }
    useEffect(()=>{
        fetchData()
    },[])
    function clickhandler(){
        fetchData()
    }
    
  return (
   
    <div className='bg-red-500 h-[450px] w-10/12'>
    {
        loader? (<Spinner />):(<img src={gif}/>)
    }

    
    <button className='bg-red-400' onClick={clickhandler}>Generate</button>
      
    </div>
  );
}

export default Random;
