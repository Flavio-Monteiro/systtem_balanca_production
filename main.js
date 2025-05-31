// Base de dados de produtos
const produtos = {
    "1096": {"nome": "BEIJINHO"},
    "17834": {"nome": "BISCOITO CACETINHO"},
    "5913": {"nome": "BISCOITO CHAMPAGNE"},
    "3056": {"nome": "BOLACHA CAMELO"},
    "7481": {"nome": "BOLACHA DE COCO"},
    "7207": {"nome": "BOLACHA MIMOSA"},
    "2566": {"nome": "BOLACHA REG INTEGRAL"},
    "7214": {"nome": "BOLACHA REGALIA"},
    "7153": {"nome": "BOLACHA ROSQUINHA"},
    "9300": {"nome": "BOLINHO DE BACALHAU"},
    "9324": {"nome": "BOLINHO DE CHARQUE"},
    "4724": {"nome": "BOLINHO DE PIZZA"},
    "9331": {"nome": "BOLINHO DE QUEIJO"},
    "17874": {"nome": "BOLO AIPIM KG"},
    "73309": {"nome": "BOLO BACIA C/1 UN"},
    "73305": {"nome": "BOLO BACIA C/4 UN"},
    "17870": {"nome": "BOLO CAÇAROLA C/QUEIJO"},
    "1427": {"nome": "BOLO CENOURA"},
    "17320": {"nome": "BOLO CENOURA SIMPLES"},
    "17295": {"nome": "BOLO CHOC CREMOSO"},
    "6927": {"nome": "BOLO COM LARANJA"},
    "1001": {"nome": "BOLO COM PASSAS"},
    "9751": {"nome": "BOLO DE ABACAXI"},
    "7085": {"nome": "BOLO DE AMENDOIM"},
    "9492": {"nome": "BOLO DE BANANA"},
    "7450": {"nome": "BOLO DE CHOCOLATE"},
    "7016": {"nome": "BOLO DE COCADA"},
    "3674": {"nome": "BOLO DE FRUTAS VERMELHAS"},
    "6293": {"nome": "BOLO DE MACAXEIRA"},
    "6347": {"nome": "BOLO DE MASSA PUBA"},
    "6361": {"nome": "BOLO DE MILHO"},
    "6198": {"nome": "BOLO FORMIGUEIRO"},
    "6149": {"nome": "BOLO GOIABADA"},
    "2300": {"nome": "BOLO INDIANO"},
    "6217": {"nome": "BOLO INGLES"},
    "6088": {"nome": "BOLO MASSA PUBA"},
    "7177": {"nome": "BOLO MESCLADO"},
    "7108": {"nome": "BOLO PÉ DE MOLEQUE PAÇOCA"},
    "3063": {"nome": "BRASILEIRA"},
    "1070": {"nome": "BRIGADEIRO"},
    "4121": {"nome": "BRIOCHE COM CÔCO"},
    "4145": {"nome": "BRIOCHE COM FRUTAS"},
    "6095": {"nome": "BRIOCHE CREME CHOC"},
    "6514": {"nome": "BROA DA CASA"},
    "8174": {"nome": "CAROLINA"},
    "9851": {"nome": "COXINHA CATUPIRY"},
    "5227": {"nome": "COXINHA DE CARNE"},
    "9837": {"nome": "COXINHA DE FRANGO"},
    "1695": {"nome": "DELICIA DE ABACAXI"},
    "6000": {"nome": "DIPLOMATA"},
    "1020": {"nome": "DOCE MARIA MOLE"},
    "3410": {"nome": "DOCINHO"},
    "998949": {"nome": "EMPADA"},
    "8419": {"nome": "ENROLADINHO"},
    "6613": {"nome": "FARINHA DE ROSCA"},
    "1823": {"nome": "FOCACCIA"},
    "9913": {"nome": "FOLHADO DE FRANGO"},
    "6965": {"nome": "GALETO"},
    "596": {"nome": "KIELZ"},
    "6615": {"nome": "MINI COXINHA"},
    "953": {"nome": "MINI CROISSANT"},
    "1631": {"nome": "MOUSSE DE CHOCOLATE"},
    "1488": {"nome": "MOUSSE DE MARACUJA"},
    "3346": {"nome": "MOUSSE DE MORANGO"},
    "4144": {"nome": "PAINETTOME CINCO LATE"},
    "6873": {"nome": "PÃO BAGUETE"},
    "9690": {"nome": "PÃO BATATA"},
    "7078": {"nome": "PÃO BOLACHÃO"},
    "17864": {"nome": "PÃO BRIOCHE"},
    "20139": {"nome": "PÃO DE ALHO"},
    "7030": {"nome": "PÃO DE FORMA"},
    "21933": {"nome": "PÃO DE LEITE"},
    "34083": {"nome": "PÃO DE MILHO COQU"},
    "7115": {"nome": "PÃO DE QUEIJO"},
    "7496": {"nome": "PÃO DELICIA"},
    "949": {"nome": "PÃO DOCE"},
    "4251": {"nome": "PÃO FRANCÊS"},
    "3822": {"nome": "PÃO HAMBÚRGUER"},
    "3073": {"nome": "PÃO HAMBÚRGUER GERGELIM"},
    "3957": {"nome": "PÃO HOT DOG RECHEADO"},
    "7092": {"nome": "PÃO INTEGRAL"},
    "6835": {"nome": "PÃO ITALIANO"},
    "6316": {"nome": "PÃO MANTEIGA"},
    "21931": {"nome": "PÃO PORTUGUÊS"},
    "7122": {"nome": "PÃO RECIFE"},
    "9317": {"nome": "PÃO SALADA RUSSA"},
    "1984": {"nome": "PASTEL DE PORNAS"},
    "9713": {"nome": "PETIT-FOUR DE COMBA"},
    "4985": {"nome": "PIZZA SABORES"},
    "7061": {"nome": "PUDIM"},
    "9157": {"nome": "ROCAMBOLE"},
    "6989": {"nome": "SALGADINHO DE QUEIJO"},
    "1023": {"nome": "SANDUICHE NATURAL"},
    "408": {"nome": "SOBREMESA"},
    "7893": {"nome": "SUSPINO"},
    "8648": {"nome": "TORRADA DE BOLO"},
    "6781": {"nome": "TORRADA SIMPLES"},
    "1441": {"nome": "TORTA DE ABACAXI"},
    "7160": {"nome": "TORTA DE BANANA"},
    "7054": {"nome": "TORTA DE CHOCOLATE"},
    "1821": {"nome": "TORTA DE MARACUJA"},
    "6491": {"nome": "TORTA DE MORANGO"},
    "1907": {"nome": "TORTA DOCE DE LEITE"},
    "1785": {"nome": "TORTA HOLANDESA"},
    "6422": {"nome": "TORTA LEITE CONDENS"},
    "1549": {"nome": "TORTA MOUSSE DE LIMAO"},
    "69231": {"nome": "TORTA SABORES"},
    "5104": {"nome": "TORTA SALGADA"},
    "8485": {"nome": "TORTILETE"},
    "34096": {"nome": "TORTILLE"}
};

