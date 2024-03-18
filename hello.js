const http = require("http");

function requestListener(request, response) {
    const {url, method, headers} = request;
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head><title>My First Node Apppp!</title></head>");
    response.write("<body>Helo worlddd1!!1</body>");
    response.write("</html>");
    response.end();
    console.log("RequestListener", {
        //request,
        response,
        //url,
        //method,
        //headers
    });
}

const PORT = 3000;

const server = http.createServer(requestListener);

server.listen(PORT);
