import mdStyles from '../../styles/markdown-styles.module.css'

export default function Markdown({ content }) {
  return (
        <div className={mdStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }}/>
  );
}