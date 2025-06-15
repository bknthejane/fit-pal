import { createStyles, css } from 'antd-style';

export const useStyles = createStyles({
    PageContainer: css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #fff;
  `,

    Content: css`
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 2rem 1rem;
    background-color: #f9f9f9;
  `,

    FormContainer: css`
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    max-width: 500px;
    width: 100%;
  `,

    FormHeader: css`
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  `,

    FormTitle: css`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #171717;
  `,

    FormSubtitle: css`
    font-size: 14px;
    color: #777;
  `,

    UserTypeSection: css`
    margin-bottom: 1rem;
  `,

    UserTypeLabel: css`
    display: block;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #333;
  `,

    UserTypeFormItem: css`
    margin-bottom: 1.5rem;
  `,

    RadioOption: css`
    margin-right: 1.5rem;
  `,

    FieldLabel: css`
    font-weight: 500;
    font-size: 14px;
    color: #444;
  `,

    FormItem: css`
    margin-bottom: 1.2rem;
  `,

    Input: css`
    width: 100%;
  `,
    SubmitFormItem: css`
    margin-bottom: 1rem;
  `,

    SubmitButton: css`
    background-color: #1890ff;
    border-color: #1890ff;
    &:hover {
      background-color: #40a9ff;
      border-color: #40a9ff;
    }
  `,

    RegisterLinkContainer: css`
    text-align: center;
    margin-top: 1rem;
  `,

    RegisterLinkText: css`
    font-size: 14px;
    color: #555;
  `,

    RegisterLink: css`
    color: #1890ff;
    text-decoration: underline;
    margin-left: 0.3rem;
    &:hover {
      color: #40a9ff;
    }
  `,

    FooterText: css`
    text-align: center;
    padding: 1rem;
    font-size: 14px;
    color: #999;
    background-color: #f0f0f0;
  `,
});
