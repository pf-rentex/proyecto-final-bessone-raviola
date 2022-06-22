import { FaTimesCircle, FaExclamationCircle } from 'react-icons/fa';
import { INotificationItem } from './Notifications';

const NotificationItem = (notification: INotificationItem) => {
    return (
        <div className="flex flex-col px-4 py-2 my-1 min-h-64 shadow-md bg-bg-gradient-3 hover:bg-bg-gradient-11 rounded-md z-40 cursor-pointer">
            <div className="flex justify-between items-center ">
                <div className="flex items-center">
                    <FaExclamationCircle color="white" />
                    <p className="font-bold text-md text-white px-2">{notification.title}</p>
                </div>
                <div>
                    <FaTimesCircle size={20} className="text-red-600" />
                </div>
            </div>
            <div className="line-clamp-2 text-sm text-gray-100 w-3/4">{notification.description}</div>
            <div className="text-xs font-semibold text-gray-300 text-right py-1">1 hour ago</div>
        </div>
    );
};

export default NotificationItem;
