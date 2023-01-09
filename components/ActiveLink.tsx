/* librerias de next */
import { useRouter } from 'next/router'
import Link from 'next/link'
import { CSSProperties, FC } from 'react'

/* estilos */
const style: CSSProperties = {
  color: '#0070F3',
  textDecoration: 'underline'
}
/* interfaces */
interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({ href, text })  => {

  const { asPath } = useRouter()

  return (
    <Link href={ href }>
        <a style={ asPath == href ? style : undefined }>{ text }</a>
    </Link>
  )
}
