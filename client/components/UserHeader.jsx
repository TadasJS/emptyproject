import { Link, useNavigate } from "react-router-dom";

export function UserHeader () {
    const navigate = useNavigate()


    return (       

        <>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
             <div className="col-md-3 mb-2 mb-md-0">
               <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                 {/* <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg> */}
               </a>
             </div>
       
             <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
             <Link to='/' type="text" className="nav-link px-2" >Home</Link>
             <Link to='/' type="text" className="nav-link px-2" >Puslapis1</Link>
             <Link to='/' type="text" className="nav-link px-2" >Puslapis2</Link>
             <Link to='/' type="text" className="nav-link px-2" >Puslapis3</Link>
             <Link to='/nopage' type="text" className="nav-link px-2" >NoPage</Link>
              
             </ul>
       
             <div className="col-md-3 text-end me-3">
               {/* <button type="button"  className="btn btn-outline-primary me-2">Register</button> */}
               <button type="button"  className="btn btn-outline-primary me-2">Logout</button>
               
             </div>
           </header>
           </>

    )
}
