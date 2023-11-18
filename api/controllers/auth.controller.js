import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json("user telah berhasil ditambahkan");
  } catch (error) {
    next(error);
    // next(errorHandler(550, "some issues ")); handle error with costum message
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not Found!!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "wrong credential!!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const {password: pass , ...rest} = validUser._doc;
    res
      .cookie('acces_token', token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error)
  }
};
