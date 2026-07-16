interface NavLinkTypes {
    type: String;
    clickFunction: Function;
}

export default function NavLink({ type, clickFunction }: NavLinkTypes) {

    function clickFunctionWrapper(type: String) {
        if (typeof clickFunction !== 'function') return;

        clickFunction(type);
    }

    return (
        <div className='navItem centered' onClick={() => { clickFunctionWrapper(type); }}>
            {type}
        </div>
    )
}