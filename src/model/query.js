import pkg from 'sequelize';
import {User} from './database.js'

async function addUser(obj) {
  await User.sync();
   await User.create(obj);
}

async function getList() {
   var list=[];
   var temp;  
   await User.sync();
   var data =await User.findAll();
    list= data.map(instance=>{
        return(instance["dataValues"]);
    })
    return list;
}

async function deleteList(md5){
    await User.sync();
    await User.destroy({
        where: {
          md5: md5
        }
      });
}

export {
  addUser,
  getList,
  deleteList
}