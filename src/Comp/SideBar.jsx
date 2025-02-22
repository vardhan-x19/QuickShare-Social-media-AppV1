
import styles from "./SideBar.module.css";
function SideBar({setItems,item}) {
    return <>
    <div className={`d-flex flex-column flex-shrink-0 p-3 bg-light sidebar ${styles.sidebar}`}style={{width:"20vw"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">QuickPost</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" onClick={()=>{setItems("Home")}}>
      <a href="#" className={`nav-link ${item === 'Home' ? 'active' : ''}`} aria-current="page">
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li  onClick={()=>setItems("PostList")}>
        <a href="#" className={`nav-link ${item === 'PostList' ? 'active' : ''}`}>
          <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          PostList
        </a>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2" >
        <li><a className="dropdown-item">New project...</a></li>
        <li><a className="dropdown-item">Settings</a></li>
        <li><a className="dropdown-item">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    </>
}
export default SideBar;