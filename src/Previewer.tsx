import { useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { Box, Textarea } from '@chakra-ui/react';

marked.setOptions({
  breaks: true
});

function Previewer() {
  const [markdown, setMarkdown] = useState('');

  const onChange = (event: any) => {
    setMarkdown(event.target.value);
  };

  let html = marked.parse(markdown);

  return (
    <Box>
      <Box>
        <Textarea value={markdown} onChange={onChange} />
        <Box
          minH="sm"
          borderRadius="md"
          borderWidth="1px"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(html)
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default Previewer;
