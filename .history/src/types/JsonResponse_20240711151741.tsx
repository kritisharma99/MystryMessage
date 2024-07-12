export const JsonResponse=(isSucceed:message: string,statusCode: number, )=>{
    return Response.json({},{status: statusCode})
}