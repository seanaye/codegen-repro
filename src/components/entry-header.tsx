type EntryHeaderProps = {
  title: string;
  date?: Date | string;
  author?: string;
};

export default function EntryHeader({ title, date, author }: EntryHeaderProps) {
  return (
    <div>
      {title && <h2>{title}</h2>}

      {date && author && (
        <div>
          By {author} on <time>{new Date(date).toDateString()}</time>
        </div>
      )}
    </div>
  );
}
