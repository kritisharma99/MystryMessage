export const JsonResponse=(smessage: string,statusCode: number, )=>{
    return Response.json({},{status: statusCode})
}