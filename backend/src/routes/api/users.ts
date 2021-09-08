import express from "express";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import User from "../../models/user";

const router = express.Router();

//@route    Post api/users
//@desc     Register new user
//@access   Public
router.post("/", (req, res) => {
  const { name, email, password, userType } = req.body;

  //Simple validation
  if (!name || !email || !password || !userType) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  if (!["tenant", "owner", "realEstate"].includes(userType)) {
    return res.status(400).json({ msg: "Invalid user type" });
  }

  //Check for existing user
  User.findOne({ email: email }).then((user) => {
    if (user) res.status(400).json({ msg: "User Already exists" });

    const newUser = new User({
      name,
      email,
      password,
      userType,
    });

    //Create salt & hash
    bcryptjs.genSalt(10, (err, salt) => {
      bcryptjs.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          //sign token
          jsonwebtoken.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  type: user.userType,
                },
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
