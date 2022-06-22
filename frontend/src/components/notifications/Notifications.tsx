import NotificationItem from './NotificationItem';
import { genId } from '../../utils';

export interface INotificationItem {
    id: string;
    title: string;
    description: string;
}

const Notifications = () => {
    const notifications: INotificationItem[] = [
        {
            id: genId(),
            title: 'Reclamo - Gral Paz 240',
            description: 'El reclamo generado en el domicilio fue solucionado por el Técnico Juan Jose Juarez',
        },
        {
            id: genId(),
            title: 'Alquiler - Falucho 1522',
            description: 'El alquiler de la propiedad fue rescindido',
        },
        {
            id: genId(),
            title: 'Reclamo - Gral Paz 240',
            description: 'El reclamo generado en el domicilio fue solucionado por el Técnico Juan Jose Juarez',
        },
    ];
    return (
        <div className="container fixed w-full lg:w-1/4 h-1/2 md:h-1/3 z-30 lg:right-48 top-16 shadow-2xl bg-bg-gradient-1 rounded px-3 overflow-hidden overflow-y-scroll">
            <div className="p-2 font-bold text-lg text-blue-900 sticky">Notifications</div>
            <div className="flex flex-col overflow-hidden">
                {notifications.map((notif: INotificationItem) => (
                    <NotificationItem
                        key={notif.id}
                        id={notif.id}
                        title={notif.title}
                        description={notif.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Notifications;
