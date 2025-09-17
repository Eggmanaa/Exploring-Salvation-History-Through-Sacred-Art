import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { typologies, getTypologyById, sections } from './data/typologies'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files from public directory
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/favicon.ico', serveStatic({ root: './public' }))

// API Routes
app.get('/api/typologies', (c) => {
  return c.json({ typologies, sections })
})

app.get('/api/typology/:id', (c) => {
  const id = parseInt(c.req.param('id'))
  const typology = getTypologyById(id)
  if (!typology) {
    return c.json({ error: 'Typology not found' }, 404)
  }
  return c.json(typology)
})

// Main application HTML
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exploring Salvation History Through Sacred Art</title>
        
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
        
        <!-- Icons -->
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
          tailwind.config = {
            theme: {
              extend: {
                fontFamily: {
                  'cinzel': ['Cinzel', 'serif'],
                  'crimson': ['Crimson Text', 'serif']
                },
                colors: {
                  'burgundy': '#800020',
                  'royal-purple': '#663399',
                  'gold': '#FFD700',
                  'ivory': '#FFFFF0',
                  'midnight': '#191970'
                }
              }
            }
          }
        </script>
        
        <!-- Custom Styles -->
        <link href="/static/styles.css" rel="stylesheet">
    </head>
    <body class="bg-midnight">
        <!-- Loading Screen -->
        <div id="loading-screen" class="fixed inset-0 bg-midnight flex items-center justify-center z-50">
            <div class="text-center">
                <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-gold mx-auto mb-4"></div>
                <h2 class="font-cinzel text-gold text-2xl">Loading Sacred Mysteries...</h2>
            </div>
        </div>

        <!-- Navigation -->
        <nav id="main-nav" class="fixed top-0 left-0 right-0 bg-midnight/95 backdrop-blur-sm z-40 border-b-2 border-gold/30 transition-all duration-300 hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                        <i class="fas fa-cross text-gold text-2xl mr-3"></i>
                        <h1 class="font-cinzel text-gold text-xl font-semibold">A Compendium of Typology</h1>
                    </div>
                    <div class="hidden md:flex space-x-8">
                        <a href="#home" class="nav-link font-crimson text-ivory hover:text-gold transition-colors">Introduction</a>
                        <a href="#timeline" class="nav-link font-crimson text-ivory hover:text-gold transition-colors">Timeline</a>
                        <a href="#typologies" class="nav-link font-crimson text-ivory hover:text-gold transition-colors">Typologies</a>
                        <a href="#about" class="nav-link font-crimson text-ivory hover:text-gold transition-colors">About</a>
                    </div>
                    <button id="mobile-menu-btn" class="md:hidden text-ivory hover:text-gold">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="md:hidden hidden bg-midnight/95 border-t border-gold/30">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <a href="#home" class="block px-3 py-2 font-crimson text-ivory hover:text-gold">Introduction</a>
                    <a href="#timeline" class="block px-3 py-2 font-crimson text-ivory hover:text-gold">Timeline</a>
                    <a href="#typologies" class="block px-3 py-2 font-crimson text-ivory hover:text-gold">Typologies</a>
                    <a href="#about" class="block px-3 py-2 font-crimson text-ivory hover:text-gold">About</a>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
            <!-- Background Image -->
            <div class="absolute inset-0">
                <img src="https://page.gensparksite.com/v1/base64_upload/0cf3d4a4e13617c03d32d9fa1c4f73e9" 
                     alt="The Creation of Adam by Michelangelo"
                     class="w-full h-full object-cover opacity-40">
                <div class="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/40 to-midnight/80"></div>
            </div>
            
            <!-- Hero Content -->
            <div class="relative z-10 text-center px-4 max-w-6xl mx-auto">
                <h1 class="font-cinzel text-4xl md:text-6xl text-gold mb-6 tracking-wider text-shadow-gold">
                    The Divine Tapestry
                </h1>
                <p class="font-cinzel text-xl md:text-2xl text-ivory mb-8">
                    A Compendium of Biblical Typology
                </p>
                <div class="max-w-3xl mx-auto mb-8 bg-midnight/60 backdrop-blur-sm rounded-lg p-6 border border-gold/30">
                    <p class="font-crimson text-lg text-ivory/90 italic leading-relaxed mb-2">
                        "The New Testament lies hidden in the Old and the Old Testament is unveiled in the New."
                    </p>
                    <p class="font-crimson text-ivory/70 text-sm">
                        — St. Augustine
                    </p>
                </div>
                <p class="font-crimson text-lg text-ivory/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Discover how the Old Testament prefigures the New through thirty profound connections,
                    revealed through the masterpieces of sacred art spanning two millennia.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onclick="scrollToSection('typologies')" class="px-8 py-3 bg-gold text-midnight font-cinzel font-semibold rounded-lg hover:bg-gold/90 transition-all transform hover:scale-105">
                        <i class="fas fa-book-open mr-2"></i>
                        Explore Typologies
                    </button>
                    <button onclick="scrollToSection('timeline')" class="px-8 py-3 border-2 border-gold text-gold font-cinzel font-semibold rounded-lg hover:bg-gold hover:text-midnight transition-all transform hover:scale-105">
                        <i class="fas fa-hourglass-half mr-2"></i>
                        View Timeline
                    </button>
                </div>
            </div>
            
            <!-- Scroll Indicator -->
            <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold animate-bounce">
                <i class="fas fa-chevron-down text-2xl"></i>
            </div>
        </section>

        <!-- Introduction Section -->
        <section id="intro" class="py-20 bg-gradient-to-b from-midnight to-burgundy/20">
            <div class="max-w-6xl mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="font-cinzel text-3xl md:text-4xl text-gold mb-4">Understanding Typology</h2>
                    <div class="w-32 h-1 bg-gold mx-auto"></div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p class="font-crimson text-ivory text-lg leading-relaxed mb-6">
                            From a Catholic perspective, history is not a random sequence of events but a profound narrative authored by God Himself. 
                            This divine story, known as <em>Salvation History</em>, reveals God's loving plan to redeem humanity.
                        </p>
                        <p class="font-crimson text-ivory text-lg leading-relaxed mb-6">
                            Typology is the study of how persons, events, and institutions in the Old Testament prefigure and point to their fulfillment 
                            in the New Testament. Like shadows cast by a coming reality, these types reveal God's consistent plan throughout history.
                        </p>
                        <div class="bg-burgundy/30 rounded-lg p-4 border-l-4 border-gold mb-6">
                            <p class="font-crimson text-ivory/90 text-base italic leading-relaxed mb-2">
                                "The Church, as early as apostolic times, and then constantly in her Tradition, has illuminated the unity of the divine plan in the two Testaments through typology, which discerns in God's works of the Old Covenant prefigurations of what he accomplished in the fullness of time in the person of his incarnate Son."
                            </p>
                            <p class="font-crimson text-ivory/70 text-sm">
                                — Catechism of the Catholic Church, 128
                            </p>
                        </div>
                        <p class="font-crimson text-ivory text-lg leading-relaxed">
                            Through sacred art, we can visualize these connections and understand how God prepared humanity for the coming of Christ 
                            across centuries of revelation.
                        </p>
                    </div>
                    <div class="relative">
                        <div class="bg-gradient-to-br from-gold/20 to-burgundy/20 rounded-lg p-8 border-2 border-gold/30">
                            <img src="https://page.gensparksite.com/v1/base64_upload/11763b51548ee92becebf007a58ed799" 
                                 alt="The Transfiguration" 
                                 class="rounded-lg shadow-2xl w-full">
                            <p class="font-crimson text-ivory/80 text-sm mt-4 text-center">
                                "The Transfiguration" by Raphael (1516-1520)<br>
                                The divine revelation bridging Old and New Testaments
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Timeline Section -->
        <section id="timeline" class="py-20 bg-gradient-to-b from-burgundy/20 to-midnight">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="font-cinzel text-3xl md:text-4xl text-gold mb-4">Journey Through Salvation</h2>
                    <div class="w-32 h-1 bg-gold mx-auto"></div>
                </div>
                
                <div class="relative">
                    <!-- Timeline Line -->
                    <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold/30"></div>
                    
                    <!-- Timeline Items -->
                    <div class="space-y-12" id="timeline-container">
                        <!-- Timeline items will be dynamically inserted here -->
                    </div>
                </div>
            </div>
        </section>

        <!-- Typologies Gallery Section -->
        <section id="typologies" class="py-20 bg-gradient-to-b from-midnight to-burgundy/20">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-12">
                    <h2 class="font-cinzel text-3xl md:text-4xl text-gold mb-4">The 30 Typologies</h2>
                    <div class="w-32 h-1 bg-gold mx-auto mb-8"></div>
                    
                    <!-- Section Filters -->
                    <div class="flex flex-wrap justify-center gap-4 mb-8">
                        <button onclick="filterTypologies('all')" class="filter-btn active px-6 py-2 font-cinzel text-sm bg-gold text-midnight rounded-full">
                            All Typologies
                        </button>
                        <button onclick="filterTypologies('Creation and Patriarchs')" class="filter-btn px-6 py-2 font-cinzel text-sm border-2 border-gold text-gold rounded-full hover:bg-gold hover:text-midnight">
                            Creation & Patriarchs
                        </button>
                        <button onclick="filterTypologies('Exodus and Covenant')" class="filter-btn px-6 py-2 font-cinzel text-sm border-2 border-gold text-gold rounded-full hover:bg-gold hover:text-midnight">
                            Exodus & Covenant
                        </button>
                        <button onclick="filterTypologies('Kingdom and Prophets')" class="filter-btn px-6 py-2 font-cinzel text-sm border-2 border-gold text-gold rounded-full hover:bg-gold hover:text-midnight">
                            Kingdom & Prophets
                        </button>
                    </div>
                </div>
                
                <!-- Typologies Grid -->
                <div id="typologies-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Typology cards will be dynamically inserted here -->
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-20 bg-gradient-to-b from-burgundy/20 to-midnight">
            <div class="max-w-4xl mx-auto px-4 text-center">
                <h2 class="font-cinzel text-3xl md:text-4xl text-gold mb-4">About This Journey</h2>
                <div class="w-32 h-1 bg-gold mx-auto mb-8"></div>
                
                <p class="font-crimson text-ivory text-lg leading-relaxed mb-6">
                    This digital cathedral presents thirty typological connections between the Old and New Testaments,
                    each illustrated through masterworks of sacred art from the world's greatest museums and churches.
                </p>
                
                <p class="font-crimson text-ivory text-lg leading-relaxed mb-8">
                    Designed for religious education and personal contemplation, this collection invites you to discover
                    the profound unity of Scripture and the continuous thread of God's salvific plan throughout history.
                </p>
                
                <div class="flex justify-center space-x-8">
                    <div class="text-center">
                        <i class="fas fa-palette text-gold text-3xl mb-2"></i>
                        <p class="font-cinzel text-ivory">60 Artworks</p>
                    </div>
                    <div class="text-center">
                        <i class="fas fa-book-bible text-gold text-3xl mb-2"></i>
                        <p class="font-cinzel text-ivory">30 Typologies</p>
                    </div>
                    <div class="text-center">
                        <i class="fas fa-history text-gold text-3xl mb-2"></i>
                        <p class="font-cinzel text-ivory">2000 Years</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-midnight py-8 border-t border-gold/30">
            <div class="max-w-6xl mx-auto px-4 text-center">
                <p class="font-crimson text-ivory/60">
                    <i class="fas fa-cross text-gold mr-2"></i>
                    Created for the glory of God and the education of souls
                    <i class="fas fa-cross text-gold ml-2"></i>
                </p>
            </div>
        </footer>

        <!-- Typology Modal -->
        <div id="typology-modal" class="fixed inset-0 z-50 hidden">
            <div class="absolute inset-0 bg-black/80" onclick="closeModal()"></div>
            <div class="relative h-full overflow-y-auto">
                <div class="min-h-full flex items-center justify-center p-4">
                    <div id="modal-content" class="relative bg-midnight rounded-lg max-w-6xl w-full border-2 border-gold/50">
                        <!-- Modal content will be dynamically inserted here -->
                    </div>
                </div>
            </div>
        </div>

        <!-- Lightbox for Images -->
        <div id="image-lightbox" class="fixed inset-0 z-50 hidden bg-black/95 flex items-center justify-center p-4">
            <button onclick="closeLightbox()" class="absolute top-4 right-4 text-white hover:text-gold text-3xl">
                <i class="fas fa-times"></i>
            </button>
            <img id="lightbox-image" src="" alt="" class="max-w-full max-h-full">
        </div>

        <!-- Scripts -->
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

