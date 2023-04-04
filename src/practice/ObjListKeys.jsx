function Objlists (){
    const arrObj= [
        {id:1,
        name:"babbi"},
        {id:2,
        name:"siva"},
        {id:3,
        name:"ram"},
        {id:4,
        name:"navya"}
    ];
     const filtered= arrObj.filter((s) =>s.name.includes("v"));
    
     let value=filtered.map(item=> <li>{item}</li>)
    return(
        <div>
            {/* <ol>{value}</ol> */}
            {/* <ul>{value}</ul> */}
            {/* {/* {arrObj.filter((value)=><li key={value.id}>{value.name.includes("v")}</li>)} */}
            {arrObj.map((value)=> <li key={value.id} >{value.name}</li>)}
        </div>
    );
}
 export default Objlists;