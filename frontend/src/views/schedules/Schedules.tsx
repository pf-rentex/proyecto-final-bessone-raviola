import { FaRegUserCircle, BiCalendarCheck, AiOutlineClockCircle } from 'react-icons/all';

const Schedules = () => {
    return (
        <section className="flex flex-col h-full min-h-screen w-full bg-gradient-to-b from-bg-gradient-3 to-bg-gradient-4 px-5 lg:px-20 py-10">
            <div className="flex bg-alt rounded w-full p-5 items-center">
                <div className="rounded-full bg-gray-300 p-3">
                    <FaRegUserCircle size={20} color="gray" />
                </div>

                <div className="flex flex-col px-10">
                    <p className="text-white font-bold text-xl">House by the beach</p>
                    <div className="flex space-x-5">
                        <div className="flex space-x-2 items-center">
                            <BiCalendarCheck className="text-primary" />
                            <p className="text-white font-extralight">17/08</p>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <AiOutlineClockCircle className="text-primary" />
                            <p className="text-white font-extralight">10:30 AM</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedules;
