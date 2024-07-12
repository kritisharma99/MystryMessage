export const JsonResponse=(isSuccedmessage: string,statusCode: number, )=>{
    return Response.json({},{status: statusCode})
}