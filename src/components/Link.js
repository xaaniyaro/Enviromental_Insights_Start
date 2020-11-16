import React from 'react';
import './Link.css';

const Link = ({ className, href, children}) =>{
    const onClick = (event) =>{

        if(event.metaKey || event.ctrlKey){
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);

        //communicate that the route has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return(
        <div>
            <a className={className} onClick={onClick} href={href}>{children}</a>
        </div>
    );
}

export default Link;