import { data } from '@/utils/projects/projects_data.json';

export async function GET(req: Request) {
    // get params from request
    const params = req.url.split("/").slice(3);
    // console.log("params",params);
    // get project_id from params
    const project_id = params[2];
    // find project by id
    const project = data.find((project) => project.id === parseInt(project_id));
    if(!project){
        return Response.json({
            content: "Project not found",
            headers: {
                "content-type": "text/plain",
            },
            status: 404,
            statusText: "Project not found",
        });
    }
    // console.log("project",project);
    // return project
    return Response.json(project);
    return Response.json({
        content: JSON.stringify(data),
        headers: {
            "content-type": "text/plain",
        },
        status: 200,
        statusText: "Get request successful!",
    });
}
