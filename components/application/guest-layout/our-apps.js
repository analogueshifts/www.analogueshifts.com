import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import ourAppsLinks from '../utilities/our-apps.json'

export default function OurApps() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent px-3 lg:px-4 w-screen lg:w-auto justify-between lg:justify-center data-[active]:bg-transparent data-[state=open]:bg-transparent text-gray-600  lg:text-gray-500 lg:hover:text-gray-700 focus:text-gray-600 hover:text-gray-600 hover:bg-transparent focus:bg-transparent">
                        <div className="inline-flex  items-center lg:px-1 text-base lg:text-sm font-medium leading-5 focus:outline-none">
                            Tools
                        </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="lg:bg-[#F3F4F6] bg-white">
                        <ul className="grid w-screen lg:w-[350px] xl:w-[450px] gap-3 p-4 grid-cols-1  xl:grid-cols-2  ">
                            {ourAppsLinks.map(component => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}>
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = ({ className, title, children, href }) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
                        className,
                    )}>
                    <div className="text-sm font-medium leading-none text-tremor-brand-boulder950">
                        {title}
                    </div>
                    <p className="line-clamp-2 w-full text-gray-500 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
