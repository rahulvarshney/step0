function handler(_req: Request): Promise<Response> {
    const postRequest = new Request("https://api.forwardemail.net/v1/emails/limit", {
        method: "GET",
       // body: JSON.stringify({ message: "Hello from Deno handler!" }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Basic OWRhOTZjZmI5OGU1ZWIxOWMwYjA0ODUxOg=='

        },
    });

    // Make the POST request and return its response
    return fetch(postRequest);
}

Deno.serve(handler);