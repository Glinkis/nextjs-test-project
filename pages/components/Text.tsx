interface TextProps extends React.HTMLProps<HTMLDivElement> {
  color: string;
}

export const Text = (props: TextProps) => (
  <div>
    {props.children}
    <style jsx>{`
      color: ${props.color};
    `}</style>
  </div>
);
