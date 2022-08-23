import React from 'react';
import clsx from 'clsx';
import styles from './styles.modules.scss';
import tabConfig from './tabConfig.json';
import img from './VCG211307103459.jpg';
import Link from '@docusaurus/Link';


export default function DocContentTabs(props) {
    return (
        <div className={clsx(styles.tabs)}>
            <img className={clsx(styles.tabsImg)} src={img} alt=""/>
            <div className={clsx(styles.tabBox)}>
                {tabConfig.map((el)=>{
                    return (<div key={el.code} className={clsx(styles.tabItem,el.code===props.tabCode?styles.active:'')}><Link to={`./${el.code}`}>{el.label}</Link></div>)
                })}
            </div>
        </div>
    )
}