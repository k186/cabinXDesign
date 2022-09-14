import React from 'react';
import clsx from 'clsx';
import style from './styles.modules.scss'

export default function Index(props) {
  const {url, height = 300} = props;
  /*todo pc 和移动端demo如何切换*/
  const onIframeLoad = function () {
  
  }
  const openUrl = function (url) {
    window.open(url)
  }
  return (
    <div className={clsx(style.docsDemoDevice)}>
      <iframe
        className={clsx(style.docsDemoIframe)}
        src={url}
        loading="lazy"
        onLoad={onIframeLoad}
        importance="low"
        height={height + 'px'}
        width="100%"
      />
      <div className={clsx(style.docsDemoGo)} onClick={() => {openUrl(url)}}>查看</div>
    </div>
  )
}
