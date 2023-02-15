import React,{useState} from 'react'

const Register = () => {

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [phno, setPhno] = useState("");
    const [error,setError]=useState(null)

    const handleSubmit = async (e) => {
      e.preventDefault();

      const user = { fname,lname,email,gender,phno };

      const response = await fetch("/api/user/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
      }

      if (response.ok) {
        setFname("");
        setLname("");
        setEmail("");
        setGender("")
        setPhno("")
        setError(null);
        console.log("new user added", json);
      }
    };

 return (
   <form action="" onSubmit={handleSubmit}>

    <h3>Form</h3>


     <label htmlFor="">First Name:</label>
     <input
       type="text"
          onChange={(e) => setFname(e.target.value)}
          value={fname}
     />

     <label htmlFor="">Last Name:</label>
     <input
       type="text"
          onChange={(e) => setLname(e.target.value)}
          value={lname}
     />

     <label htmlFor="">Email:</label>
     <input
       type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
     />

     <label htmlFor="">Gender:</label>
     <input
       type="text"
          onChange={(e) => setGender(e.target.value)}
          value={gender}
     />

     <label htmlFor="">Phone Number:</label>
     <input
       type="number"
          onChange={(e) => setPhno(e.target.value)}
          value={phno}
     />

    <br />

     <button>Submit</button>

     {error && <div>{error}</div>}
   </form>
 );
}

export default Register
