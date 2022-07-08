export default class LoguinRequest {
    static base_url = "https://blog-m2.herokuapp.com/users/login"
    
    static async loguin (loguinData){
        return await fetch(this.base_url,{
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(loguinData),
        })
        .then(res => res.json())
        .then((res) => {
            console.log(res)
            if(!res.message){
                localStorage.setItem("@kenzie-blog:user",JSON.stringify(res.userId))
                localStorage.setItem("@kenzie-blog:token",JSON.stringify(res.token))
                window.location.href="homePage.html"
            }else{
                alert(res.message)
            }
        })
        .catch(err => console.log(err))
    }
}