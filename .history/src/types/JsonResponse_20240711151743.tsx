export const JsonResponse=(isSucceed: boooleanmessage: string,statusCode: number, )=>{
    return Response.json({},{status: statusCode})
}