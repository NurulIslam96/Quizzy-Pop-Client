
const Topic = ({ topic }) => {
    const { name, id, logo, total } = topic;
    return (
        <div className="md:p-5 shadow-green-300 shadow-lg rounded-md">
            <img className="bg-blue-100 md:w-full" src={logo} alt={name} />
            <div className="md:flex md:text-left text-center justify-between">
                <div className="justify-center my-2 select-none flex">
                    <div>
                        <p className="text-2xl font-semibold">{name}</p>
                        <p className="font-semibold">Number of Qs: {total}</p>
                    </div>
                </div>
                <div className="justify-center mt-5 mb-2 select-none flex">
                    <button class="py-2 px-4 shadow-md no-underline rounded-md bg-blue-500 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-700 focus:outline-none active:shadow-none">Primary</button>
                </div>
            </div>
        </div>
    );
};

export default Topic;