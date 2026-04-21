import bcrypt from "bcryptjs";
import User from "../models/User.js";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateUsername(username) {
  return /^[a-zA-Z0-9_]+$/.test(username);
}

export async function registerUser({ username, email, password }) {
  if (!username || !email || !password) {
    const error = new Error("Username, email and password are required");
    error.statusCode = 400;
    throw error;
  }

  if (username.length < 3 || username.length > 20) {
    const error = new Error("Username must be between 3 and 20 characters");
    error.statusCode = 400;
    throw error;
  }

  if (!validateUsername(username)) {
    const error = new Error(
      "Username can contain only letters, numbers and underscore",
    );
    error.statusCode = 400;
    throw error;
  }

  if (!validateEmail(email)) {
    const error = new Error("Invalid email format");
    error.statusCode = 400;
    throw error;
  }

  if (password.length < 6) {
    const error = new Error("Password must be at least 6 characters");
    error.statusCode = 400;
    throw error;
  }

  const existingUserByEmail = await User.findOne({ email });
  if (existingUserByEmail) {
    const error = new Error("Email already exists");
    error.statusCode = 409;
    throw error;
  }

  const existingUserByUsername = await User.findOne({ username });
  if (existingUserByUsername) {
    const error = new Error("Username already exists");
    error.statusCode = 409;
    throw error;
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    passwordHash,
  });

  return user;
}

export async function loginUser({ email, password }) {
  if (!email || !password) {
    const error = new Error("Email and password are required");
    error.statusCode = 400;
    throw error;
  }

  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  if (user.status === "blocked") {
    const error = new Error("Your account is blocked");
    error.statusCode = 403;
    throw error;
  }

  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
  if (!isPasswordValid) {
    const error = new Error("Invalid email or password");
    error.statusCode = 401;
    throw error;
  }

  user.lastSeenAt = new Date();
  await user.save();

  return user;
}

export async function getCurrentUserById(userId) {
  const user = await User.findById(userId).select("-passwordHash");

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  return user;
}
