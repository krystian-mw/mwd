import NextLink from 'next/link'

const Link = ({ href, children }) => {
    if (typeof children === 'string') children = <a>{children}</a>
    return (
        <NextLink href={href}>
            {children}
        </NextLink>
    )
}

export default Link