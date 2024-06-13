import { data } from '@/utils/projects/projects_data.json';

export async function GET(req: Request) {
    console.log(req.method);
    console.log(req.url);
    return Response.json({
        content: JSON.stringify(data),
        headers: {
            "content-type": "text/plain",
        },
        status: 200,
        statusText: "Get request successful!",
    });
}
