import NameList from "./NameList";

function Welcome (props){
    return <h3> hi {props.name}</h3>
}
function Apps (props){
   const NameList=["nav","siva"];
const Li= NameList.map((s)=><li>{s}</li>)

    return(
        <div>
            <ul>
                <Welcome name={[Li]}/>
            </ul>
            <Welcome name="krishna" />
            <Welcome name="babbi" />
            <Welcome name="siva" />
        </div>
    )
}
export default Apps;