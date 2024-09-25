import data from '@/utils/teamsdata/teams.json';


export async function GET(req: Request) {
    // console.log(req.method);
    // console.log(req.url);
    // console.log("data",data.data);
    return Response.json({
        content: JSON.stringify(data.data),
        headers: {
            "content-type": "text/plain",
        },
        status: 200,
        statusText: "Get request successful!",
    });
}
