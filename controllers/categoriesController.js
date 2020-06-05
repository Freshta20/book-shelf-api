const db = require('../models')

// Catagories index controller
const index = async (req, res) => {
  try {
    if (!req.session.currentUser) {
      // send to login screen if not logged in
      return res.redirect('/auth/login');
    } else {
  db.Category.find({}, (err, foundCategories) => {
      if (err){ 
        console.log('Error in Categories#index:', err)
        }
      if(!foundCategories) return res.json({
          message: 'No Categories found in database.'
      })

      res.status(200).json({ categories: foundCategories });
  })
}
} catch(err) {
  return res.status(500).json({
    status: 500,
    message: err
    
  })
}
}

// Catagories create controller
const create = async (req, res) => {
  try {
    if (!req.session.currentUser) {
      // if no user so doesnt have access inside the new form
      return res.redirect('/auth/login');
    } else {
  db.Category.create(req.body, (err, savedCategory) => {
      if (err) console.log('Error in category#create:', err)

      if(!savedCategory) return res.json({
        message: 'No Category created in database.'
    })
      res.status(200).json({ category: savedCategory })
  })
}
} catch(err) {
  return res.status(500).json({
    status: 500,
    message: err
    
  })
}
}

// Catagories show controller
const show = (req, res) => {

}

// Catagories update controller
const update = (req, res) => {

}

// Catagories destroy controller
const destroy = (req, res) => {

}

// Export
module.exports = {
  index,
  create,
  // show,
  // update,
  // destroy
}