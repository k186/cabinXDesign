import React from 'react';
import clsx from 'clsx';

export default function Index(props) {
  const {url, height} = props;
  /*todo pc 和移动端demo如何切换*/
  const onIframeLoad=function (){
  
  }
  return (
    <div className={`docs-demo-device`}>
      <iframe
        src={url}
        loading="lazy"
        onLoad={onIframeLoad}
        importance="low"
      />
    </div>
  )
}
