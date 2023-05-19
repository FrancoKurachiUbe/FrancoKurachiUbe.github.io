export default ({Icons}) => {
    return(
  <div id="Skills" className="bg-skills pb-5 pt-5">
    <div className="container mt-5">
  
      <h2 className=" titulo  ">Skills</h2>
      <div className="border border-dark mx-4 mb-5 "></div>

      <div className="row pt-5">
    {
        Icons.map(icon =>
            <div key={icon.name} className="col col-md-2  text-center">
                <img className="skills  bg-light p-1 rounded-circle mb-2" src={icon.img} alt={icon.name} />
                <p className="">{icon.name}</p>
            </div>
        )    
    }
      </div>
    </div>
  </div>
    )
}