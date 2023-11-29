import './style.css'

const Header = ({updatePage}) => {
    return (
        <header>
            <ul className='header-list'>
                <li onClick={() => updatePage(1)}>useState</li>
                <li onClick={() => updatePage(2)}>useEffect</li>
                <li onClick={() => updatePage(3)}>useRef</li>
                <li onClick={() => updatePage(4)}>useMemo</li>
            </ul>
        </header>
    )
};

export default Header;