// DOM Elements
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const menuToggle = document.getElementById('menuToggle');
const productList = document.getElementById('productList');
const productSearch = document.getElementById('productSearch');
const editProductCode = document.getElementById('editProductCode');
const editProductName = document.getElementById('editProductName');
const editProductTara = document.getElementById('editProductTara');
const editProductValue = document.getElementById('editProductValue');
const saveProductSettings = document.getElementById('saveProductSettings');
const productCode = document.getElementById('productCode');
const productName = document.getElementById('productName');
const productTara = document.getElementById('productTara');
const productValue = document.getElementById('productValue');
const grossWeight = document.getElementById('grossWeight');
const employeeName = document.getElementById('employeeName');
const weighingForm = document.getElementById('weighingForm');
const findProduct = document.getElementById('findProduct');
const netWeightDisplay = document.getElementById('netWeightDisplay');
const totalValueDisplay = document.getElementById('totalValueDisplay');
const recordsTable = document.getElementById('recordsTable').getElementsByTagName('tbody')[0];
const generateReport = document.getElementById('generateReport');
const clearAllData = document.getElementById('clearAllData');
const notification = document.getElementById('notification');
const confirmationModal = document.getElementById('confirmationModal');
const modalMessage = document.getElementById('modalMessage');
const cancelAction = document.getElementById('cancelAction');
const confirmAction = document.getElementById('confirmAction');
const closeModal = document.getElementById('closeModal');
const printSection = document.getElementById('printSection');
const reportContent = document.getElementById('reportContent');
const pagination = document.getElementById('pagination');
const submitBtn = document.getElementById('submitBtn');

// State
let selectedProduct = null;
let records = [];
let productSettings = {};
let currentPage = 1;
const recordsPerPage = 10;

