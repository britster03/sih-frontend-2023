const backendUrl = "http://localhost:4000"
export const makeUnauthenticatedPOSTRequest = async (route,body) => {
    const response = await fetch(backendUrl+route,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body),
    });
    const formattedResponse = await response.json();
    return formattedResponse;
}