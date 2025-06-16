import { createStyles, css } from 'antd-style';

export const useStyles = createStyles({
  Card: css`
    margin-bottom: 24px;
  `,
  Form: css`
    width: 100%;
  `,
  Grid: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
  `,
  SubmitWrapper: css`
    margin-top: 24px;
  `,
});
