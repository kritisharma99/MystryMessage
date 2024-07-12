export const JsonResponse=(statusCode: number, )=>{
    return Response.json({},{status: statusCode})
}