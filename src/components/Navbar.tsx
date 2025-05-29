import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold gradient-text">
            Rohan Kashid
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-grow justify-center gap-8">
            <Link href="#about" className="nav-link text-foreground/80 hover:text-foreground transition-colors">About</Link>
            <Link href="#projects" className="nav-link text-foreground/80 hover:text-foreground transition-colors">Projects</Link>
            <Link href="#contact" className="nav-link text-foreground/80 hover:text-foreground transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link 
              href="#contact" 
              className="px-6 py-2  text-black rounded-lg font-medium hover:text-accent-foreground transition-colors"
              
            >
              Connect Me
            </Link>
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[250px] sm:w-[300px] bg-background/80 backdrop-blur-md border-l border-border/40"
                >
                  <nav className="flex flex-col gap-6 mt-12 px-2">
                    <SheetClose asChild>
                      <Link 
                        href="#about" 
                        className="text-lg font-medium hover:text-foreground/80 transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        About
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link 
                        href="#projects" 
                        className="text-lg font-medium hover:text-foreground/80 transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        Projects
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link 
                        href="#contact" 
                        className="text-lg font-medium hover:text-foreground/80 transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        Contact
                      </Link>
                    </SheetClose>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 