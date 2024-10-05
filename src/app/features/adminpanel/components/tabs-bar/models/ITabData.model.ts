interface TabLink {
    type: "link";
    routeTo: string;
}
interface TabButton {
    type: "button";
    onClick?: (key: string)=> void;
    active: boolean;
}

export type ITabData = { key: string, title: string} & (TabLink | TabButton);