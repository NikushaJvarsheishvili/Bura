import {
  registerUser,
  loginUser,
  getCurrentUserById,
} from "../services/auth.service.js";
import { generateToken, getCookieOptions } from "../utils/generateToken.js";

export async function register(req, res, next) {
  try {
    const { username, email, password } = req.body;

    const user = await registerUser({
      username: username?.trim(),
      email: email?.trim().toLowerCase(),
      password,
    });

    const token = generateToken(user._id.toString());

    res.cookie("token", token, getCookieOptions());

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        status: user.status,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await loginUser({
      email: email?.trim().toLowerCase(),
      password,
    });

    const token = generateToken(user._id.toString());

    res.cookie("token", token, getCookieOptions());

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        status: user.status,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function me(req, res, next) {
  try {
    const user = await getCurrentUserById(req.userId);

    res.status(200).json({
      user,
    });
  } catch (error) {
    next(error);
  }
}

export async function logout(req, res, next) {
  try {
    const cookieOptions = getCookieOptions();

    res.clearCookie("token", {
      httpOnly: cookieOptions.httpOnly,
      secure: cookieOptions.secure,
      sameSite: cookieOptions.sameSite,
    });

    res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    next(error);
  }
}
