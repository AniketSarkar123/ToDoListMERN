const {Router}=require("express");

const router=Router();

const {getToDo,saveToDo,deleteToDo,updateToDo}= require('../controllers/todocontroller');

router.get('/get-todo',getToDo)
      .post('/save-todo',saveToDo)
      .post('/delete-todo',deleteToDo)
      .post('/update-todo',updateToDo);


module.exports=router;

