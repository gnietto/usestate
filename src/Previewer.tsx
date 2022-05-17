import { useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { Box, Heading, Textarea } from '@chakra-ui/react';

marked.setOptions({
  breaks: true
});

function Previewer() {
  const [markdown, setMarkdown] = useState('');

  const onChange = (event: any) => {
    setMarkdown(event.target.value);
  };

  const html = marked.parse(markdown);

  return (
    <Box>
      <Box>
        <Heading as="h4" size="lg" textAlign="center">
          Markdown
        </Heading>
        <Textarea
          value={markdown}
          onChange={onChange}
          placeholder="###### Escribe tu código markdown en este recuadro"
        />
        <Heading as="h4" size="lg" mt="1rem" textAlign="center">
          HTML
        </Heading>
        <Box
          h="sm"
          borderRadius="md"
          borderWidth="1px"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(html)
          }}
        />
      </Box>
    </Box>
  );
}

export default Previewer;
