import { response } from "express";
import doctorService from "../services/doctorService";

let getTopDoctorHome = async(req, res) => {
    let limit = req.query.limit;
    
    if(!limit) limit = 10;
    try{
        let doctors = await doctorService.getTopDoctorHome(+limit);
        return res.status(200).json(response);

    }catch(e){
        return res.state(200).json({
            errCode: -1,
            message: 'error'
        })
    }
}
module.exports = {
    getTopDoctorHome: getTopDoctorHome
}