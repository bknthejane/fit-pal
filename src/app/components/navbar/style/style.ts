import { createStyles, css } from 'antd-style';

export const useStyles = createStyles({
  Navbar: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    height: 80px;
    background-color: #fff;
    border-bottom: 1px solid #e8e8e8;
  `,
  Logo: css`
    font-size: 24px;
    font-weight: bold;
    color: #1890ff;
  `,
  LogoLink: css`
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #096dd9;
    }
  `,
  Buttons: css`
    display: flex;
    gap: 12px;
  `,
});
