import DataURIParser from "datauri/parser.js";
import path from "path"
const getdatauri=(file)=>{
const parser = new DataURIParser()
console.log('filename '+file.originalname)
const extname=path.extname(file.originalname)

 return parser.format(extname,file.buffer)
}
export default getdatauri