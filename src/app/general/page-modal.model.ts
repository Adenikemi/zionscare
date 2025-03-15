export interface PageModalOptions {
    type: "success" | "error";
    route?: string
    heading?: string;
    message?: string;
    htmlContent?: string;
    htmlSuccessIcon?: string;
    htmlErrorIcon?: string;
    buttons?: { continue?: string; cancel?: string; bgColor?: string; color?: string; borderColor?: string };
    actions?: { continue?: () => void; cancel?: () => void };
    style?: { continue?: "default" | "danger" | "green"; cancel?: "default" | "danger" | "green" };
    fill?: string;
    headingSize?: "default" | "small" | "medium" | "large";
    hideCancel?: boolean;
    disableClose?: boolean;
    showBorder?: boolean;
}