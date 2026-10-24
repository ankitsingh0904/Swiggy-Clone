const ExploreCuisines=(props)=>{
    const {data}=props;
    return (<div className="cuisines-cards">
         <h5>{data?.text}</h5>
    </div>)
}
export default ExploreCuisines;