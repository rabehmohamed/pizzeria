import { Link } from "react-router-dom"

function Button({children, disabled, to, type, onClick}) {
    const base = "inline-block text-sm bg-yellow-400 uppercase font-semibold text-stone-800 rounded-full hover:bg-yellow-300focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300"; 
    
    const styles = {
        primary: base + ' px-4 py-3 md:px-6 md:py-4',
        small : base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
        secondary : "inline-block text-sm border-2 border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 uppercase font-semibold text-stone-800 rounded-full hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-yellow-300",
        round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    }
    if(to) 
        return (
            <Link to={to} className={styles[type]}>{children}</Link>
        );

    if(onClick)
        return (
            <button onClick={onClick} disabled= {disabled} className={styles[type]}>
                {children}
            </button>
        );

    return (
        <button disabled= {disabled} className={styles[type]}>
            {children}
        </button>
    );
}

export default Button;
