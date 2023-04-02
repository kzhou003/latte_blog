import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
        nulla at velit tincidunt tincidunt. Nam euismod sapien in odio
        consequat, eu laoreet massa convallis. Nulla facilisi. In hac habitasse
        platea dictumst. Ut sit amet arcu id nibh congue blandit. Aliquam
        erat volutpat. Proin vitae felis blandit, maximus mauris vel, feugiat
        ante. Sed consectetur nisi vel dolor imperdiet consequat. Etiam
        eleifend, purus a egestas fringilla, sapien nibh placerat mi, sit amet
        maximus turpis elit at elit. Duis sed lorem velit.
      </p>
    </div>
  );
}

export default BlogPost;
