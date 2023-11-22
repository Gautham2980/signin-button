function Array(props){
    const {details}=props;
    const store=details.map((e,i)=>{
        return(
            <ul>
                <li>{e.name}</li>
                <li>Skills-Name:{e.skills[0].name} ,Skills-type:{e.skills[0].name}</li>
                <li>Skills-Name:{e.skills[1].name} ,Skills-type:{e.skills[1].name}</li>
            </ul>
        )
    })
    return(
        <div>
            {store}
            

        </div>
    )
}

export default Array;