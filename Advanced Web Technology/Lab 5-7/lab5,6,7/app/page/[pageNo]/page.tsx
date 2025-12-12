export default async function PageNo({ params }: { params: { pageNo: string } }) {
    const {pageNo}=await params;
    const page=parseInt(pageNo);
  
    const recordsPerPage = 10;
  
    const startIndex=(page-1)*recordsPerPage+1;
    const endIndex=page*recordsPerPage;
  
    return (
      <div className="container" style={{ maxWidth: "500px" }}>
        <h1>Page No: {page}</h1>
        <p>
          <strong>Start Index:</strong> {startIndex}
        </p>
        <p>
          <strong>End Index:</strong> {endIndex}
        </p>
      </div>
    );
}