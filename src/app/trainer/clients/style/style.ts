import { createStyles, css } from 'antd-style';

export const useStyles = createStyles({
  ClientsContainer: css`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,

  TopBar: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Heading: css`
    font-size: 20px;
    font-weight: 700;
    color: #1f2937;
  `,

  AddButton: css`
    background-color: #2563eb;
    color: #fff;
    padding: 8px 16px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: #1e40af;
    }
  `,

  TableWrapper: css`
    overflow-x: auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  `,

  SearchWrapper: css`
    padding: 16px;
    border-bottom: 1px solid #f0f0f0;
  `,

  SearchInput: css`
    width: 100%;
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #d9d9d9;
    font-size: 14px;
    &:focus {
      outline: none;
      border-color: #1677ff;
      box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.2);
    }
  `,

  Table: css`
    width: 100%;
    border-collapse: collapse;
  `,

  TableHead: css`
    background-color: #fafafa;
    text-align: left;
    font-size: 12px;
    text-transform: uppercase;
    color: #888;
  `,

  TableCell: css`
    padding: 12px 16px;
    font-size: 14px;
    color: #333;
    vertical-align: middle;
  `,

  Row: css`
    border-bottom: 1px solid #f0f0f0;
    &:hover {
      background-color: #f9fafb;
    }
  `,

  StatusBadgeActive: css`
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
    color: #065f46;
    background-color: #d1fae5;
    display: inline-block;
  `,

  StatusBadgeInactive: css`
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
    color: #7f1d1d;
    background-color: #fee2e2;
    display: inline-block;
  `,

  ActionButtonBlue: css`
    color: #2563eb;
    cursor: pointer;
    font-size: 14px;
    margin-right: 12px;
    &:hover {
      text-decoration: underline;
    }
  `,

  ActionButtonRed: css`
    color: #dc2626;
    cursor: pointer;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  `,
});
