import { createProxyMiddleware } from "http-proxy-middleware";

export default createProxyMiddleware({
  target: "https://v.redd.it",
  changeOrigin: true,
  secure: false,
  onProxyRes: function (proxyRes, req, res) {
    proxyRes.headers["Access-Control-Allow-Origin"] = "*";
  },
});
