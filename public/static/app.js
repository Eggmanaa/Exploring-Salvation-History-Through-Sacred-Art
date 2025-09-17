// Global variables
let typologiesData = [];
let currentFilter = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', async () => {
    // Load typologies data
    await loadTypologies();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize components
    initializeTimeline();
    renderTypologies();
    
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('main-nav').classList.remove('hidden');
    }, 1500);
});

// Load typologies data from API
async function loadTypologies() {
    try {
        const response = await axios.get('/api/typologies');
        typologiesData = response.data.typologies;
    } catch (error) {
        console.error('Error loading typologies:', error);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link, #mobile-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Close mobile menu if open
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
    
    // Scroll effects
    window.addEventListener('scroll', handleScroll);
}

// Handle scroll effects
function handleScroll() {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 100) {
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('shadow-lg');
    }
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Initialize timeline
function initializeTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    if (!timelineContainer) return;
    
    const timelineEvents = [
        {
            period: 'Creation & Patriarchs',
            date: 'Genesis 1-22',
            description: 'The foundation of salvation history begins with creation, the fall, and God\'s covenant with the patriarchs.',
            icon: 'fa-seedling',
            side: 'left'
        },
        {
            period: 'Exodus & Covenant',
            date: 'Exodus - Joshua',
            description: 'God liberates His people from slavery and establishes His covenant through the Law.',
            icon: 'fa-tablets',
            side: 'right'
        },
        {
            period: 'Kingdom & Prophets',
            date: '1 Samuel - Malachi',
            description: 'The establishment of the Davidic kingdom and the prophetic preparation for the Messiah.',
            icon: 'fa-crown',
            side: 'left'
        },
        {
            period: 'The Incarnation',
            date: 'The Gospels',
            description: 'The fulfillment of all typologies in the person and work of Jesus Christ.',
            icon: 'fa-star',
            side: 'right'
        }
    ];
    
    timelineContainer.innerHTML = timelineEvents.map(event => `
        <div class="flex items-center ${event.side === 'right' ? 'flex-row-reverse' : ''}">
            <div class="flex-1 ${event.side === 'right' ? 'text-right pr-8' : 'pl-8'}">
                <div class="bg-burgundy/20 rounded-lg p-6 border-2 border-gold/30 hover:border-gold transition-all">
                    <div class="flex items-center ${event.side === 'right' ? 'justify-end' : ''}">
                        <i class="fas ${event.icon} text-gold text-2xl ${event.side === 'right' ? 'ml-3' : 'mr-3'}"></i>
                        <h3 class="font-cinzel text-xl text-gold">${event.period}</h3>
                    </div>
                    <p class="font-crimson text-ivory/80 text-sm mt-2">${event.date}</p>
                    <p class="font-crimson text-ivory mt-3">${event.description}</p>
                </div>
            </div>
            <div class="relative flex items-center justify-center">
                <div class="w-4 h-4 bg-gold rounded-full border-4 border-midnight"></div>
            </div>
            <div class="flex-1"></div>
        </div>
    `).join('');
}

// Render typologies grid
function renderTypologies(filter = 'all') {
    const grid = document.getElementById('typologies-grid');
    if (!grid) return;
    
    const filteredTypologies = filter === 'all' 
        ? typologiesData 
        : typologiesData.filter(t => t.section === filter);
    
    grid.innerHTML = filteredTypologies.map(typology => `
        <div class="typology-card bg-burgundy/20 rounded-lg overflow-hidden border-2 border-gold/30 hover:border-gold transition-all transform hover:scale-105 cursor-pointer"
             onclick="openTypologyModal(${typology.id})">
            <div class="relative">
                <!-- Split image display -->
                <div class="grid grid-cols-2 h-48">
                    <div class="relative overflow-hidden">
                        <img src="${typology.old_testament.image_url}" 
                             alt="${typology.old_testament.title}"
                             class="w-full h-full object-cover"
                             loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <span class="absolute bottom-2 left-2 text-xs text-ivory/80 font-crimson">Old Testament</span>
                    </div>
                    <div class="relative overflow-hidden border-l-2 border-gold/50">
                        <img src="${typology.new_testament.image_url}" 
                             alt="${typology.new_testament.title}"
                             class="w-full h-full object-cover"
                             loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <span class="absolute bottom-2 right-2 text-xs text-ivory/80 font-crimson">New Testament</span>
                    </div>
                </div>
                <!-- Golden divider -->
                <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gold/50"></div>
            </div>
            <div class="p-6">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-gold font-cinzel text-sm">#${typology.id}</span>
                    <span class="text-ivory/60 font-crimson text-xs">${typology.section}</span>
                </div>
                <h3 class="font-cinzel text-lg text-gold mb-2">${typology.theme}</h3>
                <p class="font-crimson text-ivory/80 text-sm line-clamp-2">
                    ${typology.description ? typology.description.substring(0, 100) + '...' : 'Click to explore this typological connection...'}
                </p>
            </div>
        </div>
    `).join('');
}

