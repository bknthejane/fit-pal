import { createStyles, css } from 'antd-style';

export const useStyles = createStyles({
  Main: css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    padding: 2rem;
    background-color: #f9f9f9;
  `,
  Content: css`
    text-align: center;
    max-width: 800px;
  `,
  Heading: css`
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: 1.2;
  `,
  Highlight: css`
    color: #1890ff;
  `,
  Paragraph: css`
    font-size: 1.2rem;
    color: #595959;
    margin-bottom: 2rem;
  `,
  Button: css`
    display: inline-block;
    background-color: #1890ff;
    color: #fff;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 4px;
    text-decoration: none; // removes underline
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #096dd9;
      text-decoration: none; // ensure it stays removed on hover
    }
  `,
});
