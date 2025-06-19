import { createStyles, css } from 'antd-style';

export const useStyles = createStyles({
    Navbar: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    NavLeft: css`
    li {
      list-style: none;
      font-weight: bold;
      font-size: 24px;
      color: #1890ff;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  `,
    NavRight: css`
    display: flex;
    align-items: center;
  `,
    CenteredContainer: css`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
  `,
});
