export const JsonResponse=(success: boolean, message: string,statusCode: number )=>{
    return Response.json({success, message},{status: statusCode})
}