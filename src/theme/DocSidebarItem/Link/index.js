import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {isActiveSidebarItem} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import styles from './styles.module.css';

/* rewrite active logic*/

export function isSamePath(path1 = undefined, path2 = undefined,) {
    const normalize = (pathname = undefined) =>
        (!pathname || pathname.endsWith('/')
                ? pathname
                : `${pathname}/`
        )?.toLowerCase();
   const subStr=(str)=> str.substring(0,str.lastIndexOf('/'))
    return normalize(subStr(path1)) === normalize(subStr(path2));
}

const isActive = (testedPath = 'undefined', activePath) => typeof testedPath !== 'undefined' && isSamePath(testedPath, activePath);

const containsActiveSidebarItem = (items, activePath,) => items.some((subItem) => isActiveSidebarItem(subItem, activePath));

export function isActiveSidebarItemCustom(item, activePath,) {
    if (item.type === 'link') {
        return isActive(item.href, activePath);
    }

    if (item.type === 'category') {
        return (
            isActive(item.href, activePath) ||
            containsActiveSidebarItem(item.items, activePath)
        );
    }

    return false;
}

/* rewrite active logic end*/
export default function DocSidebarItemLink({item, onItemClick, activePath, level, index, ...props}) {
    const {href, label, className, type} = item;

    const isActive = type === 'link' ? isActiveSidebarItemCustom(item, activePath) : isActiveSidebarItem(item, activePath);
    const isInternalLink = isInternalUrl(href);
    return (
        <li
            className={clsx(
                ThemeClassNames.docs.docSidebarItemLink,
                ThemeClassNames.docs.docSidebarItemLinkLevel(level),
                'menu__list-item',
                className,
            )}
            key={label}>
            <Link
                className={clsx(
                    'menu__link',
                    !isInternalLink && styles.menuExternalLink,
                    {
                        'menu__link--active': isActive,
                    },
                )}
                aria-current={isActive ? 'page' : undefined}
                to={href}
                {...(isInternalLink && {
                    onClick: onItemClick ? () => onItemClick(item) : undefined,
                })}
                {...props}>
                {label}
                {!isInternalLink && <IconExternalLink/>}
            </Link>
        </li>
    );
}
