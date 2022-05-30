
import db from '../models/index';
import CRUDSevice from '../sevices/CRUDSevice'

let getHomePage = async (req, res) => {
    try {
        let data = await db.user.findAll();
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        });
    }
    catch (e) {
        console.log(e);
    }
}
let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}
let postCRUD = async (req, res) => {
    let message = await CRUDSevice.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from sever');
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDSevice.getAllUser();
    console.log("-------------");
    console.log(data);
    console.log("-------------");
    return res.render('displayCRUD.ejs', {
        dataTable: data
    });
}
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;

    if (userId) {
        let userData = await CRUDSevice.getUserInfoById(userId);
        //check user data not found
        // let userData
        return res.render('editCRUD.ejs', {
            userData: userData
        });

    }
    else {
        return res.send("User not found !!!");
    }


}
let putCRUD = async (req, res) => {
    let data = req.body;
    await CRUDSevice.upDateUserData(data);
    return res.send("update done!!!");
}
let deleteUser = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDSevice.deleteUserById(id);
        return res.send("delete done~~~");
    } else {
        return res.send("delete user not found");
    }
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteUser: deleteUser,

}