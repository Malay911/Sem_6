export default async function primes({ params }: { params: { start: string, end: string } }) {
    const { start, end } = await params;

    const primes=[]

    for(let i=parseInt(start);i<=parseInt(end);i++){
        let isPrime=true;
        for(let j=2;j<i;j++){
          if(i%j===0){
            isPrime=false;
            break;
          }
        }
        if(isPrime){
          primes.push(i);
        }
    }

    return (
        <div>
            <h1>Primes between {start} and {end} are : </h1>
            <ul>
                {primes.map((prime) => (
                    <li key={prime}>{prime}</li>
                ))}
            </ul>
        </div>
    );
}