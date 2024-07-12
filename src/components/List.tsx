interface Props {
  subs: Array<{
    nick: string
    subMonths: number
    avatar: string
    description?: string
  }>
}
export const List: React.FC<Props> = ({ subs }: Props) => {
  return (<>
    <ul>
      {subs?.map(sub => (
        <li key={sub.nick}>
          <img src={sub.avatar} alt={sub.nick} />
          <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
          <p>{sub.description?.substring(0, 100)}</p>
        </li>
      ))}
    </ul></>)
}