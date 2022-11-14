import { ImgHTMLAttributes } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import styles from '../../styles/markdown-styles.module.css';
import ImageWithModal from './imageWithModal';

type Props = {
  content: string
}

export default function Markdown({ content }: Props) {
  const customComponents = {
    img: ({ src, alt, width, height }: any) => {
      if (width == null) {
        width = 350;
      }

      if (height == null) {
        height = 200;
      }

      return (
        <ImageWithModal
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      );
    }
  }
  
  return ( 
      // eslint-disable-next-line react/no-children-prop
      <ReactMarkdown className={styles.markdown} rehypePlugins={[rehypeRaw, rehypeHighlight]} components={customComponents} children={content} />
  );
}