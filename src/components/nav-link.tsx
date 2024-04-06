import { ComponentProps } from "react"

interface NavLinkPorps extends ComponentProps<'a'> {
    children: string
}

export function NavLink(props: NavLinkPorps) {
    return (
        <a {...props} className='font-medium text-sm'>
            {props.children}
        </a>
    )
}