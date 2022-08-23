import React from 'react';
import {HtmlClassNameProvider} from '@docusaurus/theme-common';
import {DocProvider} from '@docusaurus/theme-common/internal';
import DocItemMetadata from '@theme/DocItem/Metadata';
import DocItemLayout from '@theme/DocItem/Layout';
import DocContentTabs from '@components/global/DocContentTabs'
export default function DocItem(props) {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.unversionedId}`;
  const MDXComponent = props.content;
  const {metadata, frontMatter} = MDXComponent;
  const {
    title,
    description,
    //#region ------- CUSTOM CODE --------
    tabCode
    //#endregion
  } = frontMatter;
  MDXComponent.frontMatter.hide_title=true
  return (
    <DocProvider content={props.content}>
      {tabCode&&<DocContentTabs tabCode={tabCode} title={title} description={description}/>}
      <HtmlClassNameProvider className={docHtmlClassName}>
        <DocItemMetadata />
        <DocItemLayout>
          <MDXComponent />
        </DocItemLayout>
      </HtmlClassNameProvider>
    </DocProvider>
  );
}
