import { getAccessToken } from "@auth0/nextjs-auth0";
import httpProxyMiddleware from "next-http-proxy-middleware";

async function handler(req, res) {
  const { accessToken } = await getAccessToken(req, res, {
    authorizationParams: {
      audience: process.env.AUTH0_AUDIENCE || "",
    },
    scopes: ["openid", "profile"],
  });

  return httpProxyMiddleware(req, res, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    pathRewrite: [
      {
        patternStr: "^/api/proxy",
        replaceStr: "",
      },
    ],
    target: process.env.API_URL || "",
  });
}

export default handler;
