import express from "express";
import { login, logout, register, updateUser } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();


router.get("/register", (req, res) => {
    res.render('register');
});


router.post("/register", register);


router.get("/login", (req, res) => {
    res.render('login');
});


router.post("/login", login);


router.get("/home", isAuthenticated,(req, res) => {
    res.render('home', { user: req.user });
});




router.post("/edit", isAuthenticated ,updateUser);


router.get("/logout", logout);

export default router;
