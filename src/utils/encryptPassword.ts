import bcrypt from 'bcrypt';

// Número de veces que se ejecutará el algoritmo de hashing
const saltRounds = 10;

// Función que encripta la contraseña
export const encryptPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};