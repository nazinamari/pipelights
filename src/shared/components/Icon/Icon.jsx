export default function Icon({ className, width, height, id, ...props }) {
  return (
    <>
      <svg className={className} width={width} height={height} {...props}>
        <use href={`/icons.svg#${id}`} />
      </svg>
    </>
  );
}
