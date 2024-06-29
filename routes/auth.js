import express from "express";
import passport from "../passport.js";
import { sendCookie } from "../utils/features.js";

const router = express.Router();

router.get("/login/success", (req, res) => {
    res.redirect("/users/home");
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        error: true,
        message: "Log in failure",
    });
});

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
    "/google/callback",
    (req, res, next) => {
        passport.authenticate("google", async (err, user, info) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.redirect("/users/login/");
            }
            req.logIn(user, (err) => {
                if (err) {
                    return next(err);
                }
                sendCookie(user, res, "Login successful");
            });
        })(req, res, next);
    }
);

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect('/login'); 
});

export default router;
