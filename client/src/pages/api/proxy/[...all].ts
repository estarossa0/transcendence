import { getAccessToken } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

export const config = {
  api: {
    externalResolver: true,
  },
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await getAccessToken(req, res, {
    authorizationParams: {
      audience: process.env.AUTH0_AUDIENCE || "",
    },
    scopes: ["openid", "profile"],
  }).catch(() => null);

  httpProxyMiddleware(req, res, {
    headers: response
      ? {
          Authorization: `Bearer ${response.accessToken}`,
        }
      : {},
    pathRewrite: [
      {
        patternStr: "^/api/proxy",
        replaceStr: "",
      },
    ],
    target: process.env.API_URL || "",
    ws: true,
  });
}

export default handler;
