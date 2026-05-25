'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Facebook,
  ChevronDown,
  Menu,
  X,
  Star,
  Coffee,
  UtensilsCrossed,
  Camera,
  Heart,
  Home as HomeIcon,
  Info,
  Menu as MenuIcon,
  Image as ImageIcon,
  Map,
  Mail,
  ExternalLink
} from 'lucide-react'

interface MenuItem {
  name: string
  description: string
  price: number
  image: string
  bestseller?: boolean
}

const menuItems = {
  coffee: [
    {
      name: 'Sakura Coffee Milk',
      description: 'Espresso, Fresh Milk, Rose Flavor',
      price: 25000,
      image: '/images/menu-coffee.jpg',
      bestseller: true
    },
    {
      name: 'Taketama Coffee Milk',
      description: 'Espresso, Fresh Milk, Palm Sugar, Evaporated Milk',
      price: 25000,
      image: '/images/menu-coffee.jpg',
      bestseller: true
    },
    {
      name: 'Shibuya Coffee Milk',
      description: 'Signature Japanese coffee blend',
      price: 25000,
      image: '/images/menu-coffee.jpg'
    },
    {
      name: 'Biscoff Coffee Latte',
      description: 'With caramelized biscuit flavor',
      price: 28000,
      image: '/images/menu-coffee.jpg'
    },
    {
      name: 'Es Kopi Susu Gula Aren',
      description: 'Classic Indonesian coffee',
      price: 22000,
      image: '/images/menu-coffee.jpg'
    },
    {
      name: 'Americano',
      description: 'Rich espresso with hot water',
      price: 18000,
      image: '/images/menu-coffee.jpg'
    },
    {
      name: 'Cappuccino',
      description: 'Espresso with steamed milk foam',
      price: 22000,
      image: '/images/menu-coffee.jpg'
    }
  ] as MenuItem[],
  japaneseFood: [
    {
      name: 'Chicken Ramen',
      description: 'Halal authentic Japanese ramen',
      price: 25000,
      image: '/images/menu-ramen.jpg',
      bestseller: true
    },
    {
      name: 'Soyu Udon',
      description: 'Traditional soy-based udon',
      price: 23000,
      image: '/images/menu-ramen.jpg'
    },
    {
      name: 'Gyudon Teriyaki',
      description: 'Beef bowl with teriyaki sauce',
      price: 23000,
      image: '/images/menu-food.jpg',
      bestseller: true
    },
    {
      name: 'Mentai Rice',
      description: 'Rice with seasoned fish roe',
      price: 25000,
      image: '/images/menu-food.jpg',
      bestseller: true
    },
    {
      name: 'Gyoza',
      description: 'Japanese dumplings (5 pcs)',
      price: 15000,
      image: '/images/menu-food.jpg'
    },
    {
      name: 'Takoyaki',
      description: 'Octopus balls (5 pcs)',
      price: 18000,
      image: '/images/menu-food.jpg'
    },
    {
      name: 'Nasi Tim Ayam Cabe Kering',
      description: 'Steamed rice with dried chili chicken',
      price: 20000,
      image: '/images/menu-food.jpg'
    }
  ] as MenuItem[],
  mocktails: [
    {
      name: 'Matcha Latte',
      description: 'Premium Japanese green tea',
      price: 25000,
      image: '/images/gallery-3.jpg',
      bestseller: true
    },
    {
      name: 'Hojicha Latte',
      description: 'Roasted green tea latte',
      price: 25000,
      image: '/images/gallery-3.jpg'
    },
    {
      name: 'Strawberry Matcha',
      description: 'Sweet strawberry with matcha',
      price: 28000,
      image: '/images/gallery-3.jpg',
      bestseller: true
    },
    {
      name: 'Lemon Tea',
      description: 'Fresh lemon with tea',
      price: 18000,
      image: '/images/gallery-3.jpg'
    },
    {
      name: 'Thai Tea',
      description: 'Classic Thai milk tea',
      price: 20000,
      image: '/images/gallery-3.jpg'
    }
  ] as MenuItem[]
}

const galleryItems = [
  {
    image: '/images/gallery-1.jpg',
    caption: 'Outdoor Lampions'
  },
  {
    image: '/images/gallery-2.jpg',
    caption: 'Instagrammable Corner'
  },
  {
    image: '/images/gallery-3.jpg',
    caption: 'Signature Drinks'
  }
]

