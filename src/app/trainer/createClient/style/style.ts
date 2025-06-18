import { createStyles, css } from 'antd-style';

export const useStyles = createStyles({
  PageWrapper: css`
    min-height: 100vh;
    background-color: #f5f5f5;
  `,
  Navbar: css`
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #e8e8e8;
    padding: 0 24px;
  `,
  NavContent: css`
    max-width: 1200px;
    margin: 0 auto;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  BackButton: css`
    color: #666;
  `,
  ContentWrapper: css`
    max-width: 800px;
    margin: 24px auto;
    padding: 0 24px;
  `,
  SearchInput: css`
    width: 300px;
  `,
  Form: css`
    .ant-form-item {
      margin-bottom: 16px;
    }
  `,
});
