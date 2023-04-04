function NameList(){
    const myList= ['navya','minnu','saketh'];
    const listItems= myList.map((LI,index) => 
    <li key={index}>{LI}</li>
    );
    return(
        <>
        <h4>persons in list :</h4>
        <ol>{listItems}</ol>
        </>
    )
}

export default NameList;