const features = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Instagrammable',
    description: 'Photo spots with torii gates and cherry blossoms'
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8" />,
    title: 'Japanese Food',
    description: 'Halal ramen, gyudon, and authentic dishes'
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: 'Coffee Roastery',
    description: 'Premium coffee beans roasted in-house'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Cozy Ambiance',
    description: 'Warm lighting with traditional Japanese decor'
  }
]

const navLinks = [
  { name: 'Beranda', href: '#home', icon: <HomeIcon className="w-4 h-4" /> },
  { name: 'Tentang', href: '#about', icon: <Info className="w-4 h-4" /> },
  { name: 'Menu', href: '#menu', icon: <MenuIcon className="w-4 h-4" /> },
  { name: 'Galeri', href: '#gallery', icon: <ImageIcon className="w-4 h-4" /> },
  { name: 'Lokasi', href: '#location', icon: <Map className="w-4 h-4" /> },
  { name: 'Kontak', href: '#contact', icon: <Mail className="w-4 h-4" /> }
]

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

function SlideUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        style={{ color: scrolled ? undefined : '#fff' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('#home')}>
              <div className={`text-2xl md:text-3xl font-bold tracking-tight ${!scrolled ? 'text-white' : ''}`}>
                TAKETAMA
              </div>
              <div className={`text-xs md:text-sm ${!scrolled ? 'text-white/70' : 'text-muted-foreground'}`}>
                タケタマ
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`flex items-center space-x-2 transition-colors ${scrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'}`}
                >
                  {link.icon}
                  <span className="font-medium">{link.name}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className={!scrolled ? 'text-white hover:text-white hover:bg-white/10' : ''}>
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-secondary"
                    >
                      {link.icon}
                      <span className="font-medium text-lg">{link.name}</span>
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Taketama Cafe Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
              TAKETAMA
            </h1>
            <p className="text-3xl md:text-4xl text-primary mb-6">
              タケタマ
            </p>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Welcome to Tokyo — Cabang Sidoarjo
            </p>
            <Button
              onClick={() => scrollToSection('#menu')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full"
            >
              Lihat Menu
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-white/70"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Tentang <span className="text-primary">Taketama</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Sejak Desember 2020, Taketama Coffee & Roastery hadir untuk membawa pengalaman Tokyo 
                  yang otentik ke Sidoarjo. Dengan suasana Jepang yang hangat dan dekorasi tradisional 
                  seperti gerbang torii, rumah Jepang klasik, dan lampion cantik, kami menciptakan 
                  tempat yang sempurna untuk bersantai dan menciptakan kenangan indah.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Nikmati kopi premium yang di-roasting di tempat, hidangan Jepang halal yang lezat, 
                  dan suasana romantis dengan lampion di malam hari. Tempat yang Instagrammable untuk 
                  setiap momen spesial Anda.
                </p>
              </div>
            </FadeIn>

            <SlideUp delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-white border-border">
                      <CardContent className="p-0">
                        <div className="text-primary mb-4">{feature.icon}</div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 md:py-32 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Menu <span className="text-primary">Kami</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nikmati perpaduan sempurna antara kopi premium dan hidangan Jepang otentik
              </p>
            </div>
          </FadeIn>

          <Tabs defaultValue="coffee" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="coffee">Coffee</TabsTrigger>
              <TabsTrigger value="japaneseFood">Japanese Food</TabsTrigger>
              <TabsTrigger value="mocktails">Mocktails</TabsTrigger>
            </TabsList>

            <TabsContent value="coffee" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.coffee.map((item, index) => (
                  <SlideUp key={item.name} delay={index * 0.1}>
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow bg-white border-border">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover"
                        />
                        {item.bestseller && (
                          <Badge className="absolute top-3 right-3 bg-primary text-white">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Bestseller
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-xl mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">
                            Rp {item.price.toLocaleString('id-ID')}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </SlideUp>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="japaneseFood" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.japaneseFood.map((item, index) => (
                  <SlideUp key={item.name} delay={index * 0.1}>
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow bg-white border-border">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover"
                        />
                        {item.bestseller && (
                          <Badge className="absolute top-3 right-3 bg-primary text-white">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Bestseller
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-xl mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">
                            Rp {item.price.toLocaleString('id-ID')}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </SlideUp>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="mocktails" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.mocktails.map((item, index) => (
                  <SlideUp key={item.name} delay={index * 0.1}>
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow bg-white border-border">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-48 object-cover"
                        />
                        {item.bestseller && (
                          <Badge className="absolute top-3 right-3 bg-primary text-white">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Bestseller
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-xl mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary">
                            Rp {item.price.toLocaleString('id-ID')}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </SlideUp>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Galeri <span className="text-primary">Taketama</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Intip keindahan setiap sudut cafe kami
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <SlideUp key={item.caption} delay={index * 0.15}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-lg group cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-xl font-semibold">{item.caption}</p>
                  </div>
                </motion.div>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section id="location" className="py-20 md:py-32 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Lokasi & <span className="text-primary">Jam Buka</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Hours and Contact */}
            <SlideUp>
              <div className="space-y-8">
                <Card className="p-6 bg-white border-border">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4 mb-4">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-xl mb-4">Jam Operasional</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Senin - Jumat</span>
                            <span className="font-medium">10:00 - 22:00 WIB</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Sabtu - Minggu</span>
                            <span className="font-medium">10:00 - 22:00 WIB</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Hari Libur</span>
                            <span className="font-medium">10:00 - 22:00 WIB</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-white border-border">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4 mb-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Alamat</h3>
                        <p className="text-muted-foreground">
                          Jl. Kav. DPR III No.173<br />
                          Sidoarjo, Jawa Timur 61213
                        </p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-xl mb-2">Telepon</h3>
                        <p className="text-muted-foreground">+62 812 49624812</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </SlideUp>

            {/* Map Placeholder */}
            <SlideUp delay={0.2}>
              <div className="h-full min-h-[400px] rounded-lg overflow-hidden border-2 border-border bg-gradient-to-br from-secondary/30 to-accent/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <Map className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Taketama Coffee & Roastery</h3>
                  <p className="text-muted-foreground mb-4">
                    Jl. Kav. DPR III No.173, Sidoarjo
                  </p>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-white"
                  >
                    <a
                      href="https://maps.google.com/?q=Taketama+Coffee+Sidoarjo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Buka di Google Maps</span>
                    </a>
                  </Button>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Hubungi <span className="text-primary">Kami</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Ikuti kami di media sosial untuk update terbaru
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <SlideUp delay={0.1}>
              <motion.a
                href="https://instagram.com/taketamacoffeebar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-shadow bg-white border-border text-center">
                  <CardContent className="p-0">
                    <Instagram className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-xl mb-2">Instagram</h3>
                    <p className="text-muted-foreground">@taketamacoffeebar</p>
                    <Badge variant="secondary" className="mt-3">3.6K+ Followers</Badge>
                  </CardContent>
                </Card>
              </motion.a>
            </SlideUp>

            <SlideUp delay={0.2}>
              <motion.a
                href="https://tiktok.com/@taketama.cafe"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-shadow bg-white border-border text-center">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">♪</span>
                    </div>
                    <h3 className="font-semibold text-xl mb-2">TikTok</h3>
                    <p className="text-muted-foreground">@taketama.cafe</p>
                  </CardContent>
                </Card>
              </motion.a>
            </SlideUp>

            <SlideUp delay={0.3}>
              <motion.a
                href="https://facebook.com/TaketamaCoffeeBar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-shadow bg-white border-border text-center">
                  <CardContent className="p-0">
                    <Facebook className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-xl mb-2">Facebook</h3>
                    <p className="text-muted-foreground">Taketama Coffee Bar</p>
                  </CardContent>
                </Card>
              </motion.a>
            </SlideUp>
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full"
                asChild
              >
                <a
                  href="https://wa.me/6281249624812?text=Halo%20Taketama!%20Saya%20ingin%20reservasi%20meja."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kunjungi Kami Sekarang
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-[#2C1810] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-2">TAKETAMA</h3>
              <p className="text-sm text-white/70 mb-4">タケタマ</p>
              <p className="text-white/70 mb-4 max-w-md">
                Japanese-themed cafe di Sidoarjo yang menyajikan pengalaman Tokyo otentik 
                dengan kopi premium, hidangan Jepang halal, dan suasana yang Instagrammable.
              </p>
              <p className="text-sm text-white/50">
                Sejak Desember 2020
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Tautan Cepat</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Jl. Kav. DPR III No.173, Sidoarjo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+62 812 49624812</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>10:00 - 22:00 WIB</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="bg-white/20" />

          <div className="flex flex-col md:flex-row justify-between items-center mt-8 space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Taketama Coffee & Roastery. All rights reserved.
            </p>
            <p className="text-white/50 text-sm flex items-center">
              Dibuat dengan <Heart className="w-4 h-4 mx-1 text-primary" /> untuk Taketama Coffee
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
