interface NavLinkTypes {
    type: String;
    clickFunction: Function;
    focused: boolean;
}

export default function NavLink({ type, clickFunction, focused }: NavLinkTypes) {

    function clickFunctionWrapper(type: String) {
        if (typeof clickFunction !== 'function') return;

        clickFunction(type);
    }

    return (
        <div className={`navItem centered${focused ? ' focused' : ''}` }onClick={() => { clickFunctionWrapper(type); }}>
            {type}
        </div>
    )
}