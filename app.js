const http = require("http");
const home = require("./views/home.js");
const student = require("./views/student.js");

const PORT = 3000;

function requestListener(request, response) {
    const { url, method } = request;
    console.log(`Server is running on ${PORT}`);
    if (url === "/") {
        response.setHeader("Content-Type", "text/html");
        response.write("<html>");
        response.write("<head><title>My second Node App</title></head>");
        response.write(`
        <body>
            <form action="/home" method="">
                <button>home</button>
            </form>
            <form action="/student" method="POST">
                <button>Student</button>
            </form>
        </body>
        `);
        response.write("</html>");
        return response.end();
    } else if (url === "/student" && method === "POST") {
        let body = "";
        request.on("data", (chunk) => {
            body += chunk.toString(); 
        });
        request.on("end", () => {
            response.writeHead(302, { Location: "/student" });
            response.end();
        });
    }
    else if (url === "/student") {
        student.renderPage(response);
    }
    else if (url === "/home") {
        home.renderPage(response);
    }
    
    else {
        response.write("<html>");
        response.write("<head><title>Blad</title></head>");
        response.write(`
        <body>
            404 Not Found
        </body>
        `);
        response.write("</html>");
        return request.on("end", () => {
            response.statusCode = 404;
            response.setHeader("Location", "/");
            response.setHeader("Content-Type", "text/html");
            response.end();
        })
    }
}

const server = http.createServer(requestListener);

server.listen(PORT);
