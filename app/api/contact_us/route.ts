// import { data } from '@/utils/teamsdata/teams.json';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
    console.log("this has started");
    const data = await req.formData();
    // const data = {};
    console.log(data.get("firstname"));
    console.log(data.get("lastname"));
    console.log(data.get("email"));
    console.log(data.get("phone"));
    console.log(data.get("message"));
    
    // return data;
    // console.log(data);
    return Response.json({
        message: "Post request successful!",
        headers: {
            "content-type": "application/json",
        },
        status: 200,
        statusText: "Post request successful!",
    });
}


// export async function GET(req: Request) {
//     return new Response(JSON.stringify(data), {
//         headers: {
//             "content-type": "application/json",
//         },
//         status: 200,
//         statusText: "Get request successful!",
//     });
// }