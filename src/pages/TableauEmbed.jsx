import React, { useEffect, useRef } from 'react';

function TableauEmbed() {
  const containerRef = useRef(null);

  useEffect(() => {
    const divElement = containerRef.current;
    const vizElement = divElement.getElementsByTagName('object')[0];

    if (divElement.offsetWidth > 1000) {
      vizElement.style.width = '100%';
      vizElement.style.height = `${divElement.offsetWidth * 1.0}px`;
    } else if (divElement.offsetWidth > 700) {
      vizElement.style.width = '100%';
      vizElement.style.height = `${divElement.offsetWidth * 1.2}px`;
    } else {
      vizElement.style.width = '100%';
      vizElement.style.height = (divElement.offsetWidth * 1.6) + 'px';
    }

    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
    vizElement.parentNode.insertBefore(script, vizElement);
  }, []);

  return (
    <div
      className="tableauPlaceholder"
      id="viz1750480164442"
      ref={containerRef}
      style={{ position: 'relative' }}
    >
      <noscript>
        <a href="#">
          <img
            alt="Dashboard 1"
            src="https://public.tableau.com/static/images/AI/AI_And_Astronomy/Dashboard1/1_rss.png"
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: 'none' }}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param name="name" value="AI_And_Astronomy/Dashboard1" />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param name="static_image" value="https://public.tableau.com/static/images/AI/AI_And_Astronomy/Dashboard1/1.png" />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-US" />
        <param name="filter" value="publish=yes" />
      </object>
    </div>
  );
}

export default TableauEmbed;