const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose');
const { escape } = require('querystring');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

//connect to MongoDB
const dbURI = 'mongodb+srv://Sid:Test1234@mernapp.q4az0.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=MERNapp'
mongoose.connect(dbURI)
    .then((result)=>{
        // listen for requests
        console.log(`Listening on Port 3000`)
        app.listen(3000);
    })
    .catch((err)=>console.log(err))



// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

// app.use((req,res,next)=>{
//     console.log('New Request Made:')
//     console.log('host: ', req.hostname)
//     console.log('path', req.path)
//     console.log('method', req.method)
//     next()
// })

//middleware and static files
app.use(express.static('public'))  // Here because of this all the files in public folder becomes accessible to us as public being the static folder
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

//mongoose and mongo sandbox routes
// app.get('/add-blog',(req,res)=>{

//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     })

//     blog.save()
//         .then((result)=>{
//             res.send(result)
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
// })

// app.get('/all-blogs', (req,res)=>{
//     Blog.find()
//         .then((result)=>{
//             res.send(result)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
// })

app.get('/', (req, res) => {
  res.redirect('/blogs')
//   res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

//blog routes
app.use('/blogs',blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});