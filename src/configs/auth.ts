export const authConfig = {
  jwt: {
    // Aqui estamos carregando o valor da variável de ambiente
    secret: process.env.AUTH_SECRET || "default",
    // Aqui estamos carregando o valor de expiração do nosso Token
    expiresIn: "1d",
  },
};
