export const JsonResponse=(su: boolean, message: string,statusCode: number )=>{
    return Response.json({success, message},{status: statusCode})
}