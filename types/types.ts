export type ILayoutProps = {
  children: JSX.Element;
};

// for reusable input
export interface InputProps {
  label: string;
  inputType: string;
  placeholder: string;
}

// for reusable button
export interface ButtonProps {
  title: string;
}
