import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv"
dotenv.config()

cloudinary.config({
    cloud_name:'dwutfi33x',
    api_key:"117564933739552",
    api_secret:"kX1y5EghfGjRC3ZPcq3Z-6R2kVA"
});

export default cloudinary;