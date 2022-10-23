const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

const errorController = require('./controllers/error');
// const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    session({ secret: 'my secret' , resave: false, saveUninitialized: false })
);
// fetch dummy user and store that in request 
// so that we can use it for the rest of that request, in all the routes and controllers
app.use((req, res, next) => {
    User.findById('630c44f0675163f93d6851c2')
        .then((user) => {
            req.user = user;
            next();
        })
        .catch((err) => {
            console.log(err);
        });
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb+srv://khanhpham:khanhdu123@khanhpham.6zl1ibi.mongodb.net/shop?retryWrites=true&w=majority')
.then(result => {
    User.findOne().then((user) => {
        if (!user) {
            const user = new User({
                name: 'Max',
                email: 'max@test.com',
                cart: { item: [] },
            });
            user.save();
        }
    });
    app.listen(3000)
})
.catch(err => console.log(err));