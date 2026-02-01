/* Tailwind configuration */
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#1e3a8a',
                secondary: '#3b82f6',
                accent: '#0ea5e9',
                dark: '#0f172a',
                light: '#f8fafc'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        }
    }
};

/* Performance Optimization: DOM Content Loaded */
document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images
    if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading support
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers without native lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
});

/* Moved scripts from index.html */

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Scroll Animation with performance optimization
const sections = document.querySelectorAll('.section-fade');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Back to Top Button with debouncing
const backToTopButton = document.getElementById('back-to-top');
let scrollTimeout;

window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.remove('opacity-100', 'visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    }, 100);
}, { passive: true });

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Active Navigation Link with throttling
const navLinks = document.querySelectorAll('.nav-link');
const sections2 = document.querySelectorAll('section');
let navTimeout;

window.addEventListener('scroll', () => {
    clearTimeout(navTimeout);
    navTimeout = setTimeout(() => {
        let current = '';

        sections2.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-nav');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active-nav');
            }
        });
    }, 100);
}, { passive: true });

// Project Modal
const projectModal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');

function showProjectDetails(projectId) {
    let title = '';
    let content = '';

    if (projectId === 'project1') {
        title = 'NexStock - SaaS Stok & Cari Yönetim Sistemi';
        content = `
            <div class="space-y-4">
                <p>KOBİ'ler için geliştirdiğim bulut tabanlı stok takibi ve CRM sistemi. Gerçek zamanlı envanter yönetimi, fatura takibi, AI destekli analizler ve detaylı raporlama özellikleri sunuyor. Modern web teknolojileri kullanılarak ölçeklenebilir ve güvenli bir mimari tasarlandı.</p>
                
                <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="text-lg font-semibold mb-2">🔗 GitHub Repoları:</h4>
                    <div class="flex gap-3">
                        <a href="https://github.com/ZondaX63/NexStock-frontend" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-accent flex items-center gap-1">
                            <i class="fab fa-github"></i> Frontend Repo
                        </a>
                        <a href="https://github.com/ZondaX63/NexStock-backend" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-accent flex items-center gap-1">
                            <i class="fab fa-github"></i> Backend Repo
                        </a>
                    </div>
                </div>
                
                <h4 class="text-lg font-semibold">✨ Öne Çıkan Özellikler:</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>AI Entegrasyonu:</strong> Google Gemini ile akıllı ürün açıklamaları ve fatura OCR taraması</li>
                    <li><strong>Gerçek Zamanlı Dashboard:</strong> Recharts ile dinamik satış ve stok analitiği</li>
                    <li><strong>Envanter Yönetimi:</strong> Kapsamlı stok takibi, düşük stok uyarıları, kategori bazlı organizasyon</li>
                    <li><strong>Cari Hesap:</strong> Müşteri ve tedarikçi yönetimi, alacak/borç takibi</li>
                    <li><strong>Fatura Sistemi:</strong> Otomatik fatura oluşturma, PDF dışa aktarma, tarihçe takibi</li>
                    <li><strong>Çok Para Birimi:</strong> Döviz kurları entegrasyonu ve otomatik güncelleme</li>
                    <li><strong>Raporlama:</strong> Excel dışa aktarma, detaylı iş analitiği, grafiksel dashboard</li>
                    <li><strong>Kullanıcı Yönetimi:</strong> JWT tabanlı kimlik doğrulama, rol bazlı erişim kontrolü</li>
                </ul>
                
                <h4 class="text-lg font-semibold">🛠️ Teknoloji Stack:</h4>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <h5 class="font-medium mb-2">Frontend:</h5>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">React 18</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Material-UI</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Recharts</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Axios</span>
                        </div>
                    </div>
                    <div>
                        <h5 class="font-medium mb-2">Backend:</h5>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Node.js</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Express.js</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">MongoDB</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Mongoose</span>
                        </div>
                    </div>
                </div>
                <div class="mt-2">
                    <h5 class="font-medium mb-2">Diğer Teknolojiler:</h5>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Google Gemini AI</span>
                        <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">JWT Auth</span>
                        <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Bcrypt</span>
                        <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">ExcelJS</span>
                        <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Jest</span>
                    </div>
                </div>
                
                <h4 class="text-lg font-semibold">🏗️ Mimari Özellikler:</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li>RESTful API tasarımı ile frontend-backend ayrımı</li>
                    <li>MongoDB ile esnek NoSQL veritabanı yapısı</li>
                    <li>Middleware tabanlı güvenlik katmanı</li>
                    <li>Responsive tasarım ve mobil uyumlu arayüz</li>
                    <li>Jest ile kapsamlı test coverage</li>
                </ul>
            </div>
        `;
    } else if (projectId === 'project2') {
        title = 'Riders Social Media - Motosiklet Sosyal Platform';
        content = `
            <div class="space-y-4">
                <p>Motosiklet tutkunları için geliştirdiğim Flutter tabanlı mobil sosyal medya platformu. Gerçek zamanlı konum paylaşımı, rota kaydetme, hikaye paylaşımı ve anlık mesajlaşma gibi kapsamlı sosyal özellikler sunuyor. Socket.IO ile gerçek zamanlı etkileşim ve MongoDB geospatial indexing ile konum tabanlı özellikler.</p>
                
                <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="text-lg font-semibold mb-2">🔗 GitHub Repoları:</h4>
                    <div class="flex gap-3">
                        <a href="https://github.com/ZondaX63/riders-app-frontend" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-accent flex items-center gap-1">
                            <i class="fab fa-github"></i> Frontend Repo
                        </a>
                        <a href="https://github.com/ZondaX63/riders-app-backend" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-accent flex items-center gap-1">
                            <i class="fab fa-github"></i> Backend Repo
                        </a>
                    </div>
                </div>
                
                <h4 class="text-lg font-semibold">✨ Öne Çıkan Özellikler:</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>Gerçek Zamanlı Konum:</strong> Socket.IO ile canlı lokasyon paylaşımı ve takibi</li>
                    <li><strong>Rota Yönetimi:</strong> Google Maps entegrasyonu, rota kaydetme ve paylaşma</li>
                    <li><strong>Sosyal Etkileşim:</strong> Gönderi, yorum, beğeni, takip sistemi</li>
                    <li><strong>Hikaye Özelliği:</strong> 24 saatlik hikaye paylaşımı ve görüntüleme</li>
                    <li><strong>Anlık Mesajlaşma:</strong> Socket.IO ile gerçek zamanlı chat sistemi</li>
                    <li><strong>Yakındaki Kullanıcılar:</strong> Geospatial sorgular ile yakındaki sürücüleri bulma</li>
                    <li><strong>Profil Yönetimi:</strong> Motosiklet bilgileri, istatistikler, rozetler</li>
                    <li><strong>Grup Sürüşleri:</strong> Etkinlik oluşturma ve katılım yönetimi</li>
                </ul>
                
                <h4 class="text-lg font-semibold">🛠️ Teknoloji Stack:</h4>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <h5 class="font-medium mb-2">Mobile (Frontend):</h5>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Flutter 3.x</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Dart</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">flutter_map</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">socket_io_client</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">geolocator</span>
                        </div>
                    </div>
                    <div>
                        <h5 class="font-medium mb-2">Backend:</h5>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Node.js</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Express.js</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Socket.IO</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">MongoDB</span>
                        </div>
                    </div>
                </div>
                <div class="mt-2">
                    <h5 class="font-medium mb-2">Özel Özellikler:</h5>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Google Maps API</span>
                        <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Geospatial Queries</span>
                        <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">JWT Auth</span>
                        <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Multer</span>
                        <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Bcrypt</span>
                    </div>
                </div>
                
                <h4 class="text-lg font-semibold">🏗️ Mimari Özellikler:</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li>MongoDB 2dsphere indexing ile optimize edilmiş konum sorguları</li>
                    <li>Socket.IO namespace'leri ile organize edilmiş gerçek zamanlı iletişim</li>
                    <li>RESTful API + WebSocket hibrid mimarisi</li>
                    <li>JWT tabanlı güvenli kimlik doğrulama sistemi</li>
                    <li>Flutter Provider pattern ile state management</li>
                    <li>Dark theme ve modern, kullanıcı dostu arayüz</li>
                    <li>Comprehensive API documentation</li>
                </ul>
            </div>
        `;
    } else if (projectId === 'project3') {
        title = 'Cloud Resume Challenge - AWS DevOps Projesi';
        content = `
            <div class="space-y-4">
                <p>Bu portföy sitesinin AWS bulut altyapısında tamamen otomatik deploy edilmesini sağlayan DevOps projesi. GitHub Actions ile CI/CD pipeline kurarak, her kod değişikliğinde otomatik olarak AWS S3'e yükleme, CloudFront invalidation ve Route 53 üzerinden domain yönlendirmesi yapılmasını sağladım.</p>
                
                <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="text-lg font-semibold mb-2">🔗 GitHub Repo:</h4>
                    <a href="https://github.com/ZondaX63/cloud-resume-challange" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-accent flex items-center gap-1">
                        <i class="fab fa-github"></i> Repository
                    </a>
                </div>
                
                <h4 class="text-lg font-semibold">✨ Proje Özellikleri:</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li><strong>AWS S3 Hosting:</strong> Statik web sitesi barındırma ve versiyonlama</li>
                    <li><strong>CloudFront CDN:</strong> Global edge locations ile hızlı içerik dağıtımı</li>
                    <li><strong>Route 53 DNS:</strong> Custom domain yönetimi ve DNS yapılandırması</li>
                    <li><strong>GitHub Actions CI/CD:</strong> Otomatik build, test ve deployment pipeline</li>
                    <li><strong>SSL/TLS:</strong> HTTPS ile güvenli bağlantı</li>
                    <li><strong>SEO Optimizasyonu:</strong> Meta tags, sitemap.xml, robots.txt, Open Graph</li>
                    <li><strong>Performance:</strong> Lazy loading, caching, GZIP compression</li>
                    <li><strong>PWA Support:</strong> manifest.json ile mobil app-like experience</li>
                </ul>
                
                <h4 class="text-lg font-semibold">🛠️ Teknoloji Stack:</h4>
                <div class="space-y-3">
                    <div>
                        <h5 class="font-medium mb-2">Frontend:</h5>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">HTML5</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">CSS3</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">JavaScript</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Tailwind CSS</span>
                        </div>
                    </div>
                    <div>
                        <h5 class="font-medium mb-2">AWS Services:</h5>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">S3</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">CloudFront</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Route 53</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Certificate Manager</span>
                        </div>
                    </div>
                    <div>
                        <h5 class="font-medium mb-2">DevOps:</h5>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">GitHub Actions</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">CI/CD Pipeline</span>
                            <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Git</span>
                        </div>
                    </div>
                </div>
                
                <h4 class="text-lg font-semibold">🏗️ Mimari & DevOps Yaklaşımı:</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Infrastructure as Code prensipleri ile yapılandırma</li>
                    <li>GitHub Actions workflow ile otomatik deployment</li>
                    <li>CloudFront cache invalidation stratejisi</li>
                    <li>S3 bucket policy ve CORS yapılandırması</li>
                    <li>Multi-region availability ve disaster recovery</li>
                    <li>Cost optimization ve AWS best practices</li>
                    <li>Security headers (.htaccess) ve HSTS implementasyonu</li>
                </ul>
                
                <h4 class="text-lg font-semibold">📊 SEO & Performance:</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Google Search Console entegrasyonu</li>
                    <li>Structured data (JSON-LD) implementasyonu</li>
                    <li>Open Graph ve Twitter Cards meta tags</li>
                    <li>Lighthouse score optimization</li>
                    <li>Core Web Vitals iyileştirmeleri</li>
                </ul>
            </div>
        `;
    }

    modalTitle.textContent = title;
    modalContent.innerHTML = content;
    projectModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    projectModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});
