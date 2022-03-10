
const GetReq=async(url)=> {

    try{
        const res= await fetch(url,
            {
                method:"GET",credentials:'include',
                headers:{
                Accept:"application/json",
                'Content-Type':'application/json'
            }
        });
        const resJson= await res.json();
         return resJson

    } catch (err) {
        console.log(err);
        return {isError:true}
    } 
}
const Postreq= async(url,data)=>{

    try{
        const res= await fetch(url
        ,{
            method:"POST",credentials:'include',
            headers:{
                Accept:"application/json",
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        const resJson= await res.json();
        return resJson

    } catch(err){
        console.log(err);
        return {isError:tue}
    }

}

export {GetReq,Postreq};