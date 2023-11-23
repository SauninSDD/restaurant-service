import React from 'react';
import {Avatar, Menu, MenuProps} from 'antd';
import {useDispatch} from "react-redux";
import {AntDesignOutlined, AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const AccountPage = () => {
    const dispatch = useDispatch();

    const items: MenuItem[] = [
        getItem('Достижения', 'sub1', <AppstoreOutlined/>),
        getItem('Новости', 'sub2', <MailOutlined/>),
        getItem('Настройки', 'sub3', <SettingOutlined/>),
    ];

    function getItem(
        label: React.ReactNode,
        key?: React.Key | null,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
    };

    return (
        < >
            <Avatar
                size={100}
                icon={<AntDesignOutlined/>}
                style={{marginTop: 10}}
            />
            <Menu onClick={onClick} style={{width: 256, marginLeft: -40}} mode="vertical" items={items}/>
        </>
    );
};

export default AccountPage;