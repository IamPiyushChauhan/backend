const profileModel = require('../model/Profile')

async function addProfileData(profileData){
    try{
        const model = new profileModel(profileData)
        const saved = await model.save();
        return saved._id!=undefined;
    }catch(e){
        console.log(e);
        return false;
    }
}

async function getAllData(creatorEmail){
    try{
        return await profileModel.find({creatorEmail: creatorEmail})
    }catch(e){
        console.log(e);
    }
}

module.exports = {getAllData,addProfileData};