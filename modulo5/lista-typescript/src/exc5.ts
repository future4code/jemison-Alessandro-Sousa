type USER = {
    name:string,
    email:string,
    role:string
}

const users:USER[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const func5 = (lista:USER[]):string[] => {
    const listaAdmin:string[] = lista
    .filter((user) => user.role==="admin")
    .map((user) => user.email)
return listaAdmin
}

console.table(func5(users))