// Filter typologies
function filterTypologies(filter) {
    currentFilter = filter;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-gold', 'text-midnight');
        btn.classList.add('border-2', 'border-gold', 'text-gold');
    });
    
    event.target.classList.add('active', 'bg-gold', 'text-midnight');
    event.target.classList.remove('border-2', 'border-gold', 'text-gold');
    
    // Render filtered typologies
    renderTypologies(filter);
}

// Open typology modal
function openTypologyModal(id) {
    const typology = typologiesData.find(t => t.id === id);
    if (!typology) return;
    
    const modal = document.getElementById('typology-modal');
    const modalContent = document.getElementById('modal-content');
    
    modalContent.innerHTML = `
        <button onclick="closeModal()" class="absolute top-4 right-4 text-ivory hover:text-gold text-2xl z-10">
            <i class="fas fa-times"></i>
        </button>
        
        <div class="p-8">
            <!-- Header -->
            <div class="text-center mb-8">
                <span class="text-gold font-cinzel text-sm">Typology #${typology.id}</span>
                <h2 class="font-cinzel text-3xl text-gold mt-2">${typology.theme}</h2>
                <p class="font-crimson text-ivory/60 mt-2">${typology.section}</p>
            </div>
            
            <!-- Images -->
            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <!-- Old Testament -->
                <div class="space-y-4">
                    <h3 class="font-cinzel text-xl text-gold text-center">Old Testament</h3>
                    <div class="relative group cursor-pointer" onclick="openLightbox('${typology.old_testament.image_url}')">
                        <img src="${typology.old_testament.image_url}" 
                             alt="${typology.old_testament.title}"
                             class="w-full rounded-lg shadow-xl">
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all rounded-lg flex items-center justify-center">
                            <i class="fas fa-expand text-white text-2xl opacity-0 group-hover:opacity-100 transition-all"></i>
                        </div>
                    </div>
                    <div class="text-center">
                        <p class="font-cinzel text-ivory">${typology.old_testament.title}</p>
                        <p class="font-crimson text-ivory/60 text-sm">${typology.old_testament.artist} (${typology.old_testament.year})</p>
                    </div>
                    ${typology.scripture_ot ? `
                        <div class="bg-midnight/50 rounded p-3">
                            <p class="font-crimson text-ivory/80 text-sm">
                                <i class="fas fa-book-open text-gold mr-2"></i>
                                ${typology.scripture_ot}
                            </p>
                        </div>
                    ` : ''}
                </div>
                
                <!-- New Testament -->
                <div class="space-y-4">
                    <h3 class="font-cinzel text-xl text-gold text-center">New Testament</h3>
                    <div class="relative group cursor-pointer" onclick="openLightbox('${typology.new_testament.image_url}')">
                        <img src="${typology.new_testament.image_url}" 
                             alt="${typology.new_testament.title}"
                             class="w-full rounded-lg shadow-xl">
                        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all rounded-lg flex items-center justify-center">
                            <i class="fas fa-expand text-white text-2xl opacity-0 group-hover:opacity-100 transition-all"></i>
                        </div>
                    </div>
                    <div class="text-center">
                        <p class="font-cinzel text-ivory">${typology.new_testament.title}</p>
                        <p class="font-crimson text-ivory/60 text-sm">${typology.new_testament.artist} (${typology.new_testament.year})</p>
                    </div>
                    ${typology.scripture_nt ? `
                        <div class="bg-midnight/50 rounded p-3">
                            <p class="font-crimson text-ivory/80 text-sm">
                                <i class="fas fa-book-open text-gold mr-2"></i>
                                ${typology.scripture_nt}
                            </p>
                        </div>
                    ` : ''}
                </div>
            </div>
            
            <!-- Description -->
            ${typology.description ? `
                <div class="bg-burgundy/30 rounded-lg p-6 border border-gold/30">
                    <h3 class="font-cinzel text-xl text-gold mb-4">Theological Significance</h3>
                    <p class="font-crimson text-ivory leading-relaxed">${typology.description}</p>
                </div>
            ` : ''}
            
            <!-- Navigation -->
            <div class="flex justify-between mt-8">
                ${typology.id > 1 ? `
                    <button onclick="openTypologyModal(${typology.id - 1})" class="flex items-center text-gold hover:text-gold/80">
                        <i class="fas fa-chevron-left mr-2"></i>
                        <span class="font-cinzel">Previous</span>
                    </button>
                ` : '<div></div>'}
                
                ${typology.id < 30 ? `
                    <button onclick="openTypologyModal(${typology.id + 1})" class="flex items-center text-gold hover:text-gold/80">
                        <span class="font-cinzel">Next</span>
                        <i class="fas fa-chevron-right ml-2"></i>
                    </button>
                ` : '<div></div>'}
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

// Close modal
function closeModal() {
    const modal = document.getElementById('typology-modal');
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

// Open image lightbox
function openLightbox(imageUrl) {
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    lightboxImage.src = imageUrl;
    lightbox.classList.remove('hidden');
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('image-lightbox');
    lightbox.classList.add('hidden');
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeLightbox();
    }
});