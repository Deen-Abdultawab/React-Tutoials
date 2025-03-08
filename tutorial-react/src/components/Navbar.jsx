import logoImg from '../assets/images/logo.svg'
import { 
    pageLinks, 
    socialLinks 
} from '../utils/data';

export const Navbar = ()=>{
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                <img src={logoImg} className="nav-logo" alt="backroads" />
                <button type="button" className="nav-toggle" id="nav-toggle">
                    <i className="fas fa-bars"></i>
                </button>
                </div>
                <ul className="nav-links" id="nav-links">
                    {
                        pageLinks.map((pageLink)=>{
                            return (
                                <li key={pageLink.id}>
                                    <a href={pageLink.href} key={pageLink.id} className="nav-link"> { pageLink.text} </a>
                                </li>
                            )
                        })
                    }
                </ul>
    
                <ul className="nav-icons">
                    {
                        socialLinks.map((link)=>{
                            return (
                                <li key={link.id}>
                                    <a href={link.href} target="_blank" className="nav-icon"
                                    ><i className={link.icon}></i
                                    ></a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    );
};