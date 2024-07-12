export const JsonResponse=(statusCode)=>{
    return Response.json({},{status: statusCode})
}