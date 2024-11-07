import { useState } from "react"


export default function Home() {
  const [ name , setName ] = useState("")

  const postHandler = async()=>{
    const res = await fetch("/api/data",{
      method: "POST",
      body: JSON.stringify({name}),
      headers: {"Content-Type":"application/json"}
    })
    const data = await res.json()
    console.log(data);
  }
  return (
    <div>
      <h1>Connecting DataBase to Next.js Project</h1>
      <input value={name} placeholder="Enter Name" onChange={e => setName(e.target.value)} />
      <button onClick={postHandler}>POST</button>
    </div>
  )
}
