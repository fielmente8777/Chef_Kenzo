interface Props {
  className?: string;
  children: React.ReactNode;
  id?: string;
  defaultPadding?: boolean;
}

const Section: React.FC<Props> = ({
  className,
  children,
  id,
  defaultPadding = true,
}) => {
  return (
    <section
      className={`${className} ${defaultPadding && "md:py-16 py-10"} max_screen_width`}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
