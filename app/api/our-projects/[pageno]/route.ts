import { data } from '@/utils/projects/projects_data.json';

export async function GET(req:Request){
    const params = req.url.split("/").slice(3);
    // console.log("params",params);
    // get project_id from params
    const pageno = parseInt(params[2]);
    if(!pageno){
        return Response.json({
            content: "Page number not found",
            headers: {
                "content-type": "text/plain",
            },
            status: 404,
            statusText: "Page number not found",
        });
    }
    // console.log("pageno",pageno);
    // find projects by pageno means from data show only projects whose id is between 12*(pageno-1) and 12*pageno 
    // console.log("data",data);
    const projects = data.filter((project:any) => project.id > 12*(pageno-1) && project.id <= 12*pageno);
    if(!projects){
        return Response.json({
            content: "Projects not found",
            headers: {
                "content-type": "text/plain",
            },
            status: 404,
            statusText: "Projects not found",
        });
    }
    // console.log("projects",projects);
    // return project
    // return Response.json(projects);
    return Response.json({
        content: JSON.stringify(data),
        totallength: data.length,
        headers: {
            "content-type": "text/plain",
        },
        status: 200,
        statusText: "Get request successful!",
    });
}
