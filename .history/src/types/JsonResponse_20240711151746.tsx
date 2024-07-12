export const JsonResponse=(isSucceed: booolean, message: string,statusCode: number, )=>{
    return Response.json({},{status: statusCode})
}