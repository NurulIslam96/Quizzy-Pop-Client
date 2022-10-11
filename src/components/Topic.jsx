import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
    const { name, id, logo, total } = topic;
    return (
        <div className="md:p-5 bg-white shadow-slate-400 shadow-lg rounded-md">
            <img className="bg-blue-200 md:w-full rounded-md" src={logo} alt={name} />
            <div className="text-center justify-between">
                <div className="justify-center my-2 mx-2 select-none flex">
                    <div className="flex w-full items-end justify-between">
                        <p className="text-2xl font-semibold">{name}</p>
                        <p className="font-semibold text-slate-500">Questions: {total}</p>
                    </div>
                </div>
                <div className="justify-center mt-2 mb-2 select-none flex">
                    <button className="md:py-2 py-3 mx-2 w-full shadow-md no-underline rounded-md bg-slate-500 text-white font-sans font-semibold md:text-lg text-2xl border-blue hover:text-white hover:bg-slate-700 focus:outline-none active:shadow-none"><Link to={`/topics/${id}`}>Lets Practice</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Topic;