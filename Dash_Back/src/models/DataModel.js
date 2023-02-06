const mongoose = require("mongoose");

const Chart = mongoose.Schema({
    end_year:{type:Number},
    intensity:{type:String},
    sector:{type:Number},
    topic:{type:String},
    insight:{type:String},
    region:{type:String},
    start_year:{type:Number},
    impact:{type:String},
    added:{type:String},
    published:{type:String},
    country:{type:String},
    relevance:{type:String},
    pestle:{type:String},
    source:{type:String},
    title:{type:String}
},
{
    timestamps: true,
    versionKey: false
}
);
// console.log("model28")

const Chartdata = mongoose.model("Chart",Chart)
module.exports= Chartdata ;