// Initialize the app
function init() {
    loadProductSettings();
    renderProductList();
    loadRecords();
    setupEventListeners();
    setupKeyboardShortcuts();
    checkSystemPreferences();
}

// Load product settings from localStorage
function loadProductSettings() {
    const settings = localStorage.getItem('productSettings');
    if (settings) {
        productSettings = JSON.parse(settings);
    } else {
        // Initialize with default values if no settings exist
        Object.keys(produtos).forEach(code => {
            productSettings[code] = {
                tara: 0,
                value: 0
            };
        });
        saveProductSettingsToStorage();
    }
}

// Save product settings to localStorage
function saveProductSettingsToStorage() {
    localStorage.setItem('productSettings', JSON.stringify(productSettings));
}

// Load records from localStorage
function loadRecords() {
    const savedRecords = localStorage.getItem('weighingRecords');
    if (savedRecords) {
        records = JSON.parse(savedRecords);
        renderRecordsTable();
    }
}

// Save records to localStorage
function saveRecordsToStorage() {
    localStorage.setItem('weighingRecords', JSON.stringify(records));
}

// Render product list
function renderProductList(filter = '') {
    productList.innerHTML = '';
    
    const filteredProducts = Object.keys(produtos)
        .filter(code => {
            const name = produtos[code].nome.toLowerCase();
            const searchTerm = filter.toLowerCase();
            return code.includes(searchTerm) || name.includes(searchTerm);
        })
        .sort((a, b) => produtos[a].nome.localeCompare(produtos[b].nome));
    
    if (filteredProducts.length === 0) {
        const li = document.createElement('li');
        li.className = 'product-item';
        li.textContent = 'Nenhum produto encontrado';
        li.style.justifyContent = 'center';
        li.style.cursor = 'default';
        productList.appendChild(li);
        return;
    }
    
    filteredProducts.forEach(code => {
        const li = document.createElement('li');
        li.className = 'product-item';
        li.dataset.code = code;
        li.setAttribute('role', 'option');
        
        li.innerHTML = `
            <span class="product-code">${code}</span>
            <span class="product-name">${produtos[code].nome}</span>
        `;
        
        li.addEventListener('click', () => selectProduct(code));
        productList.appendChild(li);
    });
}

// Select a product
function selectProduct(code) {
    // Remove active class from all items
    document.querySelectorAll('.product-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to selected item
    const selectedItem = document.querySelector(`.product-item[data-code="${code}"]`);
    if (selectedItem) {
        selectedItem.classList.add('active');
    }
    
    selectedProduct = code;
    editProductCode.value = code;
    editProductName.value = produtos[code].nome;
    editProductTara.value = productSettings[code].tara;
    editProductValue.value = productSettings[code].value.toFixed(2);
    
    // Also update the weighing form
    productCode.value = code;
    productName.value = produtos[code].nome;
    productTara.value = productSettings[code].tara;
    productValue.value = productSettings[code].value.toFixed(2);
    
    // Scroll to the selected item
    if (selectedItem) {
        selectedItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // Close sidebar on mobile
    if (window.innerWidth < 768) {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    }
    
    // Focus on gross weight input
    grossWeight.focus();
}

// Find product by code
function findProductByCode() {
    const code = productCode.value.trim();
    if (produtos[code]) {
        selectProduct(code);
    } else {
        showNotification('Produto não encontrado', 'error');
        productCode.focus();
    }
}

// Calculate net weight and total value
function calculateValues() {
    const gross = parseFloat(grossWeight.value) || 0;
    const tara = parseFloat(productTara.value) || 0;
    const valuePerKg = parseFloat(productValue.value) || 0;
    
    const net = Math.max(0, gross - tara);
    const total = net * valuePerKg;
    
    netWeightDisplay.textContent = net.toFixed(3) + ' kg';
    totalValueDisplay.textContent = 'R$ ' + total.toFixed(2);
    
    return { net, total };
}

// Register a new weighing
async function registerWeighing(e) {
    e.preventDefault();
    
    if (!selectedProduct) {
        showNotification('Selecione um produto primeiro', 'error');
        productCode.focus();
        return;
    }
    
    if (!grossWeight.value || !employeeName.value) {
        showNotification('Preencha todos os campos obrigatórios', 'error');
        return;
    }
    
    // Prevent double click
    if (submitBtn.disabled) return;
    
    // Disable button to prevent double submission
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<div class="loading"></div> Processando...';
    
    try {
        const { net, total } = calculateValues();
        
        const record = {
            id: Date.now(),
            date: new Date().toISOString(),
            productCode: selectedProduct,
            productName: produtos[selectedProduct].nome,
            employee: employeeName.value,
            grossWeight: parseFloat(grossWeight.value),
            tara: parseFloat(productTara.value),
            netWeight: net,
            valuePerKg: parseFloat(productValue.value),
            totalValue: total
        };
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        records.unshift(record);
        saveRecordsToStorage();
        renderRecordsTable();
        
        // Reset form
        grossWeight.value = '';
        employeeName.value = '';
        
        showNotification('Registro salvo com sucesso', 'success');
    } catch (error) {
        console.error('Error saving record:', error);
        showNotification('Erro ao salvar registro', 'error');
    } finally {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-save"></i> Registrar';
    }
}

// Render records table with pagination
function renderRecordsTable() {
    recordsTable.innerHTML = '';
    
    if (records.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = '<td colspan="6" style="text-align: center;">Nenhum registro encontrado</td>';
        recordsTable.appendChild(tr);
        renderPagination();
        return;
    }
    
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = Math.min(startIndex + recordsPerPage, records.length);
    const paginatedRecords = records.slice(startIndex, endIndex);
    
    paginatedRecords.forEach(record => {
        const tr = document.createElement('tr');
        tr.classList.add('fade-in');
        
        const date = new Date(record.date);
        const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        tr.innerHTML = `
            <td>${formattedDate}</td>
            <td>${record.employee}</td>
            <td>${record.productName}</td>
            <td>${record.netWeight.toFixed(3)}</td>
            <td>${record.valuePerKg.toFixed(2)}</td>
            <td>R$ ${record.totalValue.toFixed(2)}</td>
        `;
        
        recordsTable.appendChild(tr);
    });
    
    renderPagination();
}

// Render pagination controls
function renderPagination() {
    pagination.innerHTML = '';
    
    if (records.length <= recordsPerPage) return;
    
    const totalPages = Math.ceil(records.length / recordsPerPage);
    
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderRecordsTable();
        }
    });
    pagination.appendChild(prevBtn);
    
    // Page buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            renderRecordsTable();
        });
        pagination.appendChild(pageBtn);
    }
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderRecordsTable();
        }
    });
    pagination.appendChild(nextBtn);
}

