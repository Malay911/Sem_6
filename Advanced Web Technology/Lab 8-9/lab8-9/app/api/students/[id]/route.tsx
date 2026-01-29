export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    return Response.json({
        message: `Fetched details for student ID: ${id}`,
        student: { id, name: `Student ${id}`, age: 20 + parseInt(id) }
    });
}