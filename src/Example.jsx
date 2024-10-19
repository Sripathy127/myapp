
export function Example(){

    const items=["1","2","3","4"];
    return(
<>
<h1>How are you</h1>
<p>This is a demo for learning</p>
<ul>
{items.map((item,index)=>(<li key={index}>{item}</li>))

}

</ul>
</>
    );
}

//export default Example;
