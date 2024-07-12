export const JsonResponse=(message: stringstatusCode: number, )=>{
    return Response.json({},{status: statusCode})
}