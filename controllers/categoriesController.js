const db = require('../models')

// Catagories index controller
const index = async (req, res) => {
  try {
    if (!req.session.currentUser) {
      // send to login screen if not logged in
      return res.redirect('/auth/login');
    } else {
  const foundCategories = await db.Category.find({ user: req.session.currentUser });
      if(!foundCategories) return res.json({
          message: 'No Categories found in database.'
      })
      const user = await db.User.findById(req.session.currentUser)
      res.status(200).json({ 
        title: 'Categories',
        username: user.username,
        categories: foundCategories });
}
} catch(err) {
  return res.status(500).json({
    status: 500,
    err,
    message: 'Something went wrong! please try again'
    
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
  const createCategory = await db.Category.create(req.body);
    if(!createCategory) return res.json({
        message: 'No Category created in database.'
    })
    createCategory.user = req.session.currentUser;
    const savedCategory = await createCategory.save();
      res.status(200).json({ category: savedCategory })
  
}
} catch(err) {
  return res.status(500).json({
    status: 500,
    message: err
    
  })
}
}

// Catagories show controller
const show = async (req, res) => {
  try {
    if (!req.session.currentUser) {
      // if no user so doesnt have access inside the new form
      return res.redirect('/auth/login');
    } else {
  const foundCategory = await db.Category.findById(req.params.id);

      if(!foundCategory) return res.json({
        message: 'No Category found in database.'
    })
  const categoryBooks = await db.Book.find({ category: req.params.id })  
      res.status(200).json({ 
        title: 'Show',
        category: foundCategory,
        categoryBooks: categoryBooks
      })
  
}
} catch(err) {
  return res.status(500).json({
    status: 500,
    message: err
    
  })
} 
}

// Catagories update controller
const update = async (req, res) => {
  try {
    if (!req.session.currentUser) {
      // if no user so doesnt have access inside the new form
      return res.redirect('/auth/login');
    } else {
  const updateCategory = await db.Category.findByIdAndUpdate(
     req.params.id,
     req.body, 
     {new: true});
      if(!updateCategory) return res.json({
        message: 'No Category with that id updated.'
    })
      res.status(200).json({ category: updateCategory })
  
}
} catch(err) {
  return res.status(500).json({
    status: 500,
    message: err
    
  })
} 
}

// Catagories destroy controller
const destroy = async (req, res) => {
  try {
    if (!req.session.currentUser) {
      // if no user so doesnt have access inside the new form
      return res.redirect('/auth/login');
    } else {
  const deletedCategory = await db.Category.findByIdAndDelete(req.params.id);
      if(!deletedCategory) return res.json({
        message: 'No Category with that id deleted.'
    })

  const deletedBooks = await db.Book.deleteMany({ category: req.params.id })  
      res.status(200).json({ 
        category: deletedCategory,
        deletedBooks: deletedBooks
      })
  
}
} catch(err) {
  return res.status(500).json({
    status: 500,
    message: err
    
  })
} 
}

// Export
module.exports = {
  index,
  create,
  show,
  update,
  destroy
}