interface Link {
  title: string;
  url: string;
  description: string;
}

interface CardProps {
  link: Link;
}

const Card: React.FC<CardProps> = ({ link }) => {
  const { title, url, description } = link;
  return (
    <a
      href={url}
      className="display-flex flex-grow-1 align-items-center background-white cursor-pointer padding-s tablet:padding-m flex-grow-1 border-radius-xs margin-s tablet:margin-m box-shadow-xs hover:box-shadow-s"
      style={{ flexBasis: "300px" }}
    >
      <div>
        <h2 className="margin-bottom-s color-black font-size-m font-weight-600">{title}</h2>
        <p className="margin-top-xs color-neutral-7 line-height-m">{description}</p>
      </div>
      <i className="icon-system-arrow-right-s-line font-size-xxl margin-left-s color-neutral-3" />
    </a>
  );
};

export { Card };
