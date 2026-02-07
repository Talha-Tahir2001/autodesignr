'use client';
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Home, LayoutDashboard, LogOut, Settings, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


export function Header() {
    const { user } = useKindeBrowserClient();
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
            <div className="w-full px-6 flex h-16 items-center justify-between">
                <div className="flex items-center">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col h-full w-[300px] sm:w-[350px]">
                            {/* 1. Header & Logo */}
                            <SheetHeader className="text-left pb-6 border-b">
                                <SheetTitle className="flex items-center gap-2">
                                    <Image src="/layers.png" alt="Logo" width={28} height={28} />
                                    <span className="font-bold text-xl tracking-tight">AutoDesignr</span>
                                </SheetTitle>
                            </SheetHeader>

                            {/* 2. Main Navigation - Middle Section */}
                            <div className="flex-1 py-6">
                                <nav className="flex flex-col gap-2">
                                    <Button variant="ghost" className="justify-start gap-3 h-12 px-3 text-base font-medium" asChild>
                                        <Link href="/">
                                            <Home className="size-5 text-muted-foreground" />
                                            Home
                                        </Link>
                                    </Button>
                                    <Button variant="ghost" className="justify-start gap-3 h-12 px-3 text-base font-medium" asChild>
                                        <Link href="/project">
                                            <LayoutDashboard className="size-5 text-muted-foreground" />
                                            Dashboard
                                        </Link>
                                    </Button>
                                </nav>
                            </div>

                            {/* 3. Bottom Section: Identity & Settings */}
                            <div className="mt-auto flex flex-col gap-4 border-t pt-6 pb-2">
                                {/* Appearance Row */}
                                <div className="flex items-center justify-between px-3 py-2 bg-muted/50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <Sparkles className="size-5 text-muted-foreground" />
                                        <span className="text-sm font-medium">Appearance</span>
                                    </div>
                                    <ModeToggle />
                                </div>

                                {user ? (
                                    <div className="flex flex-col gap-2">
                                        {/* User Info Branding */}
                                        <div className="flex items-center gap-3 px-3 py-4">
                                            <Avatar className="h-12 w-12 border-2 border-primary/10">
                                                <AvatarImage src={user?.picture || ""} />
                                                <AvatarFallback className="bg-primary/5 text-primary">
                                                    {user?.given_name?.[0]}{user?.family_name?.[0]}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col min-w-0">
                                                <p className="text-sm font-semibold truncate">
                                                    {user?.given_name} {user?.family_name}
                                                </p>
                                                <p className="text-xs text-muted-foreground truncate">
                                                    {user?.email}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Account Actions - Flattened (No Dropdown needed here) */}
                                        <div className="grid grid-cols-1 gap-1">
                                            <Button variant="ghost" className="justify-start gap-3 h-11 px-3" asChild>
                                                <Link href="/settings">
                                                    <Settings className="size-4 text-muted-foreground" />
                                                    Settings
                                                </Link>
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                className="justify-start gap-3 h-11 px-3 text-destructive hover:text-destructive hover:bg-destructive/10"
                                                asChild
                                            >
                                                <LogoutLink>
                                                    <LogOut className="size-4" />
                                                    Log out
                                                </LogoutLink>
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    /* Large Primary Action for Logged out users */
                                    <Button className="w-full h-12 rounded-xl text-base font-semibold shadow-lg shadow-primary/20" asChild>
                                        <LoginLink>Sign in to AutoDesignr</LoginLink>
                                    </Button>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                    <Image src="/layers.png" alt="Logo" width={30} height={30} className="mr-2" />
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-xl tracking-tight">
                            AutoDesignr
                        </span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-4">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/">
                            Home
                        </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/project">
                            Dashboard
                        </Link>
                    </Button>
                </nav>
                <div className="hidden md:flex items-center gap-2">
                    <ModeToggle />
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="relative h-10 w-10 rounded-full ml-2">
                                    <Avatar className="h-10 w-10 border">
                                        <AvatarImage src={user?.picture || ""} alt={user?.given_name || "User"} />
                                        <AvatarFallback className="bg-primary/10">
                                            {user?.given_name?.[0]}{user?.family_name?.[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-64" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex items-center gap-3 p-1">
                                        <Avatar className="h-10 w-10">
                                            <AvatarImage src={user?.picture || ""} />
                                            <AvatarFallback>
                                                {user?.given_name?.[0]}{user?.family_name?.[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col space-y-0.5">
                                            <p className="text-sm font-medium leading-none">
                                                {user?.given_name} {user?.family_name}
                                            </p>
                                            <p className="text-xs text-muted-foreground truncate max-w-[150px]">
                                                {user?.email}
                                            </p>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>

                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild className="cursor-pointer">
                                    <Link href="/project" className="flex w-full items-center">
                                        <LayoutDashboard className="mr-2 h-4 w-4 text-muted-foreground" />
                                        <span>Dashboard</span>
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem asChild className="cursor-pointer">
                                    <Link href="/settings" className="flex w-full items-center">
                                        <Settings className="mr-2 h-4 w-4 text-muted-foreground" />
                                        <span>Settings</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    asChild
                                    className="cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10"
                                >
                                    <LogoutLink className="flex w-full items-center">
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Log out</span>
                                    </LogoutLink>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button className="ml-2 h-10 px-6 rounded-xl" variant="default" asChild>
                            <LoginLink>Sign in</LoginLink>
                        </Button>
                    )}
                </div>
            </div>
        </header>
    );
}