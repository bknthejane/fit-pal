import { createStyles, css } from 'antd-style';

export const useStyles = createStyles({
  Navbar: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 2rem;
    height: 80px;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: #fff;
    border-bottom: 1px solid #e8e8e8;
    position: relative;
  `,
  Logo: css`
    flex: 1;
    li {
      list-style: none;
      font-weight: bold;
      font-size: 20px;
    }
  `,
  Buttons: css`
    display: flex;
    gap: 12px;
  `,
});
