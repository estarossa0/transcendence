import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
  async login(req, res) {
    try {
      await handleLogin(req, res, {
        authorizationParams: {
          audience: "http://localhost:3000/",
          scope: "openid profile email",
        },
      });
    } catch (error) {
      res.status(error.status || 400).end(error.message);
    }
  },
});
