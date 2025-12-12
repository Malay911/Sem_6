export default async function User({ params }: { params: { userId: string } }) {
    
    const {userId} = await params;
    return (
        <div>
            <h1>User {userId}</h1>
        </div>
    );
}