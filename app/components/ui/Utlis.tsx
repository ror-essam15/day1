export async function getDataSSR(link:string) {
    const res= await fetch (link,{
cache:"no-store",
    });
    return res.json();
}

export async function getDataSSG(link:string) {
    const res= await fetch (link,{
cache:"force-cache",
    });
    return res.json();
}

export async function getDataISR(link:string) {
    const res= await fetch (link,{
next:{
    revalidate: 50, //SEC
},
    });
    return res.json();
}