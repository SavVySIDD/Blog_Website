const express = require('express');
const router = express.Router();
const blogControllers = require('../controllers/blogControllers');


router.get('/', blogControllers.blog_index);


router.get('/create', blogControllers.blog_create_get);
  

router.post('/',blogControllers.blog_create_post);

// router.get('/:id', (req, res) => {
//   const id = req.params.id.trim(); // Trim spaces
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).render('404', { title: 'Invalid Blog ID' });
//   }
//     Blog.findById(id)
//       .then(result => {
//         res.render('details', { blog: result, title: 'Blog Details' });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   });
  
router.get('/:id',blogControllers.blog_details);

router.delete('/:id', blogControllers.blog_delete);

module.exports =router;