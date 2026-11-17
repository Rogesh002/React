import { useRouteError} from 'react-router-dom'

let ErrorHandler = ()=>{
    let error = "Opps!Something went Wrong";
    console.log(useRouteError());
    let routeError = useRouteError();
    return (
        <div>
            <h1>{error}</h1>
            <h3>{routeError.status+" "+ routeError.statusText+ " "+ routeError.data}</h3>
        </div>
    )
}

export default ErrorHandler;