import React from 'react';
import clsx from 'clsx';
import styles from './styles.modules.scss';
import tabConfig from './tabConfig.json';

import Link from '@docusaurus/Link';


export default function DocContentTabs(props) {
    const {tabCode, title, description} = props
    return (
        <>
            <div className={clsx('row', styles.tabs)}>
                <div className={clsx(styles.tabHead)}>{title}</div>
                <div className={clsx(styles.tabDesc)}>{description}</div>
            </div>
            <div className={clsx('row',styles.tabBox)}>
                {tabConfig.map((el) => {
                    return (<div key={el.code}
                                 className={clsx(styles.tabItem, el.code === tabCode ? styles.active : '')}><Link
                        to={`./${el.code}`}>{el.label}</Link></div>)
                })}
            </div>
        </>
    )
}
