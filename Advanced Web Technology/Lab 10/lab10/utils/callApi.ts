export default async function callApi(
    endpoint: string,
    method: string = "GET",
    revalidate: number = 0
){
    const dataTemp=await fetch(`https://67c3db4c89e47db83dd2a1c3.mockapi.io/${endpoint}`,{
        method,
        headers:{
            "Content-Type":"application/json",
        },
        next:{
            revalidate,
        },
    });

    const data=await dataTemp.json();
    return data;
}


export async function getbyId(endpoint: string, id: string) {
    const dataTemp = await fetch(
      `https://67c3db4c89e47db83dd2a1c3.mockapi.io/${endpoint}/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  
    const data = await dataTemp.json();
    return data;
  }