import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings, Moon, Sun, Palette, Type, Monitor, Sparkles, Globe } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<'light' | 'dark' | 'system'>('system');
  const [currentTheme, setCurrentTheme] = useState('default');
  const [fontSize, setFontSize] = useState('medium');
  const [language, setLanguage] = useState('en');
  const location = useLocation();

  const themes = [
    { name: 'Default', value: 'default', color: 'hsl(120, 60%, 40%)' },
    { name: 'Ocean', value: 'ocean', color: 'hsl(200, 100%, 50%)' },
    { name: 'Rose', value: 'rose', color: 'hsl(350, 90%, 60%)' },
    { name: 'Sunset', value: 'sunset', color: 'hsl(15, 100%, 60%)' },
    { name: 'Purple', value: 'purple', color: 'hsl(280, 80%, 60%)' },
  ];

  const languages = [
    { name: 'English', value: 'en', flag: '🇺🇸' },
    { name: 'Spanish', value: 'es', flag: '🇪🇸' },
    { name: 'French', value: 'fr', flag: '🇫🇷' },
    { name: 'German', value: 'de', flag: '🇩🇪' },
  ];

  useEffect(() => {
    const savedThemeMode = localStorage.getItem('themeMode') as 'light' | 'dark' | 'system' || 'system';
    const savedTheme = localStorage.getItem('currentTheme') || 'default';
    const savedFontSize = localStorage.getItem('fontSize') || 'medium';
    const savedLanguage = localStorage.getItem('language') || 'en';

    setThemeMode(savedThemeMode);
    setCurrentTheme(savedTheme);
    setFontSize(savedFontSize);
    setLanguage(savedLanguage);

    applyThemeMode(savedThemeMode);
    changeTheme(savedTheme);
    changeFontSize(savedFontSize);
  }, []);

  const applyThemeMode = (mode: 'light' | 'dark' | 'system') => {
    const root = document.documentElement;
    
    if (mode === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.toggle('dark', prefersDark);
    } else {
      root.classList.toggle('dark', mode === 'dark');
    }
  };

  const changeThemeMode = (mode: 'light' | 'dark' | 'system') => {
    setThemeMode(mode);
    localStorage.setItem('themeMode', mode);
    applyThemeMode(mode);
  };

  const changeTheme = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem('currentTheme', theme);
    
    const root = document.documentElement;
    switch(theme) {
      case 'ocean':
        root.style.setProperty('--primary', '200 100% 50%');
        break;
      case 'rose':
        root.style.setProperty('--primary', '350 90% 60%');
        break;
      case 'sunset':
        root.style.setProperty('--primary', '15 100% 60%');
        break;
      case 'purple':
        root.style.setProperty('--primary', '280 80% 60%');
        break;
      default:
        root.style.setProperty('--primary', '120 60% 40%');
    }
  };

  const changeFontSize = (size: string) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
    
    const root = document.documentElement;
    switch(size) {
      case 'small':
        root.style.fontSize = '14px';
        break;
      case 'large':
        root.style.fontSize = '18px';
        break;
      default:
        root.style.fontSize = '16px';
    }
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'My Portfolio', href: '/portfolio' },
    { name: 'Start A Project', href: '/start-project' },
    { name: 'About Me', href: '/about' },
  ];

  const SettingsDropdown = ({ isMobile = false }: { isMobile?: boolean }) => {
    if (isMobile) {
      return (
        <DropdownMenuContent 
          className="w-72 bg-background border border-border shadow-lg z-50 rounded-none font-mono" 
          align="end"
          sideOffset={16}
        >
          <DropdownMenuLabel className="flex items-center gap-2 px-3 py-2 border-b border-border/30 bg-muted/20">
            <Settings className="h-3 w-3 text-primary" />
            <span className="font-medium text-xs tracking-wider">SETTINGS</span>
          </DropdownMenuLabel>
          
          <div className="p-3 space-y-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {themeMode === 'dark' ? <Moon className="h-2.5 w-2.5 text-primary" /> : 
                 themeMode === 'light' ? <Sun className="h-2.5 w-2.5 text-primary" /> : 
                 <Monitor className="h-2.5 w-2.5 text-primary" />}
                <span className="text-[10px] font-medium">Theme</span>
              </div>
              <div className="grid grid-cols-3 gap-1">
                {[
                  { name: 'Auto', value: 'system', icon: Monitor },
                  { name: 'Light', value: 'light', icon: Sun },
                  { name: 'Dark', value: 'dark', icon: Moon }
                ].map((mode) => {
                  const IconComponent = mode.icon;
                  return (
                    <button
                      key={mode.value}
                      onClick={() => changeThemeMode(mode.value as 'light' | 'dark' | 'system')}
                      className={`flex flex-col items-center gap-1 px-2 py-2 border transition-all duration-200 ${
                        themeMode === mode.value 
                          ? 'bg-primary/15 text-primary font-medium border-primary/40' 
                          : 'hover:bg-muted/60 border-border/30'
                      }`}
                    >
                      <IconComponent className="h-2.5 w-2.5" />
                      <span className="text-[10px]">{mode.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <DropdownMenuSeparator className="bg-border/40" />

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Palette className="h-2.5 w-2.5 text-primary" />
                <span className="text-[10px] font-medium">Colors</span>
              </div>
              <div className="grid grid-cols-5 gap-1">
                {themes.map((theme) => (
                  <button
                    key={theme.value}
                    onClick={() => changeTheme(theme.value)}
                    className={`flex flex-col items-center gap-1 p-1 border transition-all duration-200 ${
                      currentTheme === theme.value 
                        ? 'border-primary bg-primary/15' 
                        : 'border-border/30 hover:bg-muted/30'
                    }`}
                  >
                    <div 
                      className="w-3.5 h-3.5 border border-border/20"
                      style={{ backgroundColor: theme.color }}
                    />
                    <span className="text-[9px] truncate">{theme.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <DropdownMenuSeparator className="bg-border/40" />

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Type className="h-2.5 w-2.5 text-primary" />
                <span className="text-[10px] font-medium">Size</span>
              </div>
              <div className="grid grid-cols-3 gap-1">
                {[
                  { size: 'small', label: 'S', icon: 'A' },
                  { size: 'medium', label: 'M', icon: 'A' },
                  { size: 'large', label: 'L', icon: 'A' }
                ].map((item) => (
                  <button
                    key={item.size}
                    onClick={() => changeFontSize(item.size)}
                    className={`flex flex-col items-center gap-1 px-2 py-2 border transition-all duration-200 ${
                      fontSize === item.size 
                        ? 'bg-primary/15 text-primary font-medium border-primary/40' 
                        : 'hover:bg-muted/60 border-border/30'
                    }`}
                  >
                    <span className={`font-mono ${
                      item.size === 'small' ? 'text-[10px]' : 
                      item.size === 'medium' ? 'text-xs' : 'text-sm'
                    }`}>
                      {item.icon}
                    </span>
                    <span className="text-[10px]">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </DropdownMenuContent>
      );
    }

    return (
      <DropdownMenuContent 
        className="w-64 bg-background border border-border shadow-lg z-50 rounded-none font-mono" 
        align="end"
        sideOffset={4}
      >
        <DropdownMenuLabel className="flex items-center gap-2 px-3 py-2 border-b border-border/30 bg-muted/20">
          <Settings className="h-3 w-3 text-primary" />
          <span className="font-medium text-sm tracking-wider">SETTINGS</span>
        </DropdownMenuLabel>
        
        <div className="p-2">
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="flex items-center gap-2 px-2 py-1.5 hover:bg-muted/80 transition-colors text-sm">
                {themeMode === 'dark' ? <Moon className="h-3 w-3" /> : 
                 themeMode === 'light' ? <Sun className="h-3 w-3" /> : 
                 <Monitor className="h-3 w-3" />}
                <span>Theme</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="w-36 bg-background border border-border shadow-lg z-50">
                {[
                  { name: 'System', value: 'system', icon: Monitor },
                  { name: 'Light', value: 'light', icon: Sun },
                  { name: 'Dark', value: 'dark', icon: Moon }
                ].map((mode) => {
                  const IconComponent = mode.icon;
                  return (
                    <DropdownMenuItem 
                      key={mode.value}
                      onClick={() => changeThemeMode(mode.value as 'light' | 'dark' | 'system')}
                      className={`flex items-center gap-2 px-2 py-1.5 transition-colors text-sm ${
                        themeMode === mode.value ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted/80'
                      }`}
                    >
                      <IconComponent className="h-3 w-3" />
                      <span>{mode.name}</span>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuGroup>

          <DropdownMenuSeparator className="my-1 bg-border/30" />

          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="flex items-center gap-2 px-2 py-1.5 hover:bg-muted/80 transition-colors text-sm">
              <Palette className="h-3 w-3" />
              <span>Colors</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-40 bg-background border border-border shadow-lg z-50">
              <div className="grid grid-cols-1 gap-0.5 p-1">
                {themes.map((theme) => (
                  <DropdownMenuItem 
                    key={theme.value}
                    onClick={() => changeTheme(theme.value)}
                    className={`flex items-center gap-2 px-2 py-1.5 transition-colors text-sm ${
                      currentTheme === theme.value ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted/80'
                    }`}
                  >
                    <div 
                      className="w-3 h-3 border border-border/30"
                      style={{ backgroundColor: theme.color }}
                    />
                    <span className="truncate">{theme.name}</span>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="flex items-center gap-2 px-2 py-1.5 hover:bg-muted/80 transition-colors text-sm">
              <Type className="h-3 w-3" />
              <span>Size</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-32 bg-background border border-border shadow-lg z-50">
              {['small', 'medium', 'large'].map((size) => (
                <DropdownMenuItem 
                  key={size}
                  onClick={() => changeFontSize(size)}
                  className={`px-2 py-1.5 transition-colors text-sm ${
                    fontSize === size ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted/80'
                  }`}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </div>
      </DropdownMenuContent>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold font-mono text-primary">
              &lt;TK /&gt;
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Settings className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <SettingsDropdown />
            </DropdownMenu>

            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-mono text-sm transition-all duration-300 relative group px-4 py-2.5 rounded-md border border-transparent hover:border-primary/30 hover:shadow-sm ${
                    location.pathname === item.href 
                      ? 'text-primary border-primary/50 bg-gradient-to-r from-primary/10 to-primary/5 shadow-md' 
                      : 'text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/8 hover:to-primary/3'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Modified underline for desktop nav */}
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 ${
                    location.pathname === item.href ? 'opacity-100 w-1/2' : 'opacity-0 w-0 group-hover:opacity-100 group-hover:w-1/3'
                  }`}></span>
                  <div className={`absolute inset-0 rounded-md bg-gradient-to-r from-primary/5 to-primary/10 transition-all duration-300 ${
                    location.pathname === item.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center justify-center rounded-md text-foreground hover:text-primary transition-colors duration-300 h-10 w-10">
                  <Settings className="h-6 w-6" />
                </button>
              </DropdownMenuTrigger>
              <SettingsDropdown isMobile />
            </DropdownMenu>

            <div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center text-foreground hover:text-primary transition-colors duration-300 h-10 w-10 group cursor-pointer"
            >
              <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  } group-hover:bg-primary`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  } group-hover:bg-primary`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  } group-hover:bg-primary`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-80 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
        } overflow-hidden`}>
          <div className="px-2 pt-4 pb-6 space-y-2 bg-gradient-to-b from-background to-background/95 border-t border-border/50 backdrop-blur-sm">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-mono group block px-4 py-4 text-sm transition-all duration-300 rounded-lg border border-transparent hover:border-primary/30 hover:shadow-lg transform hover:-translate-y-0.5 ${
                  location.pathname === item.href 
                    ? 'text-primary border-primary/50 bg-gradient-to-r from-primary/15 to-primary/8 shadow-lg scale-[1.02]' 
                    : 'text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'fade-in 0.3s ease-out forwards' : 'none'
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="relative z-10">{item.name}</span>
                  <div className={`w-2 h-2 rounded-full bg-primary transition-all duration-300 ${
                    location.pathname === item.href ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100'
                  }`} />
                </div>
                {/* Modified underline for mobile nav */}
                <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 ${
                  location.pathname === item.href ? 'opacity-100 w-1/3' : 'opacity-0 w-0 group-hover:opacity-100 group-hover:w-1/4'
                }`}></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
