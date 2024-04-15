const profileModel = require('../model/Profile')
const {getAllData,addProfileData} = require('../service/profileService')
const validateToken = require('../middleware/validateToken')
async function postSaveProfile(req,res){
    try{
        const {data,token} = req.body;
        const validatedResult = validateToken(token);
        console.log("postSaveProfile");
        if(await addProfileData({...data,creatorEmail: validatedResult.useremail})){
            res.status(201).json({'message': 'saved data'})
        }
    }catch(e){
        console.log(e);
        res.status(500).json({'error': 'not able to save data'})
    }
    
}

async function postFetchData(req,res) {
    try {
        const {token} = req.body;
        const validatedResult = validateToken(token);
        const data = await getAllData(validatedResult.useremail)
        res.status(200).json(data)
    } catch (error) {
        console.log(e);
        res.status(500).json({'error': 'Unable to fetch the data'})
    }
}

module.exports = {postSaveProfile,postFetchData};