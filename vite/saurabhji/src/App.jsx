import Collage from "./component/Collage";

const Student={
    "Rollno":4664,
    "Name":"Saurabh Mishra",
    "City":"Bhopal",
    "Fees":50000
}
const App=()=>{
    return(
        <>
         <h1 align="center">Welcome To Student Data..............!</h1>
         <Collage rno={Student.Rollno} nm={Student.Name} ct={Student.City} fs={Student.Fees} />
        </>
    )
}
export default App;