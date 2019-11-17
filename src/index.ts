export class CorsWorker {
  corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods":
      "GET, HEAD, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  }

  addCors(res: Response): Response {
    const response = new Response(res.body, res)
    response.headers.set("Access-Control-Allow-Origin", "*")
    return response
  }

  handleOptions(req: Request): Response {
    const headers = req.headers

    const addCors =
      headers.get("Origin") !== null &&
      headers.get("Access-Control-Request-Method") !==
        null &&
      headers.get("Access-Control-Request-Headers") !== null

    return new Response(null, {
      headers: addCors
        ? this.corsHeaders
        : { Allow: "GET, HEAD, POST, OPTIONS" },
    })
  }
}

export default new CorsWorker()
