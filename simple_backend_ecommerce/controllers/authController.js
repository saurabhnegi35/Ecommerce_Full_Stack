// Importing the User model
const User = require("../models/User");

exports.register = async (req, res) => {
  const { email, businessName, password, confirmPassword } = req.body;

  if (!email || !businessName || !password || !confirmPassword) {
    return res.status(422).json({ error: "Please Fill the Fields Properly" });
  }

  try {
    // Check if user already exists with the provided phone number
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(422).json({ error: "User already exists" });
    }

    const user = new User({
      email,
      businessName,
      password,
    });

    const newUser = await user.save();
    // console.log(newUser);
    const data = {
      businessName: newUser.businessName,
      email: newUser.email,
      _id: newUser._id,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    };

    res.status(201).json({ data, message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  // Extracting email and password from the request body
  const { email, password } = req.body;

  try {
    // Finding the user with the given email
    const user = await User.findOne({ email });

    // Checking if the user exists
    if (!user) {
      // Sending an error response if the user does not exist
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Checking if the password is correct
    const isMatch = password === user.password;

    if (!isMatch) {
      // Sending an error response if the password is incorrect
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const data = {
      businessName: user.businessName,
      email: user.email,
      _id: user._id,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    res.status(200).json({
      data,
      // Sending a success response with a message
      message: "Logged In Successfully",
    });

    // If the credentials are valid, you can redirect the user to their respective dashboard page
    // res.redirect("/dashboard"); // Replace "/dashboard" with the actual URL of the dashboard page
  } catch (err) {
    // Sending an error response if there is a problem with finding the user or comparing the password
    res.status(500).json({ message: err.message });
  }
};
