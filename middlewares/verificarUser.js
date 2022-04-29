module.exports = (req, res, next) => {

    // Esto lo necesita passport
    if (req.isAuthenticated()) 
    {
        return next();
    }

    res.redirect("/auth/login");
};