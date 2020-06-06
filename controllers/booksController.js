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
      const savedBook = await db.Book.create(req.body);
      if(!savedBook) return res.json({
          message: 'No Book added in this category.'
      })
        res.status(200).json({ 
          book: savedBook,
          message: 'You add a books'
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

// Books show controller
const show = async (req, res) => {
  try {
    if (!req.session.currentUser) {
      // send to login screen if not logged in
      return res.redirect('/auth/login');
    } else {
      
    }
} catch(err) {
  return res.status(500).json({
    status: 500,
    message: err
    
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
      
    }
} catch(err) {
  return res.status(500).json({
    status: 500,
    message: err
    
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
      
    }
} catch(err) {
  return res.status(500).json({
    status: 500,
    message: err
    
  })
}
}

module.exports = {
  index,
  create,
  // show,
  // update,
  // destroy
}