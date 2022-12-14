import React, {memo} from 'react';
import {DocSidebarItemsExpandedStateProvider} from '@docusaurus/theme-common/internal';
import DocSidebarItem from '@theme/DocSidebarItem';
// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems({items, ...props}) {
    return (
        <DocSidebarItemsExpandedStateProvider>
            {items.map((item, index) => {
                /* 零时处理 */
                if (item.type === 'link') {
                    const idArray = item.docId.split('/')
                    if (idArray[0] === 'components') {
                        if (['style', 'props'].indexOf(idArray[idArray.length - 1]) > -1) {
                           return null
                        }
                    }
                    if(idArray[0]==='intro'){
                        return  null
                    }
                }
                return (
                    <DocSidebarItem key={index} item={item} index={index} {...props} />
                )
            })}
        </DocSidebarItemsExpandedStateProvider>
    );
}

// Optimize sidebar at each "level"
export default memo(DocSidebarItems);
