import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ShowChart } from './ShowChart'


const Monthlydata = () => {

    const [chartdata,setchartdata] = useState([])
    const [text,settext] = useState("");
    const [region,setRegion] = useState("");
    const [intensity, setintensity] = useState('')
    const [likelihood, setlikelihood] = useState('')
    const [published, setpublished] = useState('')
    const [topic, settopic] = useState('')
    const [relevance, setrelevance] = useState('')


const maindata = async () => {
  
  let fdata =await fetch(`http://localhost:5000/chart`)
        let response = await fdata.json()
        console.log(response)
        if(response && response.Chartmodule){
          setchartdata(response.Chartmodule)
          console.log(chartdata)
        }
      }
 

// async function handleChange() {

//   console.log(text)
//   let url = `http://localhost:5000/chart?`
//   const response = await fetch(url+`country=${text}&region=${region}&`);
//   const filteredItems = await response.json();
//   setchartdata(filteredItems.chart);
//   console.log(filteredItems)

// }

useEffect(()=>{
  maindata()
},[])

  return (
<div>
{/* <div>
    </div> 
      <div>
        <>
          <span>Country</span>
          <input type="text" name="country" onChange={(e)=>settext(e.target.value)} value ={text} />
          <button name="country" onClick={handleChange}>Search</button>
        </>
        <>
          <span>Region</span>
          <input type="text" name="region" onChange={(e)=>setRegion(e.target.value)} value ={region} />
          <button name="region" onClick={handleChange}>Search</button>
        </>
        <>
          <span>intensity</span>
          <input type="text" name="region" onChange={(e)=>setintensity(e.target.value)} value ={intensity} />
          <button name="region" onClick={handleChange}>Search</button>
        </>
        <>
          <span>likelihood</span>
          <input type="text" name="region" onChange={(e)=>setlikelihood(e.target.value)} value ={likelihood} />
          <button name="region" onClick={handleChange}>Search</button>
        </>
        <>
          <span>published</span>
          <input type="text" name="region" onChange={(e)=>setpublished(e.target.value)} value ={published} />
          <button name="region" onClick={handleChange}>Search</button>
        </>
        <>
          <span>topic</span>
          <input type="text" name="region" onChange={(e)=>settopic(e.target.value)} value ={topic} />
          <button name="region" onClick={handleChange}>Search</button>
        </>
        <>
          <span>relevance</span>
          <input type="text" name="region" onChange={(e)=>setrelevance(e.target.value)} value ={relevance} />
          <button name="region" onClick={handleChange}>Search</button>
        </>
      </div>
      <table>
      <thead >
          <tr>
            <th >Country</th>
            <th>Intesity</th>
            <th>Likelihood</th>
            <th>Published</th>
            <th>Region</th>
            <th>Relevance</th>
            <th>Topic</th>
          </tr>
          </thead> 
          <tbody>
    {
      chartdata.length > 0 && <>
        {
          chartdata.map((prod)=>{
            return <tr key={prod.id}>
              <td>{prod.country}</td>
              <td>{prod.intensity}</td>
              <td>{prod.likelihood}</td>
              <td>{prod.published}</td>
              <td>{prod.region}</td>
              <td>{prod.relevance}</td>
              <td>{prod.topic}</td>
            </tr>
          })
        }
      </>
    }
    </tbody>
    </table> */}

    <ShowChart chartData={chartdata}/>
    
    </div>
  )
}

export default Monthlydata