// Individual typology page
app.get('/typology/:id', (c) => {
  const id = parseInt(c.req.param('id'))
  const typology = getTypologyById(id)
  
  if (!typology) {
    return c.html('<h1>Typology not found</h1>', 404)
  }
  
  // Return a detailed view for individual typology
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${typology.theme} - Salvation History</title>
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
          tailwind.config = {
            theme: {
              extend: {
                fontFamily: {
                  'cinzel': ['Cinzel', 'serif'],
                  'crimson': ['Crimson Text', 'serif']
                },
                colors: {
                  'burgundy': '#800020',
                  'royal-purple': '#663399',
                  'gold': '#FFD700',
                  'ivory': '#FFFFF0',
                  'midnight': '#191970'
                }
              }
            }
          }
        </script>
        <link href="/static/styles.css" rel="stylesheet">
    </head>
    <body class="bg-midnight">
        <div class="min-h-screen py-12 px-4">
            <div class="max-w-6xl mx-auto">
                <a href="/#typologies" class="inline-flex items-center text-gold hover:text-gold/80 mb-8">
                    <i class="fas fa-arrow-left mr-2"></i>
                    <span class="font-cinzel">Back to Gallery</span>
                </a>
                
                <h1 class="font-cinzel text-4xl text-gold text-center mb-8">${typology.theme}</h1>
                
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-burgundy/20 rounded-lg p-6 border-2 border-gold/30">
                        <h2 class="font-cinzel text-2xl text-gold mb-4">Old Testament</h2>
                        <img src="${typology.old_testament.image_url}" alt="${typology.old_testament.title}" class="w-full rounded-lg mb-4">
                        <p class="font-crimson text-ivory">${typology.old_testament.title}</p>
                        <p class="font-crimson text-ivory/80">${typology.old_testament.artist} (${typology.old_testament.year})</p>
                    </div>
                    
                    <div class="bg-burgundy/20 rounded-lg p-6 border-2 border-gold/30">
                        <h2 class="font-cinzel text-2xl text-gold mb-4">New Testament</h2>
                        <img src="${typology.new_testament.image_url}" alt="${typology.new_testament.title}" class="w-full rounded-lg mb-4">
                        <p class="font-crimson text-ivory">${typology.new_testament.title}</p>
                        <p class="font-crimson text-ivory/80">${typology.new_testament.artist} (${typology.new_testament.year})</p>
                    </div>
                </div>
                
                <div class="mt-8 bg-burgundy/20 rounded-lg p-6 border-2 border-gold/30">
                    <h3 class="font-cinzel text-2xl text-gold mb-4">Theological Significance</h3>
                    <p class="font-crimson text-ivory leading-relaxed">${typology.description || 'Description coming soon...'}</p>
                </div>
            </div>
        </div>
    </body>
    </html>
  `)
})

export default app