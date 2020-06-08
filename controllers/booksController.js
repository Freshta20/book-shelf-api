const db = require('../models')

// Books index controller
const index = async (req, res) => {
  try {
    if (!req.session.currentUser) {
      // send to login screen if not logged in
      return res.redirect('/auth/login');
    } else {
  const foundBooks = await db.Book.find();
    if (!foundBooks) return res.json({
      message: 'No books found in database.'
    })  
    res.status(200).json({
      books: foundBooks,
      message: 'You found the books'
    })
    }
} catch(err) {
  return res.status(500).json({
    status: 500,
    err,
    message: 'Something went wrong! please try again'
    
  })
}
}

// Books create controller
const create = async (req, res) => {
  try {
    if (!req.session.currentUser) {
      // send to login screen if not logged in
      return res.redirect('/auth/login');
    } else {
      const newBook = await db.Book.create(req.body);
      newBook.category = req.params.categoryid;
      if(!newBook) return res.json({
        message: 'No Book added in this category.'
    })

      const savedBook = await newBook.save();
      const foundCategory = await db.Category.findById(req.params.categoryid);
      foundCategory.books.push(savedBook._id);
      const savedCategory = await foundCategory.save();
      
        res.status(200).json({ 
          book: savedBook,
          category: savedCategory,
          message: 'You add a book to this category'
        })  
    }
} catch(err) {
  return res.status(500).json({
    status: 500,
    title: 'New Photo',
    categoryid: req.params.categoryid,
    err,
    message: 'Please choose a file'
    
  })
}
}

// Books show controller
const show = async (req, res) => {
  try {
    if (!req.session.currentUser) {
      // send to login screen if not logged in
      return res.redirect('/auth/login');
    } else {
      const foundBook = await db.Book.findById(req.params.id).populate('category');

      if(!foundBook) return res.json({
        message: 'No book with this id found the category.'
    })
      res.status(200).json({ 
        title: 'Book Detail',
        book: foundBook,
        message: 'Here is your book'
      })
    }
} catch(err) {
  return res.status(500).json({
    status: 500,
    err,
    message: 'Something went wrong! please try again'
    
  })
}
}

// Books update controller
const update = async (req, res) => {
  try {
    if (!req.session.currentUser) {
      // send to login screen if not logged in
      return res.redirect('/auth/login');
    } else {
      const updatedBook = await db.Book.findByIdAndUpdate(
        req.params.id,
        req.body, 
        {new: true});
         if(!updatedBook) return res.json({
           message: 'No Book with that id updated.'
       })
         res.status(200).json({ 
           book: updatedBook,
           message: 'You update it succefully'
           })
    }
} catch(err) {
  return res.status(500).json({
    status: 500,
    err,
    message: 'Something went wrong! please try again'
    
  })
}
}

// Books destroy controller
const destroy = async (req, res) => {
  try {
    if (!req.session.currentUser) {
      // send to login screen if not logged in
      return res.redirect('/auth/login');
    } else {
      const deletedBook = await db.Book.findByIdAndDelete(req.params.id);
      if(!deletedBook) return res.json({
        message: 'No Book with that id deleted.'
    })
      res.status(200).json({ 
        book: deletedBook,
        message: 'You deleted it succefully'
       })
    }
} catch(err) {
  return res.status(500).json({
    status: 500,
    err,
    message: 'Something went wrong! please try again'
    
  })
}
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy
}