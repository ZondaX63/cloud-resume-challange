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

// Scroll Animation
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

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Active Navigation Link
const navLinks = document.querySelectorAll('.nav-link');
const sections2 = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
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
});

// Project Modal
const projectModal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');

function showProjectDetails(projectId) {
    let title = '';
    let content = '';

    if (projectId === 'project1') {
        title = 'Motorcu Sosyal Medya Uygulaması';
        content = `
            <div class="space-y-4">
                <p>Bu projede, motorcu kullanıcılar için özel olarak tasarlanmış bir sosyal medya ve rota paylaşım uygulaması geliştiriyorum. Uygulama, Flutter framework'ü kullanılarak cross-platform olarak geliştirilmekte ve backend tarafında Node.js ile MongoDB veritabanı kullanılmaktadır.</p>
                <h4 class="text-lg font-semibold">Özellikler:</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Kullanıcıların anlık konum paylaşımı yapabilmesi</li>
                    <li>Arkadaş listesi oluşturabilme</li>
                    <li>Gönderiler ve hikâyeler paylaşabilme</li>
                    <li>Motorcu rotalarını kaydetme ve paylaşma</li>
                    <li>Grup sürüşleri organize etme</li>
                </ul>
                <h4 class="text-lg font-semibold">Kullanılan Teknolojiler:</h4>
                <div class="flex flex-wrap gap-2">
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Flutter</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Dart</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Node.js</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Express</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">MongoDB</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">JWT Authentication</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Google Maps API</span>
                </div>
            </div>
        `;
    } else if (projectId === 'project2') {
        title = 'TurtleBot3 Temizlik Robotu';
        content = `
            <div class="space-y-4">
                <p>Bu akademik projede, ROS Noetic ve TurtleBot3 kullanarak bir temizlik robotu simülasyonu geliştirdim. Robot, haritalama (SLAM), duvar takibi ve otonom dolaşım davranışlarını simülasyon ortamında başarıyla gerçekleştirebilmektedir.</p>
                <h4 class="text-lg font-semibold">Özellikler:</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li>SLAM (Eşzamanlı Konumlandırma ve Haritalama) ile ortam haritası çıkarma</li>
                    <li>Duvar takip algoritması ile sistematik temizlik rotası oluşturma</li>
                    <li>Engel algılama ve çarpışma önleme</li>
                    <li>Otonom dolaşım ve rota planlama</li>
                </ul>
                <h4 class="text-lg font-semibold">Kullanılan Teknolojiler:</h4>
                <div class="flex flex-wrap gap-2">
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">ROS Noetic</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">TurtleBot3</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Gazebo Simülasyon</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">SLAM</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Python</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">C++</span>
                </div>
            </div>
        `;
    } else if (projectId === 'project3') {
        title = 'War Strategy Optimization';
        content = `
            <div class="space-y-4">
                <p>Bu akademik projede, War Strategy Optimization algoritmasını ISOLET veri seti üzerinde kullanarak özellik seçimi yaptım ve bu işlemde cuML (NVIDIA RAPIDS) ile GPU hızlandırma sağladım.</p>
                <h4 class="text-lg font-semibold">Proje Detayları:</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li>ISOLET veri seti üzerinde özellik seçimi ve boyut indirgeme</li>
                    <li>War Strategy Optimization algoritmasının implementasyonu</li>
                    <li>GPU hızlandırma ile işlem süresinin optimize edilmesi</li>
                    <li>Sonuçların analizi ve değerlendirilmesi</li>
                </ul>
                <h4 class="text-lg font-semibold">Kullanılan Teknolojiler:</h4>
                <div class="flex flex-wrap gap-2">
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Python</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">NVIDIA RAPIDS</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">cuML</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Pandas</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">NumPy</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Scikit-learn</span>
                </div>
            </div>
        `;
    } else if (projectId === 'project4') {
        title = 'Minimal API Servisleri';
        content = `
            <div class="space-y-4">
                <p>Bu kişisel projelerimde, Python, SQLite ve JSON tabanlı veri yönetimi gibi teknolojilerle minimal API servisleri geliştiriyor, küçük sistemleri uçtan uca inşa etmeyi deniyorum.</p>
                <h4 class="text-lg font-semibold">Proje Detayları:</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Hafif ve hızlı API servisleri tasarımı</li>
                    <li>SQLite ile yerel veritabanı yönetimi</li>
                    <li>JSON tabanlı veri alışverişi</li>
                    <li>Minimal bağımlılıklarla çalışan sistemler</li>
                    <li>Temiz kod ve SOLID prensiplerine uygun geliştirme</li>
                </ul>
                <h4 class="text-lg font-semibold">Kullanılan Teknolojiler:</h4>
                <div class="flex flex-wrap gap-2">
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Python</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">Flask/FastAPI</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">SQLite</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">JSON</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">RESTful API</span>
                </div>
            </div>
        `;
    } else if (projectId === 'project5') {
        title = 'WordPress Web Siteleri';
        content = `
            <div class="space-y-4">
                <p>Freelance web geliştirici olarak, çeşitli müşteriler için WordPress tabanlı web siteleri tasarladım ve geliştirdim. Bu projeler, kullanıcı dostu arayüzler ve işlevsel çözümler sunmayı amaçlamaktadır.</p>
                <h4 class="text-lg font-semibold">Proje Detayları:</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Müşteri ihtiyaçlarına göre özelleştirilmiş WordPress temaları</li>
                    <li>Responsive tasarım ile tüm cihazlarda uyumlu çalışma</li>
                    <li>SEO optimizasyonu</li>
                    <li>Özel eklenti geliştirme ve entegrasyonu</li>
                    <li>İçerik yönetim sistemi eğitimi</li>
                </ul>
                <h4 class="text-lg font-semibold">Kullanılan Teknolojiler:</h4>
                <div class="flex flex-wrap gap-2">
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">WordPress</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">PHP</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">HTML/CSS</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">JavaScript</span>
                    <span class="bg-blue-100 text-primary px-3 py-1 rounded text-sm font-medium">MySQL</span>
                </div>
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

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // This is a demo form - in a real application, you would send this data to a server
    alert(`Teşekkürler ${name}! Mesajınız alındı. En kısa sürede size dönüş yapacağım.`);
    contactForm.reset();
});