// Generate PDF report
function generatePDFReport() {
    if (records.length === 0) {
        showNotification('Nenhum registro para gerar relatório', 'error');
        return;
    }
    
    // Group records by product
    const groupedRecords = {};
    records.forEach(record => {
        if (!groupedRecords[record.productCode]) {
            groupedRecords[record.productCode] = {
                name: record.productName,
                records: [],
                totalNetWeight: 0,
                totalValue: 0
            };
        }
        
        groupedRecords[record.productCode].records.push(record);
        groupedRecords[record.productCode].totalNetWeight += record.netWeight;
        groupedRecords[record.productCode].totalValue += record.totalValue;
    });
    
    // Calculate grand totals
    let grandTotalNetWeight = 0;
    let grandTotalValue = 0;
    
    Object.keys(groupedRecords).forEach(code => {
        grandTotalNetWeight += groupedRecords[code].totalNetWeight;
        grandTotalValue += groupedRecords[code].totalValue;
    });
    
    // Generate HTML for the report
    let reportHTML = `
        <style>
            .report { font-family: Arial, sans-serif; }
            .report h2 { color: #333; margin-top: 20px; }
            .report table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            .report th, .report td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            .report th { background-color: #f2f2f2; }
            .report .total { font-weight: bold; }
            .report .grand-total { font-weight: bold; font-size: 1.2em; margin-top: 20px; }
            .report .print-date { text-align: right; margin-bottom: 20px; color: #666; }
        </style>
        <div class="report">
            <div class="print-date">Gerado em: ${new Date().toLocaleString()}</div>
    `;
    
    // Add sections for each product
    Object.keys(groupedRecords).forEach(code => {
        const group = groupedRecords[code];
        
        reportHTML += `
            <h2>${group.name}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Funcionário</th>
                        <th>Peso Líquido (kg)</th>
                        <th>Valor por Kg (R$)</th>
                        <th>Valor Total (R$)</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        group.records.forEach(record => {
            const date = new Date(record.date);
            const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            
            reportHTML += `
                <tr>
                    <td>${formattedDate}</td>
                    <td>${record.employee}</td>
                    <td>${record.netWeight.toFixed(3)}</td>
                    <td>${record.valuePerKg.toFixed(2)}</td>
                    <td>${record.totalValue.toFixed(2)}</td>
                </tr>
            `;
        });
        
        reportHTML += `
                </tbody>
                <tfoot>
                    <tr class="total">
                        <td colspan="2">Total</td>
                        <td>${group.totalNetWeight.toFixed(3)}</td>
                        <td></td>
                        <td>${group.totalValue.toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>
        `;
    });
    
    // Add grand totals
    reportHTML += `
        <div class="grand-total">
            Total Geral: Peso Líquido = ${grandTotalNetWeight.toFixed(3)} kg | Valor Total = R$ ${grandTotalValue.toFixed(2)}
        </div>
    `;
    
    reportHTML += '</div>';
    
    // Set the report content
    reportContent.innerHTML = reportHTML;
    
    // Show print dialog
    printSection.style.display = 'block';
    window.print();
    printSection.style.display = 'none';
}

// Clear all data
function clearData() {
    records = [];
    saveRecordsToStorage();
    renderRecordsTable();
    showNotification('Todos os registros foram apagados', 'success');
}

// Show notification
function showNotification(message, type = 'success') {
    // Clear any existing notifications
    notification.className = 'notification';
    
    // Set icon based on type
    let icon = '';
    switch(type) {
        case 'success':
            icon = '<i class="fas fa-check-circle"></i>';
            break;
        case 'error':
            icon = '<i class="fas fa-exclamation-circle"></i>';
            break;
        default:
            icon = '<i class="fas fa-info-circle"></i>';
    }
    
    notification.innerHTML = `${icon} ${message}`;
    notification.className = `notification ${type} show`;
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Setup keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl+F or Cmd+F to focus on search
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            productSearch.focus();
        }
        
        // Ctrl+S or Cmd+S to save product settings
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            if (selectedProduct) {
                saveProductSettings.click();
            }
        }
        
        // Ctrl+N or Cmd+N to focus on new weighing
        if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
            e.preventDefault();
            productCode.focus();
        }
    });
}

// Check system preferences (dark mode, etc.)
function checkSystemPreferences() {
    // Check for dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }
    
    // Watch for changes in preference
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (e.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    // Menu toggle for mobile
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
    });
    
    // Close sidebar when clicking overlay
    sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    });
    
    // Product search
    productSearch.addEventListener('input', (e) => {
        renderProductList(e.target.value);
    });
    
    // Save product settings
    saveProductSettings.addEventListener('click', () => {
        if (!selectedProduct) return;
        
        productSettings[selectedProduct] = {
            tara: parseFloat(editProductTara.value) || 0,
            value: parseFloat(editProductValue.value) || 0
        };
        
        saveProductSettingsToStorage();
        
        // Update weighing form
        productTara.value = productSettings[selectedProduct].tara;
        productValue.value = productSettings[selectedProduct].value.toFixed(2);
        
        showNotification('Configurações salvas com sucesso', 'success');
    });
    
    // Find product
    findProduct.addEventListener('click', findProductByCode);
    
    // Product code input - try to find when user presses Enter
    productCode.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            findProductByCode();
        }
    });
    
    // Calculate values when gross weight changes
    grossWeight.addEventListener('input', calculateValues);
    
    // Form submission
    weighingForm.addEventListener('submit', registerWeighing);
    
    // Generate report
    generateReport.addEventListener('click', generatePDFReport);
    
    // Clear all data
    clearAllData.addEventListener('click', () => {
        modalMessage.textContent = 'Tem certeza que deseja apagar todos os dados? Esta ação não pode ser desfeita.';
        confirmationModal.classList.add('active');
        
        confirmAction.onclick = () => {
            clearData();
            confirmationModal.classList.remove('active');
        };
    });
    
    // Cancel action in modal
    cancelAction.addEventListener('click', () => {
        confirmationModal.classList.remove('active');
    });
    
    // Close modal button
    closeModal.addEventListener('click', () => {
        confirmationModal.classList.remove('active');
    });
    
    // Close modal when clicking outside
    confirmationModal.addEventListener('click', (e) => {
        if (e.target === confirmationModal) {
            confirmationModal.classList.remove('active');
        }
    });
    
    // Prevent form submission on Enter in search fields
    productSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
    
    // Auto-focus on product code when sidebar is opened on mobile
    sidebar.addEventListener('transitionend', () => {
        if (sidebar.classList.contains('active')) {
            productSearch.focus();
        }
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Service Worker for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('ServiceWorker registration successful');
        }).catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}