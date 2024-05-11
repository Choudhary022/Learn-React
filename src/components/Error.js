import { useRouteError } from "react-router-dom"

const Error = () => {

    const routerError = useRouteError();

    return (
        <div>
            <h1>Oops!!!</h1>
            <h2>Something went wrong</h2>
            <h3>{routerError.status} : {routerError.statusText}</h3>
        </div>
    )
}

export default Error;