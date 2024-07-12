export const JsonResponse=(message: string,statusCode: number, )=>{
    return Response.json({},{status: statusCode})
}