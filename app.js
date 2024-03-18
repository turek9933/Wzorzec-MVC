
//strona to:
//localhost:3000
const http = require("http");
const fs = require("fs");
const PORT = 3000;


const server = http.createServer((request, response) => {
    const {url, method} = request;
    if (url === "/") {
        response.setHeader("Content-Type", "text/html");
        response.write("<html>");
        response.write("<head><title>My second Node App</title></head>");
        response.write(`
        <body>
            <form action="/message" method="POST">
                <input type="text" name="message">
                <button>Send</button>
            </form>
        </body>
        `);
        response.write("</html>");
        return response.end();
    }
    if (url === "/message" && method === "POST") {
        const body = [];
        request.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        return request.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFileSync("message.txt", message);
            console.log(parsedBody);
            response.statusCode = 302;
            response.setHeader("Location", "/");
            response.end();
        })
    }
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>My First Node Apppp!</title></head>");
    response.write("<body>Oh meeen, you have clicked a butten<br>lameeee</body>");
    response.write("</html>");
    response.end();
});

server.listen(PORT);