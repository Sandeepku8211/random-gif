import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { configDotenv } from 'dotenv';
import Spinner from './Spinner';



const Generate = () => {
    const [gif,setGif]=useState('');
    const [Generate,setGenerate]=useState('')
    const [loader,Setloader]=useState('false')
     async function fetchData(){
        Setloader(true)
        const url =`https://api.giphy.com/v1/gifs/random?api_key=P6u2q1s5Pt9fqYcVi4DKM2jlUJ2hADR5&&Genrate=${Generate}`;
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
    function clickHandlerInput(event){
      
      setGenerate(event.target.value)
    }
    
  return (
   
    <div className='bg-red-500 h-[450px] w-10/12'>
    {
        loader? (<Spinner />):(<img src={gif}/>)
    }

    <input value={Generate} type='text' onChange={clickHandlerInput} className='w-10/12'/>

    
    <button className='bg-red-400' onClick={clickhandler}>Generate</button>
      
    </div>
  );
}

export default Generate;
