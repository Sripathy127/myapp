
export const Student=(props)=>{
    return(
        <>
        <div className="student">
        <table>
    <tbody>
    <tr> 
    <th>Name</th>
    <td>{props.Name}</td>
    </tr>
    <tr> 
    <th>Age</th>
    <td>{props.Age}</td>
    </tr>
    <tr> 
    <th>Course</th>
    <td>{props.Course}</td>
    </tr>
    </tbody>
    
        </table>
        </div>
        </>
    );
    };
    //hi hello !!
    // This is testing purpose