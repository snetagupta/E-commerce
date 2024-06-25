import categories from "../Data/Categories";


const Categories = () =>{
    return(
        <>
        <div className="px-20 py-6 flex items-center justify-between flex-wrap">
        {categories.map((category,index) =><div key={index}>
            <img className="w-[120px]" src={category.image}/>
            
        </div>)}
        </div>
        </>
    )
}
export default Categories