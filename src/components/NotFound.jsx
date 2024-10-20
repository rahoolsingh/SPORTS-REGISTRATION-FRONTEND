const NotFound = () => {
    return (
        <div className="min-h-96 flex justify-center items-center">
            <div className="container mx-auto text-center py-12 ">
                <h1 className="text-4xl font-bold">
                    404 - This Route Does Not Exist!
                </h1>
                <p className="mt-4 text-lg">
                    Sorry, the page you're looking for does not exist.
                </p>
            </div>
        </div>
    );
};

export default NotFound;
