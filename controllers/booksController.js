const db = require('../models')

// Books index controller
const index = async (req, res) => {
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

// Books index controller
const create = async (req, res) => {
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

// Books index controller
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

// Books index controller
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

// Books index controller
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