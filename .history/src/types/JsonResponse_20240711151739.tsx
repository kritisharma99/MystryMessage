export const JsonResponse=(isSucceedmessage: string,statusCode: number, )=>{
    return Response.json({},{status: statusCode})
}