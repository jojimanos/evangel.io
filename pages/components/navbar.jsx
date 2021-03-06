import Link from "next/link";

function Navbar (props) {
            const {navbarsets} = props
        
            const {menu, settings, search} = navbarsets
        
        return (
            <div className="grid grid-cols-2 text-1xl pb-5 pt-1">
            <div><p className="text-left">
                <Link href="/">
                    <a className="">{menu}</a>
                </Link>
            </p>
            </div>
            <div className="grid grid-cols-3">
            <p className="text-center">
                <Link href="/">
                    <a className="">{settings}</a>
                </Link>
            </p>
            <p className="text-center">
                <Link href="/">
                    <a className="">{search}</a>
                </Link>
            </p>
            </div>
      </div>);
    }
 
export default Navbar;