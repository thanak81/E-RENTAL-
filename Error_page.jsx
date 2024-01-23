import { useRouteError } from "react-router-dom";

function Error_page() {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="error-page">
            <h1>Opps! hehehe </h1>
            <h1>An Error has occurs.</h1>
            <p>
                <i>Error: {error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default Error_page
