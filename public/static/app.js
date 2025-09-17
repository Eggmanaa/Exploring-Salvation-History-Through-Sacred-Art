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



// Render typologies grid
function renderTypologies(filter = 'all') {
    const grid = document.getElementById('typologies-grid');
    if (!grid) return;
    
    const filteredTypologies = filter === 'all' 
        ? typologiesData 
        : typologiesData.filter(t => t.category === filter);
    
    // Group by category for better display
    const categoryIcons = {
        'Christological': 'fa-cross',
        'Marian': 'fa-crown',
        'Prophetic and Ecclesial': 'fa-church',
        'Sacramental': 'fa-wine-glass'
    };
    
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
                    <span class="text-ivory/60 font-crimson text-xs">
                        <i class="fas ${categoryIcons[typology.category] || 'fa-book'} mr-1"></i>
                        ${typology.category}
                    </span>
                </div>
                <h3 class="font-cinzel text-lg text-gold mb-2">${typology.theme}</h3>
                <p class="font-crimson text-ivory/80 text-sm line-clamp-2">
                    ${typology.theological_significance ? typology.theological_significance.substring(0, 100) + '...' : 'Click to explore this typological connection...'}
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

// Open typology modal with enhanced content
function openTypologyModal(id) {
    const typology = typologiesData.find(t => t.id === id);
    if (!typology) return;
    
    const modal = document.getElementById('typology-modal');
    const modalContent = document.getElementById('modal-content');
    
    // Category icons
    const categoryIcons = {
        'Christological': 'fa-cross',
        'Marian': 'fa-crown',
        'Prophetic and Ecclesial': 'fa-church',
        'Sacramental': 'fa-wine-glass'
    };
    
    modalContent.innerHTML = `
        <button onclick="closeModal()" class="absolute top-4 right-4 text-ivory hover:text-gold text-2xl z-10">
            <i class="fas fa-times"></i>
        </button>
        
        <div class="p-8 max-h-[90vh] overflow-y-auto">
            <!-- Header -->
            <div class="text-center mb-8">
                <span class="text-gold font-cinzel text-sm">
                    <i class="fas ${categoryIcons[typology.category] || 'fa-book'} mr-2"></i>
                    ${typology.category} Typology #${typology.id}
                </span>
                <h2 class="font-cinzel text-3xl text-gold mt-2">${typology.theme}</h2>
            </div>
            
            <!-- Images -->
            <div class="grid md:grid-cols-2 gap-8 mb-8">
                <!-- Old Testament -->
                <div class="space-y-4">
                    <h3 class="font-cinzel text-xl text-gold text-center">Old Testament Type</h3>
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
                    ${typology.type_description ? `
                        <div class="bg-midnight/50 rounded p-4">
                            <p class="font-crimson text-ivory leading-relaxed text-sm">
                                ${typology.type_description}
                            </p>
                        </div>
                    ` : ''}
                    ${typology.scripture_ot ? `
                        <div class="bg-burgundy/30 rounded p-3 border-l-4 border-gold">
                            <p class="font-crimson text-ivory/80 text-sm">
                                <i class="fas fa-scroll text-gold mr-2"></i>
                                <strong>Scripture:</strong> ${typology.scripture_ot}
                            </p>
                        </div>
                    ` : ''}
                </div>
                
                <!-- New Testament -->
                <div class="space-y-4">
                    <h3 class="font-cinzel text-xl text-gold text-center">New Testament Antitype</h3>
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
                    ${typology.antitype_description ? `
                        <div class="bg-midnight/50 rounded p-4">
                            <p class="font-crimson text-ivory leading-relaxed text-sm">
                                ${typology.antitype_description}
                            </p>
                        </div>
                    ` : ''}
                    ${typology.scripture_nt ? `
                        <div class="bg-burgundy/30 rounded p-3 border-l-4 border-gold">
                            <p class="font-crimson text-ivory/80 text-sm">
                                <i class="fas fa-scroll text-gold mr-2"></i>
                                <strong>Scripture:</strong> ${typology.scripture_nt}
                            </p>
                        </div>
                    ` : ''}
                </div>
            </div>
            
            <!-- Key Parallels -->
            ${typology.key_parallels && typology.key_parallels.length > 0 ? `
                <div class="bg-burgundy/20 rounded-lg p-6 border border-gold/30 mb-6">
                    <h3 class="font-cinzel text-xl text-gold mb-4">
                        <i class="fas fa-link mr-2"></i>Key Parallels
                    </h3>
                    <ul class="space-y-2">
                        ${typology.key_parallels.map(parallel => `
                            <li class="font-crimson text-ivory flex items-start">
                                <i class="fas fa-chevron-right text-gold mt-1 mr-3 flex-shrink-0"></i>
                                <span>${parallel}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}
            
            <!-- Key Scripture Verses -->
            ${typology.key_scripture_verses && typology.key_scripture_verses.length > 0 ? `
                <div class="bg-midnight/70 rounded-lg p-6 border border-gold/30 mb-6">
                    <h3 class="font-cinzel text-xl text-gold mb-4">
                        <i class="fas fa-book-open mr-2"></i>Key Scripture Verses
                    </h3>
                    <div class="space-y-3">
                        ${typology.key_scripture_verses.map(verse => `
                            <div class="font-crimson text-ivory border-l-4 border-gold/50 pl-4">
                                <p class="italic leading-relaxed">"${verse}"</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <!-- Saint Quotes -->
            ${typology.saint_quotes && typology.saint_quotes.length > 0 ? `
                <div class="bg-burgundy/40 rounded-lg p-6 border border-gold/30 mb-6">
                    <h3 class="font-cinzel text-xl text-gold mb-4">
                        <i class="fas fa-quote-right mr-2"></i>Wisdom of the Saints
                    </h3>
                    <div class="space-y-4">
                        ${typology.saint_quotes.map(quote => `
                            <div class="relative pl-8">
                                <i class="fas fa-cross absolute left-0 top-1 text-gold/50"></i>
                                <blockquote class="font-crimson text-ivory italic leading-relaxed">
                                    "${quote.text}"
                                </blockquote>
                                <p class="font-cinzel text-gold text-sm mt-2 text-right">
                                    — ${quote.saint}
                                </p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <!-- Theological Significance -->
            ${typology.theological_significance ? `
                <div class="bg-midnight/50 rounded-lg p-6 border border-gold/30 mb-6">
                    <h3 class="font-cinzel text-xl text-gold mb-4">
                        <i class="fas fa-bible mr-2"></i>Theological Significance
                    </h3>
                    <p class="font-crimson text-ivory leading-relaxed">${typology.theological_significance}</p>
                </div>
            ` : ''}
            
            <!-- Discussion Questions -->
            ${typology.discussion_questions && typology.discussion_questions.length > 0 ? `
                <div class="bg-burgundy/30 rounded-lg p-6 border border-gold/30 mb-6">
                    <h3 class="font-cinzel text-xl text-gold mb-4">
                        <i class="fas fa-comments mr-2"></i>Discussion Questions for Reflection
                    </h3>
                    <ol class="space-y-3">
                        ${typology.discussion_questions.map((q, index) => `
                            <li class="font-crimson text-ivory">
                                <span class="text-gold font-bold">${index + 1}.</span> ${q.question}
                            </li>
                        `).join('')}
                    </ol>
                </div>
            ` : ''}
            
            <!-- Navigation -->
            <div class="flex justify-between mt-8 pt-6 border-t border-gold/30">
                ${typology.id > 1 ? `
                    <button onclick="openTypologyModal(${typology.id - 1})" class="flex items-center text-gold hover:text-gold/80 transition-colors">
                        <i class="fas fa-chevron-left mr-2"></i>
                        <span class="font-cinzel">Previous Typology</span>
                    </button>
                ` : '<div></div>'}
                
                <button onclick="closeModal()" class="font-cinzel text-ivory hover:text-gold transition-colors">
                    <i class="fas fa-th mr-2"></i>
                    Back to Gallery
                </button>
                
                ${typology.id < typologiesData.length ? `
                    <button onclick="openTypologyModal(${typology.id + 1})" class="flex items-center text-gold hover:text-gold/80 transition-colors">
                        <span class="font-cinzel">Next Typology</span>
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