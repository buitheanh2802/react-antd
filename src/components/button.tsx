import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined  } from '@ant-design/icons'

const ButtonComponent = () => {
    return (
        <React.Fragment>
            <Button type='default'>Title</Button>
            <Button type='primary'>Title</Button>
            <Button type='dashed'>Title</Button>
            <Button type='ghost'>Title</Button>
            <Button type='link'>Title</Button>
            <Button type='text'>Title</Button>
            <Button disabled={true} type='primary'>Title</Button>
            <Button ghost={true} type='primary'>Title</Button>
            <Button danger size='middle' type='primary'>Title</Button>
            <Button size='middle' shape='round' htmlType='submit' type='primary'>Title</Button>
            <Button size='middle' loading={true} disabled={true} htmlType='submit' type='primary'>Title</Button>
            <Button icon={<DownloadOutlined />} type='primary'>Title</Button>
        </React.Fragment>
    );
};

export default ButtonComponent;