const fetch = require('node-fetch');
const fs = require('fs');

const path = require('path');

/**
 *
 * This script will create the autogenerated MDX files for each component.
 *
 * Creates files for:
 * - Props
 * - Events
 * - Methods
 * - Slots
 * The auto-generated directory & files should be gitignored, since they are created from the published core.json
 * and should never be edited manually.
 */

(function (){
  const response = await fetch('https://unpkg.com/@ionic/docs/core.json');
  const { components } = await response.json();
  
  const names = components.map((component) => component.tag.slice(4));
  // matches all relative markdown links to a component, e.g. (../button)
  COMPONENT_LINK_REGEXP = new RegExp(`\\(../(${names.join('|')})/?(#[^)]+)?\\)`, 'g');
  
  components.forEach((comp) => {
    const compTag = comp.tag.slice(4);
    writeAutoGeneratedPage(compTag, 'props', renderProperties(comp));
    writeAutoGeneratedPage(compTag, 'events', renderEvents(comp));
    writeAutoGeneratedPage(compTag, 'methods', renderMethods(comp));
    writeAutoGeneratedPage(compTag, 'parts', renderParts(comp));
    writeAutoGeneratedPage(compTag, 'custom-props', renderCustomProps(comp));
    writeAutoGeneratedPage(compTag, 'slots', renderSlots(comp));
  });
})();

/**
 * Formats line breaks in a multiline string to be displayed in a table.
 * @param {*} str The string to format
 * @returns The formatted string
 */
function formatMultiline(str) {
  return str.split('\n\n').join('<br /><br />').split('\n').join(' ');
}
