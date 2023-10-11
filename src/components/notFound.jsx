import NotFoundImg from "./../img/NotFound.png"

const NotFound = () => {
    return (
        <div className="absolute">
            <img src={NotFoundImg} alt="Not Found" />
        </div>
    )
};

export default NotFound;