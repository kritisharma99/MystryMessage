export const JsonResponse=(isSucceed: boolean, message: string,statusCode: number )=>{
    return Response.json({success,},{status: statusCode})
}