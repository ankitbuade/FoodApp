import { Link } from "react-router-dom"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "./ui/menubar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { Loader2, MenuIcon, Moon, ShoppingBagIcon, ShoppingCartIcon, Sun, User } from "lucide-react"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Separator } from "@radix-ui/react-separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"



const Navbar = () => {
  const admin = true
  const loading = false
  return (
    <div className=" max-w-7xl mx-auto -mb-2.5 ">
      <div className="flex items-center justify-between h-14">
        <Link to="/">
          <h1 className="font-bold md:font-extrabold text-2xl ">AnkitEats</h1>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <div className="hidden md:flex items-center gap-6">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/order/status">Order</Link>

            {
              admin && (
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger> Dashboard  </MenubarTrigger>
                    <MenubarContent>
                      <Link to="/admin/restaurant">
                        <MenubarItem>Restaurant</MenubarItem>
                      </Link>
                      <Link to="/admin/menu">
                        <MenubarItem>Menu</MenubarItem></Link>
                      <Link to="/admin/order">
                        <MenubarItem>Orders</MenubarItem>
                      </Link>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>

              )
            }
          </div>
          <div className="flex items-center gap-4">
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem >
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem >
                    Dark
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

            </div>
            <Link to="/cart" className="relative cursor-pointer">
              <ShoppingCartIcon />
              <Button size={"icon"} className="absolute -inset-y-3 left-2 text-xs round-full h-4 w-4 bg-red-500 hover:bg-red-500 ">5</Button>

            </Link>
            <div>
              <Avatar>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              {
                loading ? (
                  <Button className="bg-orange hover:bg-hoverOrange">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin">Please wait</Loader2>
                  </Button>
                ) : (
                  <Button className="bg-orange hover:bg-orange">Logout</Button>
                )

              }

            </div>

          </div>
        </div>
        <div className=" md:hidden lg:hidden">
          <MobileNavbar />
        </div>
      </div>
    </div >

  )
}

export default Navbar

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon"} className="rounded-full bg-gray-200 text-black hover:bg-gray-500" variant="outline">
          <MenuIcon size={"18"} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between">
          <SheetTitle>AnkitEats
          </SheetTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem >
                Light
              </DropdownMenuItem>
              <DropdownMenuItem >
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </SheetHeader>
        <Separator className="my-2"/>
        <SheetDescription className="flex-1 ">
          <Link to="/profile" className="flex itmes-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg">
          <User/>
          <span>Profile</span>
          </Link>
        </SheetDescription>
          <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="bg-orange hover:bg-hoverOrange">Logout</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

  )

}