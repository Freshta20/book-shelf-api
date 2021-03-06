const db = require('../models')
const bcrypt = require('bcryptjs')


const get_register = async (req, res) => {
  res.send('Hi')
}
// user register controller
const register = async (req, res) => {
  try {
    console.log(req.body)
  // check if the user exist
  const existingUser = await db.User.findOne({ email: req.body.email});
  if(existingUser) {
    return res.status(400).json({
      status: 400,
      message: 'A user with that email already exist'
    })
  }
  // check validty of data
  // check that 2 password match
  // create new user and 
  // generate salt 
  const salt = bcrypt.genSaltSync(10);
  // hash that password
  const hash = bcrypt.hashSync(req.body.password, salt);
  
  const userData = {
    name: req.body.name,
    email: req.body.email,
    password: hash
  };

  // save user to database
  const newUser = await db.User.create(userData);
  // send some confirmation message as JSON
  return res.status(200).json({ 
    status: 200,
    message: "User registered",
    userData: newUser
  })

  } catch(err) {
     return res.status(500).json({
       status: 500,
       message: err
       
     })
  }
};

// user login controller
const login = async (req, res) => {
  try{
  const foundUser = await db.User.findOne({ email: req.body.email })

  if(!foundUser){
    return res.status(400).json({
      status: 400,
      message: "Invaid Credentials"
    })
  }
  // check that password matches
  const passwordsMatch = bcrypt.compareSync(req.body.password, foundUser.password);
  if (!passwordsMatch) {
    // wrong password, send back to login page
    return res.render('auth/login', {
      title: 'Login',
      error: 'Invalid Credentials',
    });
  }
  // if password do match
  req.session.currentUser = foundUser._id;
  return res.status(200).json({ 
    status: 200,
    message: "Logged in",
    data: foundUser._id
  })
} catch(err) {
  return res.status(500).json({
    status: 500,
    message: err
    
  })
}
};

// user verify controller
const verify =async (req, res) => {
  if (!req.session.currentUser){ 
   return res.status(401).json({
    message: 'Unauthorized!'
  })
} else {
  res.status(200).json({
    message: `Current user verified with ID ${ req.session.currentUser }`
  })
 }
}

// user logout controller
const logout =async (req, res) => {
  try {
  if (!req.session.currentUser) {
    return res.status(401).json({
    message: 'No user to log out!'
  })
} else {
  await req.session.destroy();
  res.status(200).json({
    status:200,
    message: "Logged out"
  })
 }
}catch (err){
  return res.status(500).json({
    status: 500,
    message: err
    
  })
}
}


module.exports = {
  get_register,
  register, 
  login,
  verify,
  logout
}