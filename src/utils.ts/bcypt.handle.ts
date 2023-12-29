import bcrypt from "bcryptjs";

export const encrypt = async (password: any) => {
  try {
    if (!password) {
      throw new Error("Password is undefined");
    }

    const passworBash = await bcrypt.hash(password, 10);
    return passworBash;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw new Error("Error hashing password");
  }
};

export const verified = async (pass: string, secondPass: string) => {
  const isMatch = await bcrypt.compare(pass, secondPass);
  return isMatch;
};
