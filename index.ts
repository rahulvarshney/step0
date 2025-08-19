function handler(_req: Request): Promise<Response> {
    const postRequest = new Request("https://api.forwardemail.net/v1/emails", {
        method: "POST",
//        method: "GET",
        headers: {
   //         "Content-Type": "application/x-www-form-urlencoded",
            "Content-Type": "multipart/form-data",

            "Authorization": "Basic OWRhOTZjZmI5OGU1ZWIxOWMwYjA0ODUxOg=="

        },
        body: "from=step0%40740bsecure.com&to=669bluejay%40gmail.com&subject=0.0.2&text=CLOSE",
    });

    // Make the POST request and return its response
    return fetch(postRequest);
}

Deno.serve(handler);