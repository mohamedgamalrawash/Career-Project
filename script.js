
const services = [
  {
    icon: '🔍',
    title: 'تدقيق العمليات الشامل',
    desc: 'بنروح موقعك، نشوف كل حاجة بعيوننا، ونطلّع تقرير واضح بكل نقاط الخسارة والفرص المخفية — في 5 أيام عمل.',
    tags: ['تقرير تفصيلي','خريطة المشاكل','خطة عمل 90 يوم','ROI مقدّر']
  },
  {
    icon: '👥',
    title: 'تدريب وتطوير الفريق',
    desc: 'برنامج تدريب متكامل لكل أعضاء الفريق من المطبخ لحتى الصالة — بيرفع الكفاءة ويقلل الأخطاء ويحسّن تجربة الزبون.',
    tags: ['تدريب عملي','اختبار الأداء','شهادات','متابعة شهرية']
  },
  {
    icon: '✅',
    title: 'أنظمة ضبط الجودة',
    desc: 'إنشاء نظام شامل لضمان ثبات الجودة في كل طلب — بمعايير موثّقة وإجراءات واضحة لكل عضو في الفريق.',
    tags: ['معايير HACCP','بطاقات قياسية','تدقيق يومي','تقارير أداء']
  },
  {
    icon: '📋',
    title: 'هندسة وتحسين القائمة',
    desc: 'تحليل علمي للـ menu لتحديد الأصناف الأعلى ربحاً وإعادة هيكلة القائمة بطريقة تزيد متوسط الطلب.',
    tags: ['تحليل الربحية','هندسة الـ Menu','تسعير صحيح','تصميم جذاب']
  },
  {
    icon: '📖',
    title: 'بناء الـ SOPs',
    desc: 'توثيق كل إجراءات العمل في مطعمك في دليل تشغيلي شامل يضمن الاستمرارية بدون الحاجة لتدخّلك المستمر.',
    tags: ['Operations Manual','دليل الموظف','إجراءات موثّقة','قابل للتطوير']
  }
];

function showService(index) {
  const items = document.querySelectorAll('.service-item');
  items.forEach((el, i) => el.classList.toggle('active', i === index));
  const svc = services[index];
  const detail = document.getElementById('serviceDetail');
  detail.innerHTML = `
    <div class="svc-icon">${svc.icon}</div>
    <h3>${svc.title}</h3>
    <p>${svc.desc}</p>
    <div class="svc-deliverables">${svc.tags.map(t=>`<span class="svc-tag">${t}</span>`).join('')}</div>
  `;
}

function toggleMobileMenu() {
  const links = document.querySelector('.nav-links');
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  links.style.flexDirection = 'column';
  links.style.position = 'absolute';
  links.style.top = '68px';
  links.style.right = '0';
  links.style.left = '0';
  links.style.background = '#fff';
  links.style.padding = '1rem 2rem';
  links.style.borderBottom = '1px solid #eee';
  links.style.zIndex = '99';
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

const sections = ['hero','problems','services','training','segments','insights','contact'];
const dots = document.querySelectorAll('.page-dot');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      dots.forEach((d,i) => d.classList.toggle('active', sections[i] === id));
    }
  });
}, { threshold: 0.4 });

sections.forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    document.getElementById(sections[i])?.scrollIntoView({behavior:'smooth'});
  });
});