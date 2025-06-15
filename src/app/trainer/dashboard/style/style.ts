import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
    Container: css`
        padding: 24px;
    `,
    BannerCard: css`
        background: linear-gradient(to right, #2563eb, #7c3aed);
        color: #fff;
        margin-bottom: 24px;
        border: none;
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
    `
})