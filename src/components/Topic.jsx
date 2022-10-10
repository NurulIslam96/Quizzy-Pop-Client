
const Topic = ({ topic }) => {
    const { name, id, logo, total } = topic;
    return (
        <div className=" flex md:p-2">
            <img className="" width={220} src={logo} alt={name} />
            <div className="">
                <p className="text-2xl font-semibold">{name}</p>
                <p className="">Number of Quizes: {total}</p>
                <button className="bg-green-500 text-white px-3 py-2 rounded-md">Practice</button>
            </div>
        </div>
    );
};

export default Topic;