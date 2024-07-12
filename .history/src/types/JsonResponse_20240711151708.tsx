export const JsonResponse=(statusCode: numner)=>{
    return Response.json({},{status: statusCode})
}