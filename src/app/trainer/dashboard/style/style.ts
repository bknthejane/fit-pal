import { createStyles, css } from "antd-style";

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
  Container: css`
    padding: 24px;
    background-color: #f9fafb;
    min-height: 100vh;
  `,

  BannerCard: css`
    background: linear-gradient(to right, #2563eb, #7c3aed);
    color: #fff;
    margin-bottom: 24px;
    border: none;
    padding: 24px;
  `,

  BannerTitle: css`
    color: #fff;
    font-size: 24px;
    margin-bottom: 8px;
  `,

  BannerText: css`
    color: #e0e0e0;
    margin: 0;
  `,

  SectionWrapper: css`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 32px;
  `,

  StatCard: css`
    flex: 1 1 30%;
    min-width: 250px;
    background: #fff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border: 1px solid #f0f0f0;
  `,

  CardTitle: css`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  `,

  Value: css`
    font-size: 28px;
    font-weight: bold;
    margin: 0;
    color: #333;
  `,

  Label: css`
    font-size: 14px;
    color: #888;
    margin: 0;
  `,

  // Buttons Section
  ButtonGrid: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin-bottom: 32px;
  `,

  ActionButton: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80px;
    font-weight: 500;
    font-size: 14px;
    border-radius: 8px;
    transition: all 0.2s ease;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #f0f2f5;
    }
  `,

  ActionIcon: css`
    font-size: 20px;
    margin-bottom: 6px;
  `,

  RecentClientsCard: css`
    background: #fff;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #f0f0f0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  `,

  ClientList: css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 16px;
  `,

  ClientCard: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background-color: #fdfdfd;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
  `,

  ClientName: css`
    font-weight: 500;
    font-size: 16px;
    color: #111827;
    margin-bottom: 4px;
  `,

  ClientEmail: css`
    font-size: 14px;
    color: #6b7280;
  `,

  ClientStatus: css`
    padding: 4px 10px;
    font-size: 12px;
    font-weight: 500;
    border-radius: 9999px;
    text-align: center;
  `,

  Active: css`
    background-color: #dcfce7;
    color: #15803d;
  `,

  Inactive: css`
    background-color: #fee2e2;
    color: #b91c1c;
  `,
});
