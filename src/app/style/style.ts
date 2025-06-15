import { createStyles, css } from 'antd-style';

export const useStyles = createStyles({
  Main: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px); /* adjust if navbar/footer present */
    padding: 0 2rem;
    background-color: #ffffff;
  `,
  Content: css`
    max-width: 600px;
    text-align: left;
  `,
  Heading: css`
    font-size: 2.75rem;
    font-weight: 800;
    color: #000;
    margin-bottom: 1rem;
    line-height: 1.3;
  `,
  Highlight: css`
    color: #5f35f5;
  `,
  Paragraph: css`
    color: #666;
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
  `,
  Button: css`
    background-color: #5f35f5;
    color: #fff;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    border-radius: 6px;
    display: inline-block;
    transition: background 0.3s;
    &:hover {
      background-color: #3d23a0;
    }
  `,
});
