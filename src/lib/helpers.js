const helpers = {};
const bcrypt = require('bcryptjs');

helpers.encryptPassword = async (pass) =>{

   const salt = await bcrypt.genSalt(10);
   const hash = await bcrypt.hash(pass, salt);
   return hash;
};

helpers.matchPassword = async (pass, savePassword) => {
  try {
    return await bcrypt.compare(pass, savePassword);
  }catch(e){
    console.log(e);
  };
};

module.exports = helpers;