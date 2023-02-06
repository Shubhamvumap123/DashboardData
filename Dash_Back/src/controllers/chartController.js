

const express = require("express")
const Chart = require("../models/DataModel")
const router = express.Router()

router.get("/",async(req,res)=>{

    try {
        const {Chart_id, Chart_name,subChart_id} = req.query
        const query = {}
        if(Chart_id){
         query.Chart_id = Chart_id
        }
        if(Chart_name){
         query.Chart_name = Chart_name
        }
        if(subChart_id){
            query.subChart_id = subChart_id
       
        }
       
      
        const Chartmodule = await Chart.find(query)

     return res.status(200).json({success:true, Chartmodule})
     

    } catch (error) {
        return res.status(500).send({message:error.message})
    }

})

module.exports = router
