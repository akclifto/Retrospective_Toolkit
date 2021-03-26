import { compare } from "bcrypt";
import userDAO from "../dao/user";

async function login(email, password) {
  // lookup user by email
  try {
    const user = await userDAO.findUserByEmail(email);

    const match = await compare(password, user.rows[0].password);

    if (match) {
      return { id: user.rows[0].id, roles: user.rows[0].role };
    }
    return Promise.reject(new Error("wrong username or password"));
  } catch (err) {
    return Promise.reject(new Error("user not found"));
  }
}

export default { login };
