import React from 'react';
import { Accordion } from '../Accordion/Accordion';

const SidebarItem = ({ item }: any) => {
    return (
        <li className="px-3 py-5">
            {item?.children ? (
                <Accordion title={item.title}>
                    <ul className="font-thin space-y-5 pl-3 pr-1">
                        {item.children.map((child: any, index: number) => (
                            <li
                                key={index}
                                className="flex justify-between cursor-pointer select-none"
                                onClick={() => child?.callback()}
                            >
                                {child.title}
                                {child?.icon && child.icon}
                            </li>
                        ))}
                    </ul>
                </Accordion>
            ) : (
                <div
                    className="flex justify-between items-center cursor-pointer select-none"
                    onClick={() => item?.callback()}
                >
                    {item.title}
                    {item?.icon && item.icon}
                </div>
            )}
        </li>
    );
};

export default SidebarItem;
