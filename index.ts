function handler(_req: Request): Promise<Response> {
    const postRequest = new Request("https://api.forwardemail.net/v1/emails", {
        method: "POST",
        body: "from=support%40740bsecure.com&to=669bluejay%40gmail.com&subject=AJDLclub&text=party"
        headers: {
            "Content-Type": "x-www-form-urlencoded",
            "Authorization": "Basic OWRhOTZjZmI5OGU1ZWIxOWMwYjA0ODUxOg=="

        },
    });

    // Make the POST request and return its response
    return fetch(postRequest);
}

Deno.serve(handler);