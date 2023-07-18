
function ErrorPage() {

    return (
        <>
            <div id="error-page">
                <h1 className="flex w-full justify-center text-black font-medium text-3xl">Oops!</h1>
                <p
                    className="flex w-full justify-center text-black font-medium text-3xl">
                    Sorry, an unexpected error has occurred.</p>
                <p>
                    {/* <i>{error.statusText || error.message}</i> */}
                </p>
            </div>
        </>
    );
}

export default ErrorPage