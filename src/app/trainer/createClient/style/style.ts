import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  PageWrapper: css`
    min-height: 100vh;
    background-color: #f9fafb;
    padding: 24px;
  `,
  NavBar: css`
    background-color: #fff;
    padding: 16px 24px;
    border-bottom: 1px solid #e5e7eb;
    margin-bottom: 24px;
  `,
  NavTitle: css`
    font-size: 20px;
    font-weight: 600;
    color: #111827;
    margin: 0;
  `,
  FormWrapper: css`
    max-width: 700px;
    margin: 0 auto;
    padding: 24px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  `,
  Form: css`
    width: 100%;
  `
});
