import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import styles from '../../styles/markdown-styles.module.css';

export default function Markdown({ content }) {
  return (
      // eslint-disable-next-line react/no-children-prop
      <ReactMarkdown className={styles.markdown} rehypePlugins={[rehypeRaw, rehypeHighlight]} children={content} />
  );
}