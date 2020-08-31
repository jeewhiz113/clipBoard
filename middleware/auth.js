//add a piece of middleware to privatize selected routes, notice this does not have anything to do with the front end other than the question: does the request have a piece of token attached or not?

//get the token from the front end that got send along.
function auth(req, res, next){
  const token = req.header('x-auth-token');  //get token from header of the request.

  if (!token){
    return res.status(401).json({msg: 'No token, authorization denied.'}) //401 is the unauthorization error code.

  }
  try{
    //verify token
    const decoded = jwt.verify(token, "myjwtsecret");
    console.log("Back end, here is what is in the token (Should just be the user id)", decoded);

    //add user from payload
    req.user = decoded;  //add a user property in the req object;
    next();
  }catch(e){
    res.status(400).json({msg: 'Token is not valid'})
  }
}

module.exports = auth;

//This now can be added to routes such as adding questions, deleting questions, also loading questions routes.