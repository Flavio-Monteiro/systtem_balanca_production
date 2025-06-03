 // Banco de dados de produtos
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

        // Configurações iniciais
        let settings = {
            decimalPrecision: 3,
            currencySymbol: "R$",
            thousandSeparator: ".",
            decimalSeparator: ","
        };

        // Dados armazenados
        let storedData = {
            products: {},
            weighings: [],
            processes: [],
            productPrices: {},
            productTaras: {}
        };

        // Inicialização do sistema
        document.addEventListener('DOMContentLoaded', function() {
            // Carrega dados salvos
            loadData();
            
            // Inicializa a lista de produtos
            initializeProductList();
            
            // Inicializa a tabela de produtos
            initializeAllProductsTable();
            
            // Configura eventos
            setupEventListeners();
            
            // Atualiza contadores
            updateCounters();
            
            // Inicializa gráficos
            initializeCharts();
            
            // Esconde o menu lateral em telas pequenas
            if (window.innerWidth <= 992) {
                document.getElementById('sidebar').classList.remove('show');
            }
        });

        // Carrega dados do localStorage
        function loadData() {
            const savedData = localStorage.getItem('bakerySystemData');
            const savedSettings = localStorage.getItem('bakerySystemSettings');
            
            if (savedData) {
                storedData = JSON.parse(savedData);
            } else {
                // Inicializa com produtos padrão
                storedData.products = {...produtos};
            }
            
            if (savedSettings) {
                settings = JSON.parse(savedSettings);
                applySettings();
            }
        }

        // Salva dados no localStorage
        function saveData() {
            localStorage.setItem('bakerySystemData', JSON.stringify(storedData));
            localStorage.setItem('bakerySystemSettings', JSON.stringify(settings));
            updateCounters();
        }

        // Aplica configurações
        function applySettings() {
            // Atualiza selects com valores salvos
            document.getElementById('decimalPrecision').value = settings.decimalPrecision;
            document.getElementById('currencySymbol').value = settings.currencySymbol;
            document.getElementById('thousandSeparator').value = settings.thousandSeparator;
            document.getElementById('decimalSeparator').value = settings.decimalSeparator;
            
            // Atualiza exibições
            updateDisplay();
        }

        // Configura eventos
        function setupEventListeners() {
            // Menu toggle
            document.getElementById('menuToggle').addEventListener('click', function() {
                document.getElementById('sidebar').classList.toggle('show');
            });
            
            // Menu lateral
            document.querySelectorAll('.menu li').forEach(item => {
                item.addEventListener('click', function() {
                    const section = this.getAttribute('data-section');
                    showSection(section);
                    
                    // Atualiza classe ativa
                    document.querySelectorAll('.menu li').forEach(li => li.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Fecha o menu em telas pequenas
                    if (window.innerWidth <= 992) {
                        document.getElementById('sidebar').classList.remove('show');
                    }
                });
            });
            
            // Tabs
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const tab = this.getAttribute('data-tab');
                    showTab(tab);
                    
                    // Atualiza classe ativa
                    document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            // Busca de produto
            document.getElementById('searchProduct').addEventListener('input', filterProductList);
            document.getElementById('searchByCode').addEventListener('click', searchProductByCode);
            document.getElementById('searchAllProducts').addEventListener('input', filterAllProductsTable);
            
            // Balança
            document.getElementById('calculateBtn').addEventListener('click', calculateWeight);
            document.getElementById('registerBtn').addEventListener('click', registerWeighing);
            document.getElementById('clearBtn').addEventListener('click', clearBalanceForm);
            document.getElementById('resetTara').addEventListener('click', resetTara);
            document.getElementById('resetPrice').addEventListener('click', resetPrice);
            
            // Produtos
            document.getElementById('saveProductBtn').addEventListener('click', saveProduct);
            document.getElementById('updateProductBtn').addEventListener('click', updateProduct);
            document.getElementById('clearProductBtn').addEventListener('click', clearProductForm);
            
            // Processos
            document.getElementById('calculateProcessBtn').addEventListener('click', calculateProcess);
            document.getElementById('registerProcessBtn').addEventListener('click', registerProcess);
            
            // Relatórios
            document.getElementById('reportType').addEventListener('change', toggleCustomDateRange);
            document.getElementById('generateReportBtn').addEventListener('click', generateReport);
            document.getElementById('exportCSVBtn').addEventListener('click', exportToCSV);
            document.getElementById('exportExcelBtn').addEventListener('click', exportToExcel);
            
            // Botão de gerar relatório de pesagens
            document.getElementById('generateWeighingReportBtn').addEventListener('click', generateWeighingReport);

            // Configurações
            document.getElementById('saveSettingsBtn').addEventListener('click', saveSettings);
            document.getElementById('backupDataBtn').addEventListener('click', backupData);
            document.getElementById('restoreDataBtn').addEventListener('click', restoreData);
            document.getElementById('clearAllDataBtn').addEventListener('click', confirmClearAllData);
            
            // Seleção de produto na lista
            document.getElementById('productList').addEventListener('click', function(e) {
                if (e.target.classList.contains('product-item') || e.target.parentElement.classList.contains('product-item')) {
                    const productItem = e.target.classList.contains('product-item') ? e.target : e.target.parentElement;
                    const productCode = productItem.getAttribute('data-code');
                    selectProduct(productCode);
                }
            });
            
            // Seleção de produto na tabela completa
            document.getElementById('allProductsTable').addEventListener('click', function(e) {
                if (e.target.classList.contains('select-product-btn')) {
                    const productCode = e.target.getAttribute('data-code');
                    selectProduct(productCode);
                    showSection('balanca');
                } else if (e.target.classList.contains('edit-product-btn')) {
                    const productCode = e.target.getAttribute('data-code');
                    editProduct(productCode);
                } else if (e.target.classList.contains('delete-product-btn')) {
                    const productCode = e.target.getAttribute('data-code');
                    confirmDeleteProduct(productCode);
                }
            });
            
            // Seleção de produto nos processos
            document.getElementById('processProductCode').addEventListener('change', function() {
                const code = this.value;
                if (storedData.products[code]) {
                    document.getElementById('processProductName').value = storedData.products[code].nome;
                }
            });
        }

        // Mostra seção específica
        function showSection(sectionId) {
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            document.getElementById(sectionId).classList.add('active');
            
            // Atualiza tabelas quando a seção é mostrada
            if (sectionId === 'balanca') {
                updateWeighingTables();
            } else if (sectionId === 'produtos') {
                initializeAllProductsTable();
            } else if (sectionId === 'processos') {
                updateProcessHistoryTable();
            } else if (sectionId === 'relatorios') {
                updateReportPreview();
            }
        }

        // Mostra tab específica
        function showTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            
            document.getElementById(tabId + 'Tab').classList.add('active');
        }

        // Inicializa lista de produtos
        function initializeProductList() {
            const productList = document.getElementById('productList');
            productList.innerHTML = '';
            
            for (const code in storedData.products) {
                const product = storedData.products[code];
                const productItem = document.createElement('div');
                productItem.className = 'product-item';
                productItem.setAttribute('data-code', code);
                productItem.innerHTML = `
                    <div class="product-code">${code}</div>
                    <div class="product-name">${product.nome}</div>
                `;
                productList.appendChild(productItem);
            }
        }

        // Filtra lista de produtos
        function filterProductList() {
            const searchTerm = document.getElementById('searchProduct').value.toLowerCase();
            const productItems = document.querySelectorAll('.product-item');
            
            productItems.forEach(item => {
                const code = item.getAttribute('data-code');
                const name = storedData.products[code].nome.toLowerCase();
                
                if (code.includes(searchTerm) || name.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // Busca produto por código
        function searchProductByCode() {
            const code = document.getElementById('productCode').value;
            selectProduct(code);
        }

        // Seleciona produto
        function selectProduct(code) {
            if (storedData.products[code]) {
                document.getElementById('productCode').value = code;
                document.getElementById('productName').value = storedData.products[code].nome;
                document.getElementById('productInfo').textContent = `${code} - ${storedData.products[code].nome}`;
                
                // Atualiza os campos com os valores correntes (ou vazio se não existir)
                const currentPrice = storedData.productPrices[code] || '';
                const currentTara = storedData.productTaras[code] || '';
                
                document.getElementById('pricePerKg').value = currentPrice;
                document.getElementById('tara').value = currentTara;
                
                showNotification('Produto selecionado com sucesso!');
            } else {
                showNotification('Produto não encontrado!', 'error');
            }
        }

        // Inicializa tabela de todos os produtos
        function initializeAllProductsTable() {
            const tableBody = document.querySelector('#allProductsTable tbody');
            tableBody.innerHTML = '';
            
            for (const code in storedData.products) {
                const product = storedData.products[code];
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td>${code}</td>
                    <td>${product.nome}</td>
                    <td>${storedData.productPrices[code] ? formatCurrency(storedData.productPrices[code]) : '-'}</td>
                    <td>${storedData.productTaras[code] ? formatNumber(storedData.productTaras[code], settings.decimalPrecision) + ' kg' : '-'}</td>
                    <td>
                        <button class="action-btn select-product-btn" data-code="${code}"><i class="fas fa-balance-scale"></i></button>
                        <button class="action-btn edit-product-btn" data-code="${code}"><i class="fas fa-edit"></i></button>
                        <button class="action-btn delete-product-btn" data-code="${code}"><i class="fas fa-trash"></i></button>
                    </td>
                `;
                
                tableBody.appendChild(row);
            }
        }

        // Filtra tabela de produtos
        function filterAllProductsTable() {
            const searchTerm = document.getElementById('searchAllProducts').value.toLowerCase();
            const rows = document.querySelectorAll('#allProductsTable tbody tr');
            
            rows.forEach(row => {
                const code = row.cells[0].textContent;
                const name = row.cells[1].textContent.toLowerCase();
                
                if (code.includes(searchTerm) || name.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        }

        // Edita produto
        function editProduct(code) {
            const product = storedData.products[code];
            
            document.getElementById('newProductCode').value = code;
            document.getElementById('newProductName').value = product.nome;
            document.getElementById('newProductPrice').value = storedData.productPrices[code] || '';
            document.getElementById('newProductTara').value = storedData.productTaras[code] || '';
            
            showSection('produtos');
        }

        // Confirma exclusão de produto
        function confirmDeleteProduct(code) {
            showConfirmationModal(
                'Confirmar Exclusão',
                `Tem certeza que deseja excluir o produto ${code} - ${storedData.products[code].nome}?`,
                function() {
                    deleteProduct(code);
                }
            );
        }

        // Exclui produto
        function deleteProduct(code) {
            delete storedData.products[code];
            delete storedData.productPrices[code];
            delete storedData.productTaras[code];
            
            saveData();
            initializeProductList();
            initializeAllProductsTable();
            
            showNotification('Produto excluído com sucesso!');
        }

        // Salva produto
        function saveProduct() {
            const code = document.getElementById('newProductCode').value;
            const name = document.getElementById('newProductName').value;
            const price = parseFloat(document.getElementById('newProductPrice').value);
            const tara = parseFloat(document.getElementById('newProductTara').value);
            
            if (!code || !name) {
                showNotification('Código e nome são obrigatórios!', 'error');
                return;
            }
            
            // Atualiza ou cria o produto
            storedData.products[code] = { nome: name };
            
            // Atualiza o preço (remove se for NaN ou vazio)
            if (!isNaN(price)) {
                storedData.productPrices[code] = price;
            } else {
                delete storedData.productPrices[code];
            }
            
            // Atualiza a tara (remove se for NaN ou vazio)
            if (!isNaN(tara)) {
                storedData.productTaras[code] = tara;
            } else {
                delete storedData.productTaras[code];
            }
            
            saveData();
            initializeProductList();
            initializeAllProductsTable();
            clearProductForm();
            
            showNotification('Produto salvo com sucesso!');
        }

        // Atualiza produto
        function updateProduct() {
            const code = document.getElementById('newProductCode').value;
            const name = document.getElementById('newProductName').value;
            const price = parseFloat(document.getElementById('newProductPrice').value);
            const tara = parseFloat(document.getElementById('newProductTara').value);
            
            if (!storedData.products[code]) {
                showNotification('Produto não encontrado!', 'error');
                return;
            }
            
            // Atualiza o nome do produto
            storedData.products[code].nome = name;
            
            // Atualiza o preço (remove se for NaN ou vazio)
            if (!isNaN(price)) {
                storedData.productPrices[code] = price;
            } else {
                delete storedData.productPrices[code];
            }
            
            // Atualiza a tara (remove se for NaN ou vazio)
            if (!isNaN(tara)) {
                storedData.productTaras[code] = tara;
            } else {
                delete storedData.productTaras[code];
            }
            
            saveData();
            initializeProductList();
            initializeAllProductsTable();
            
            showNotification('Produto atualizado com sucesso!');
        }

        // Limpa formulário de produto
        function clearProductForm() {
            document.getElementById('newProductCode').value = '';
            document.getElementById('newProductName').value = '';
            document.getElementById('newProductPrice').value = '';
            document.getElementById('newProductTara').value = '';
        }

        // Calcula pesagem
        function calculateWeight() {
            const weight = parseFloat(document.getElementById('weight').value);
            const tara = parseFloat(document.getElementById('tara').value);
            const pricePerKg = parseFloat(document.getElementById('pricePerKg').value.replace(',', '.'));
            
            if (isNaN(weight) || weight <= 0) {
                showNotification('Peso inválido!', 'error');
                return;
            }
            
            if (isNaN(tara)) {
                showNotification('Tara inválida!', 'error');
                return;
            }
            
            if (isNaN(pricePerKg) || pricePerKg <= 0) {
                showNotification('Valor por kg inválido!', 'error');
                return;
            }
            
            const netWeight = weight - tara;
            const totalValue = netWeight * pricePerKg;
            
            // Atualiza display
            document.getElementById('pesoLiquidoDisplay').textContent = `${formatNumber(netWeight, settings.decimalPrecision)} kg`;
            document.getElementById('valorTotalDisplay').textContent = formatCurrency(totalValue);
            
            showNotification('Cálculo realizado com sucesso!');
        }

        // Registra pesagem
        function registerWeighing() {
            const code = document.getElementById('productCode').value;
            const productName = document.getElementById('productName').value;
            const weight = parseFloat(document.getElementById('weight').value);
            const tara = parseFloat(document.getElementById('tara').value);
            const pricePerKg = parseFloat(document.getElementById('pricePerKg').value.replace(',', '.'));
            const operationType = document.getElementById('operationType').value;
            const employee = document.getElementById('employee').value;
            
            // Validações
            if (!code || !storedData.products[code]) {
                showNotification('Selecione um produto válido!', 'error');
                return;
            }
            
            if (isNaN(weight) || weight <= 0) {
                showNotification('Peso inválido!', 'error');
                return;
            }
            
            if (isNaN(tara)) {
                showNotification('Tara inválida!', 'error');
                return;
            }
            
            if (isNaN(pricePerKg) || pricePerKg <= 0) {
                showNotification('Valor por kg inválido!', 'error');
                return;
            }
            
            if (!employee) {
                showNotification('Informe o funcionário!', 'error');
                return;
            }
            
            const netWeight = weight - tara;
            const totalValue = netWeight * pricePerKg;
            const now = new Date();
            
            const weighing = {
                id: Date.now(),
                date: now.toISOString(),
                code,
                productName,
                weight,
                tara,
                netWeight,
                pricePerKg,
                totalValue,
                operationType,
                employee
            };
            
            storedData.weighings.push(weighing);
            saveData();
            
            // Atualiza tabelas
            updateWeighingTables();
            
            // Limpa formulário
            clearBalanceForm();
            
            showNotification('Pesagem registrada com sucesso!');
        }

        // Atualiza tabelas de pesagem
        // Atualiza tabelas de pesagem
    function updateWeighingTables() {
    const controlTableBody = document.querySelector('#controlTable tbody');
    const lossTableBody = document.querySelector('#lossTable tbody');
    
    controlTableBody.innerHTML = '';
    lossTableBody.innerHTML = '';
    
    storedData.weighings.forEach(weighing => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${formatDateTime(weighing.date)}</td>
            <td>${weighing.employee}</td>
            <td>${weighing.productName}</td>
            <td>${weighing.code}</td>
            <td>${formatNumber(weighing.weight, settings.decimalPrecision)} kg</td>
            <td>${formatNumber(weighing.tara, settings.decimalPrecision)} kg</td>
            <td>${formatNumber(weighing.netWeight, settings.decimalPrecision)} kg</td>
            <td>${formatCurrency(weighing.totalValue)}</td>
            <td>
                <button class="action-btn pdf-btn" data-id="${weighing.id}"><i class="fas fa-file-pdf"></i></button>
                <button class="action-btn delete-btn" data-id="${weighing.id}"><i class="fas fa-trash"></i></button>
            </td>
            <td></td>
        `;
        
        if (weighing.operationType === 'controle') {
            controlTableBody.appendChild(row);
        } else {
            lossTableBody.appendChild(row);
        }
    });
    
    // Adiciona eventos aos botões
    document.querySelectorAll('.pdf-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            generateWeighingPDF(id);
        });
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            confirmDeleteWeighing(id);
        });
    });
}

        // Gera PDF para uma pesagem específica
        function generateWeighingPDF(id) {
            const weighing = storedData.weighings.find(w => w.id === id);
            if (!weighing) return;
            
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            // Cabeçalho
            doc.setFontSize(18);
            doc.text('Comprovante de Pesagem', 105, 15, { align: 'center' });
            
            doc.setFontSize(12);
            doc.text(`PadariaPlus - ${formatDate(new Date())}`, 105, 25, { align: 'center' });
            
            // Linha divisória
            doc.line(20, 30, 190, 30);
            
            // Dados da pesagem
            doc.setFontSize(14);
            doc.text('Dados da Pesagem:', 20, 40);
            
            doc.setFontSize(12);
            let y = 50;
            
            doc.text(`Data/Hora: ${formatDateTime(weighing.date)}`, 20, y);
            y += 10;
            
            doc.text(`Produto: ${weighing.productName} (${weighing.code})`, 20, y);
            y += 10;
            
            doc.text(`Funcionário: ${weighing.employee}`, 20, y);
            y += 10;
            
            doc.text(`Peso Bruto: ${formatNumber(weighing.weight, settings.decimalPrecision)} kg`, 20, y);
            y += 10;
            
            doc.text(`Tara: ${formatNumber(weighing.tara, settings.decimalPrecision)} kg`, 20, y);
            y += 10;
            
            doc.text(`Peso Líquido: ${formatNumber(weighing.netWeight, settings.decimalPrecision)} kg`, 20, y);
            y += 10;
            
            doc.text(`Valor por kg: ${formatCurrency(weighing.pricePerKg)}`, 20, y);
            y += 10;
            
            doc.setFontSize(14);
            doc.text(`Valor Total: ${formatCurrency(weighing.totalValue)}`, 20, y);
            y += 15;
            
            // Rodapé
            doc.setFontSize(10);
            doc.text('Sistema PadariaPlus - Comprovante gerado automaticamente', 105, 280, { align: 'center' });
            
            // Salva o PDF
            doc.save(`Pesagem_${weighing.code}_${formatDateTime(weighing.date).replace(/[\/\s:]/g, '_')}.pdf`);
            
            showNotification('PDF gerado com sucesso!');
        }

        // Confirma exclusão de pesagem
        function confirmDeleteWeighing(id) {
            showConfirmationModal(
                'Confirmar Exclusão',
                'Tem certeza que deseja excluir este registro de pesagem?',
                function() {
                    deleteWeighing(id);
                }
            );
        }

        // Exclui pesagem
        function deleteWeighing(id) {
            storedData.weighings = storedData.weighings.filter(w => w.id !== id);
            saveData();
            updateWeighingTables();
            showNotification('Registro de pesagem excluído com sucesso!');
        }

        // Limpa formulário de balança
        function clearBalanceForm() {
            document.getElementById('weight').value = '';
            document.getElementById('employee').value = '';
            document.getElementById('pesoLiquidoDisplay').textContent = `0${settings.decimalSeparator}${'0'.repeat(settings.decimalPrecision)} kg`;
            document.getElementById('valorTotalDisplay').textContent = `${settings.currencySymbol} 0${settings.decimalSeparator}00`;
        }

        // Reseta tara
        function resetTara() {
            const code = document.getElementById('productCode').value;
            
            if (code && storedData.productTaras[code]) {
                delete storedData.productTaras[code];
                saveData();
                document.getElementById('tara').value = '';
                showNotification('Tara resetada com sucesso!');
            } else {
                document.getElementById('tara').value = '';
            }
        }

        // Reseta preço
        function resetPrice() {
            const code = document.getElementById('productCode').value;
            
            if (code && storedData.productPrices[code]) {
                delete storedData.productPrices[code];
                saveData();
                document.getElementById('pricePerKg').value = '';
                showNotification('Preço resetado com sucesso!');
            } else {
                document.getElementById('pricePerKg').value = '';
            }
        }

        // Calcula processo (sobras/transformações)
        function calculateProcess() {
            const code = document.getElementById('processProductCode').value;
            const originalWeight = parseFloat(document.getElementById('originalWeight').value);
            const remainingWeight = parseFloat(document.getElementById('remainingWeight').value);
            
            if (!code || !storedData.products[code]) {
                showNotification('Selecione um produto válido!', 'error');
                return;
            }
            
            if (isNaN(originalWeight) || originalWeight <= 0) {
                showNotification('Peso original inválido!', 'error');
                return;
            }
            
            if (isNaN(remainingWeight)) {
                showNotification('Peso restante inválido!', 'error');
                return;
            }
            
            const weightDifference = originalWeight - remainingWeight;
            let valueDifference = 0;
            
            if (storedData.productPrices[code]) {
                valueDifference = weightDifference * storedData.productPrices[code];
            }
            
            let costImpact = 0;
            if (originalWeight > 0) {
                costImpact = (weightDifference / originalWeight) * 100;
            }
            
            // Atualiza resultados
            document.getElementById('weightDifference').textContent = `${formatNumber(weightDifference, settings.decimalPrecision)} kg`;
            document.getElementById('valueDifference').textContent = formatCurrency(valueDifference);
            document.getElementById('costImpact').textContent = `${formatNumber(costImpact, 2)}%`;
            
            showNotification('Cálculo realizado com sucesso!');
        }

        // Registra processo
        function registerProcess() {
            const code = document.getElementById('processProductCode').value;
            const productName = storedData.products[code] ? storedData.products[code].nome : '';
            const originalWeight = parseFloat(document.getElementById('originalWeight').value);
            const remainingWeight = parseFloat(document.getElementById('remainingWeight').value);
            const processType = document.getElementById('processType').value;
            const employee = document.getElementById('processEmployee').value;
            
            // Validações
            if (!code || !storedData.products[code]) {
                showNotification('Selecione um produto válido!', 'error');
                return;
            }
            
            if (isNaN(originalWeight) || originalWeight <= 0) {
                showNotification('Peso original inválido!', 'error');
                return;
            }
            
            if (isNaN(remainingWeight)) {
                showNotification('Peso restante inválido!', 'error');
                return;
            }
            
            if (!employee) {
                showNotification('Informe o funcionário!', 'error');
                return;
            }
            
            const weightDifference = originalWeight - remainingWeight;
            let valueDifference = 0;
            
            if (storedData.productPrices[code]) {
                valueDifference = weightDifference * storedData.productPrices[code];
            }
            
            let costImpact = 0;
            if (originalWeight > 0) {
                costImpact = (weightDifference / originalWeight) * 100;
            }
            
            const now = new Date();
            
            const process = {
                id: Date.now(),
                date: now.toISOString(),
                code,
                productName,
                originalWeight,
                remainingWeight,
                weightDifference,
                valueDifference,
                costImpact,
                processType,
                employee
            };
            
            storedData.processes.push(process);
            saveData();
            
            // Atualiza tabela de histórico
            updateProcessHistoryTable();
            
            showNotification('Processo registrado com sucesso!');
        }

        // Atualiza tabela de histórico de processos
        function updateProcessHistoryTable() {
            const tableBody = document.querySelector('#processHistoryTable tbody');
            tableBody.innerHTML = '';
            
            storedData.processes.forEach(process => {
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td>${formatDateTime(process.date)}</td>
                    <td>${getProcessTypeName(process.processType)}</td>
                    <td>${process.productName}</td>
                    <td>${process.code}</td>
                    <td>${formatNumber(process.weightDifference, settings.decimalPrecision)} kg</td>
                    <td>${formatCurrency(process.valueDifference)}</td>
                    <td>${process.employee}</td>
                    <td>
                        <button class="action-btn pdf-btn" data-id="${process.id}"><i class="fas fa-file-pdf"></i></button>
                        <button class="action-btn delete-btn" data-id="${process.id}"><i class="fas fa-trash"></i></button>
                    </td>
                `;
                
                tableBody.appendChild(row);
            });
            
            // Adiciona eventos aos botões
            document.querySelectorAll('.pdf-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    generateProcessPDF(id);
                });
            });
            
            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    confirmDeleteProcess(id);
                });
            });
        }

        // Gera PDF para um processo específico
        function generateProcessPDF(id) {
            const process = storedData.processes.find(p => p.id === id);
            if (!process) return;
            
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            // Cabeçalho
            doc.setFontSize(18);
            doc.text('Relatório de Processo', 105, 15, { align: 'center' });
            
            doc.setFontSize(12);
            doc.text(`PadariaPlus - ${formatDate(new Date())}`, 105, 25, { align: 'center' });
            
            // Linha divisória
            doc.line(20, 30, 190, 30);
            
            // Dados do processo
            doc.setFontSize(14);
            doc.text('Dados do Processo:', 20, 40);
            
            doc.setFontSize(12);
            let y = 50;
            
            doc.text(`Data/Hora: ${formatDateTime(process.date)}`, 20, y);
            y += 10;
            
            doc.text(`Tipo: ${getProcessTypeName(process.processType)}`, 20, y);
            y += 10;
            
            doc.text(`Produto: ${process.productName} (${process.code})`, 20, y);
            y += 10;
            
            doc.text(`Funcionário: ${process.employee}`, 20, y);
            y += 10;
            
            doc.text(`Peso Original: ${formatNumber(process.originalWeight, settings.decimalPrecision)} kg`, 20, y);
            y += 10;
            
            doc.text(`Peso Restante: ${formatNumber(process.remainingWeight, settings.decimalPrecision)} kg`, 20, y);
            y += 10;
            
            doc.text(`Diferença de Peso: ${formatNumber(process.weightDifference, settings.decimalPrecision)} kg`, 20, y);
            y += 10;
            
            doc.text(`Diferença de Valor: ${formatCurrency(process.valueDifference)}`, 20, y);
            y += 10;
            
            doc.text(`Impacto no Custo: ${formatNumber(process.costImpact, 2)}%`, 20, y);
            y += 15;
            
            // Rodapé
            doc.setFontSize(10);
            doc.text('Sistema PadariaPlus - Relatório gerado automaticamente', 105, 280, { align: 'center' });
            
            // Salva o PDF
            doc.save(`Processo_${process.code}_${formatDateTime(process.date).replace(/[\/\s:]/g, '_')}.pdf`);
            
            showNotification('PDF gerado com sucesso!');
        }

        // Confirma exclusão de processo
        function confirmDeleteProcess(id) {
            showConfirmationModal(
                'Confirmar Exclusão',
                'Tem certeza que deseja excluir este registro de processo?',
                function() {
                    deleteProcess(id);
                }
            );
        }

        // Exclui processo
        function deleteProcess(id) {
            storedData.processes = storedData.processes.filter(p => p.id !== id);
            saveData();
            updateProcessHistoryTable();
            showNotification('Registro de processo excluído com sucesso!');
        }

        // Retorna nome do tipo de processo
        function getProcessTypeName(type) {
            const types = {
                'sobra': 'Sobra',
                'transformacao': 'Transformação',
                'perda': 'Perda'
            };
            
            return types[type] || type;
        }

        // Alterna visibilidade do intervalo de datas personalizado
        function toggleCustomDateRange() {
            const reportType = document.getElementById('reportType').value;
            document.getElementById('customDateRange').style.display = reportType === 'custom' ? 'flex' : 'none';
        }

        // Gera relatório
        function generateReport() {
            const reportType = document.getElementById('reportType').value;
            const productCode = document.getElementById('reportProduct').value;
            const startDate = document.getElementById('startDate').value;
            const endDate = document.getElementById('endDate').value;
            
            let filteredWeighings = [...storedData.weighings];
            let filteredProcesses = [...storedData.processes];
            
            // Filtra por produto
            if (productCode !== 'all') {
                filteredWeighings = filteredWeighings.filter(w => w.code === productCode);
                filteredProcesses = filteredProcesses.filter(p => p.code === productCode);
            }
            
            // Filtra por data
            if (reportType === 'custom' && startDate && endDate) {
                const start = new Date(startDate);
                const end = new Date(endDate);
                
                filteredWeighings = filteredWeighings.filter(w => {
                    const date = new Date(w.date);
                    return date >= start && date <= end;
                });
                
                filteredProcesses = filteredProcesses.filter(p => {
                    const date = new Date(p.date);
                    return date >= start && date <= end;
                });
            } else {
                const now = new Date();
                let start;
                
                if (reportType === 'daily') {
                    start = new Date(now.setHours(0, 0, 0, 0));
                } else if (reportType === 'weekly') {
                    start = new Date(now.setDate(now.getDate() - 7));
                } else if (reportType === 'monthly') {
                    start = new Date(now.setMonth(now.getMonth() - 1));
                }
                
                filteredWeighings = filteredWeighings.filter(w => new Date(w.date) >= start);
                filteredProcesses = filteredProcesses.filter(p => new Date(p.date) >= start);
            }
            
            // Calcula totais
            const totalWeight = filteredWeighings.reduce((sum, w) => sum + w.netWeight, 0);
            const totalValue = filteredWeighings.reduce((sum, w) => sum + w.totalValue, 0);
            const totalLoss = filteredProcesses.reduce((sum, p) => sum + p.valueDifference, 0);
            
            // Gera conteúdo do relatório
            let reportContent = `
                <h3>Relatório de ${getReportTypeName(reportType)}</h3>
                ${productCode !== 'all' ? `<p>Produto: ${storedData.products[productCode]?.nome || 'Desconhecido'} (${productCode})</p>` : ''}
                ${reportType === 'custom' && startDate && endDate ? `<p>Período: ${formatDate(startDate)} a ${formatDate(endDate)}</p>` : ''}
                
                <h4>Resumo</h4>
                <table class="report-table">
                    <tr>
                        <th>Total de Pesagens</th>
                        <td>${filteredWeighings.length}</td>
                    </tr>
                    <tr>
                        <th>Peso Total</th>
                        <td>${formatNumber(totalWeight, settings.decimalPrecision)} kg</td>
                    </tr>
                    <tr>
                        <th>Valor Total</th>
                        <td>${formatCurrency(totalValue)}</td>
                    </tr>
                    <tr>
                        <th>Perdas/Quebras</th>
                        <td>${formatCurrency(totalLoss)}</td>
                    </tr>
                </table>
            `;
            
            document.getElementById('reportPreview').innerHTML = reportContent;
            
            // Atualiza gráficos
            updateCharts(filteredWeighings, filteredProcesses);
            
            // Gera PDF do relatório
            generateFullReportPDF(filteredWeighings, filteredProcesses, reportType, productCode, startDate, endDate);
        }

        // Gera PDF completo do relatório
        function generateFullReportPDF(weighings, processes, reportType, productCode, startDate, endDate) {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            // Cabeçalho
            doc.setFontSize(18);
            doc.text(`Relatório de ${getReportTypeName(reportType)}`, 105, 15, { align: 'center' });
            
            doc.setFontSize(12);
            let y = 25;
            
            if (productCode !== 'all') {
                doc.text(`Produto: ${storedData.products[productCode]?.nome || 'Desconhecido'} (${productCode})`, 105, y, { align: 'center' });
                y += 7;
            }
            
            if (reportType === 'custom' && startDate && endDate) {
                doc.text(`Período: ${formatDate(startDate)} a ${formatDate(endDate)}`, 105, y, { align: 'center' });
                y += 7;
            }
            
            doc.text(`PadariaPlus - ${formatDate(new Date())}`, 105, y, { align: 'center' });
            y += 15;
            
            // Linha divisória
            doc.line(20, y, 190, y);
            y += 10;
            
            // Resumo
            doc.setFontSize(14);
            doc.text('Resumo', 20, y);
            y += 10;
            
            const totalWeight = weighings.reduce((sum, w) => sum + w.netWeight, 0);
            const totalValue = weighings.reduce((sum, w) => sum + w.totalValue, 0);
            const totalLoss = processes.reduce((sum, p) => sum + p.valueDifference, 0);
            
            doc.setFontSize(12);
            doc.text(`Total de Pesagens: ${weighings.length}`, 20, y);
            y += 7;
            
            doc.text(`Peso Total: ${formatNumber(totalWeight, settings.decimalPrecision)} kg`, 20, y);
            y += 7;
            
            doc.text(`Valor Total: ${formatCurrency(totalValue)}`, 20, y);
            y += 7;
            
            doc.text(`Perdas/Quebras: ${formatCurrency(totalLoss)}`, 20, y);
            y += 15;
            
            // Tabela de pesagens
            if (weighings.length > 0) {
                doc.setFontSize(14);
                doc.text('Detalhes das Pesagens', 20, y);
                y += 10;
                
                const weighingsData = weighings.map(w => [
                    formatDateTime(w.date),
                    w.employee,
                    w.productName,
                    w.code,
                    `${formatNumber(w.netWeight, settings.decimalPrecision)} kg`,
                    formatCurrency(w.totalValue)
                ]);
                
                doc.autoTable({
                    startY: y,
                    head: [['Data/Hora', 'Funcionário', 'Produto', 'Código', 'Peso Líquido', 'Valor']],
                    body: weighingsData,
                    margin: { left: 20 },
                    styles: { fontSize: 9 }
                });
                
                y = doc.lastAutoTable.finalY + 10;
            }
            
            // Tabela de processos
            if (processes.length > 0) {
                doc.setFontSize(14);
                doc.text('Detalhes dos Processos', 20, y);
                y += 10;
                
                const processesData = processes.map(p => [
                    formatDateTime(p.date),
                    getProcessTypeName(p.processType),
                    p.productName,
                    p.code,
                    `${formatNumber(p.weightDifference, settings.decimalPrecision)} kg`,
                    formatCurrency(p.valueDifference),
                    p.employee
                ]);
                
                doc.autoTable({
                    startY: y,
                    head: [['Data/Hora', 'Tipo', 'Produto', 'Código', 'Dif. Peso', 'Dif. Valor', 'Funcionário']],
                    body: processesData,
                    margin: { left: 20 },
                    styles: { fontSize: 9 }
                });
            }
            
            // Rodapé
            doc.setFontSize(10);
            doc.text('Sistema PadariaPlus - Relatório gerado automaticamente', 105, 280, { align: 'center' });
            
            // Salva o PDF
            let fileName = `Relatorio_${getReportTypeName(reportType)}`;
            if (productCode !== 'all') fileName += `_${productCode}`;
            if (reportType === 'custom') fileName += `_${formatDate(startDate)}_a_${formatDate(endDate)}`;
            
            doc.save(`${fileName}.pdf`);
            
            showNotification('Relatório PDF gerado com sucesso!');
        }

        // Retorna nome do tipo de relatório
        function getReportTypeName(type) {
            const types = {
                'daily': 'Diário',
                'weekly': 'Semanal',
                'monthly': 'Mensal',
                'custom': 'Personalizado'
            };
            
            return types[type] || type;
        }

        // Exporta para CSV
        function exportToCSV() {
            const reportType = document.getElementById('reportType').value;
            const productCode = document.getElementById('reportProduct').value;
            const startDate = document.getElementById('startDate').value;
            const endDate = document.getElementById('endDate').value;
            
            let filteredWeighings = [...storedData.weighings];
            let filteredProcesses = [...storedData.processes];
            
            // Filtra por produto
            if (productCode !== 'all') {
                filteredWeighings = filteredWeighings.filter(w => w.code === productCode);
                filteredProcesses = filteredProcesses.filter(p => p.code === productCode);
            }
            
            // Filtra por data
            if (reportType === 'custom' && startDate && endDate) {
                const start = new Date(startDate);
                const end = new Date(endDate);
                
                filteredWeighings = filteredWeighings.filter(w => {
                    const date = new Date(w.date);
                    return date >= start && date <= end;
                });
                
                filteredProcesses = filteredProcesses.filter(p => {
                    const date = new Date(p.date);
                    return date >= start && date <= end;
                });
            } else {
                const now = new Date();
                let start;
                
                if (reportType === 'daily') {
                    start = new Date(now.setHours(0, 0, 0, 0));
                } else if (reportType === 'weekly') {
                    start = new Date(now.setDate(now.getDate() - 7));
                } else if (reportType === 'monthly') {
                    start = new Date(now.setMonth(now.getMonth() - 1));
                }
                
                filteredWeighings = filteredWeighings.filter(w => new Date(w.date) >= start);
                filteredProcesses = filteredProcesses.filter(p => new Date(p.date) >= start);
            }
            
            // Cria conteúdo CSV
            let csvContent = "data:text/csv;charset=utf-8,";
            
            // Cabeçalho
            csvContent += "Tipo de Relatório: " + getReportTypeName(reportType) + "\r\n";
            if (productCode !== 'all') {
                csvContent += "Produto: " + (storedData.products[productCode]?.nome || 'Desconhecido') + " (" + productCode + ")\r\n";
            }
            if (reportType === 'custom' && startDate && endDate) {
                csvContent += "Período: " + formatDate(startDate) + " a " + formatDate(endDate) + "\r\n";
            }
            csvContent += "\r\n";
            
            // Pesagens
            if (filteredWeighings.length > 0) {
                csvContent += "Pesagens\r\n";
                csvContent += "Data/Hora,Funcionário,Produto,Código,Peso Líquido,Valor\r\n";
                
                filteredWeighings.forEach(w => {
                    csvContent += `${formatDateTime(w.date)},${w.employee},${w.productName},${w.code},${formatNumber(w.netWeight, settings.decimalPrecision)} kg,${formatCurrency(w.totalValue)}\r\n`;
                });
                
                csvContent += "\r\n";
            }
            
            // Processos
            if (filteredProcesses.length > 0) {
                csvContent += "Processos\r\n";
                csvContent += "Data/Hora,Tipo,Produto,Código,Dif. Peso,Dif. Valor,Funcionário\r\n";
                
                filteredProcesses.forEach(p => {
                    csvContent += `${formatDateTime(p.date)},${getProcessTypeName(p.processType)},${p.productName},${p.code},${formatNumber(p.weightDifference, settings.decimalPrecision)} kg,${formatCurrency(p.valueDifference)},${p.employee}\r\n`;
                });
            }
            
            // Totais
            const totalWeight = filteredWeighings.reduce((sum, w) => sum + w.netWeight, 0);
            const totalValue = filteredWeighings.reduce((sum, w) => sum + w.totalValue, 0);
            const totalLoss = filteredProcesses.reduce((sum, p) => sum + p.valueDifference, 0);
            
            csvContent += "\r\n";
            csvContent += "Resumo\r\n";
            csvContent += `Total de Pesagens,${filteredWeighings.length}\r\n`;
            csvContent += `Peso Total,${formatNumber(totalWeight, settings.decimalPrecision)} kg\r\n`;
            csvContent += `Valor Total,${formatCurrency(totalValue)}\r\n`;
            csvContent += `Perdas/Quebras,${formatCurrency(totalLoss)}\r\n`;
            
            // Cria link de download
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            
            let fileName = `Relatorio_${getReportTypeName(reportType)}`;
            if (productCode !== 'all') fileName += `_${productCode}`;
            if (reportType === 'custom') fileName += `_${formatDate(startDate)}_a_${formatDate(endDate)}`;
            
            link.setAttribute("download", `${fileName}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            showNotification('Exportação para CSV realizada com sucesso!');
        }

        // Exporta para Excel
        function exportToExcel() {
            // Implementação básica - na prática você usaria uma biblioteca como SheetJS
            // Esta é uma simulação que cria um CSV com extensão .xls
            const reportType = document.getElementById('reportType').value;
            const productCode = document.getElementById('reportProduct').value;
            const startDate = document.getElementById('startDate').value;
            const endDate = document.getElementById('endDate').value;
            
            let filteredWeighings = [...storedData.weighings];
            let filteredProcesses = [...storedData.processes];
            
            // Filtra por produto
            if (productCode !== 'all') {
                filteredWeighings = filteredWeighings.filter(w => w.code === productCode);
                filteredProcesses = filteredProcesses.filter(p => p.code === productCode);
            }
            
            // Filtra por data
            if (reportType === 'custom' && startDate && endDate) {
                const start = new Date(startDate);
                const end = new Date(endDate);
                
                filteredWeighings = filteredWeighings.filter(w => {
                    const date = new Date(w.date);
                    return date >= start && date <= end;
                });
                
                filteredProcesses = filteredProcesses.filter(p => {
                    const date = new Date(p.date);
                    return date >= start && date <= end;
                });
            } else {
                const now = new Date();
                let start;
                
                if (reportType === 'daily') {
                    start = new Date(now.setHours(0, 0, 0, 0));
                } else if (reportType === 'weekly') {
                    start = new Date(now.setDate(now.getDate() - 7));
                } else if (reportType === 'monthly') {
                    start = new Date(now.setMonth(now.getMonth() - 1));
                }
                
                filteredWeighings = filteredWeighings.filter(w => new Date(w.date) >= start);
                filteredProcesses = filteredProcesses.filter(p => new Date(p.date) >= start);
            }
            
            // Cria conteúdo CSV (simulando Excel)
            let excelContent = "data:text/csv;charset=utf-8,";
            
            // Cabeçalho
            excelContent += "Tipo de Relatório:," + getReportTypeName(reportType) + "\r\n";
            if (productCode !== 'all') {
                excelContent += "Produto:," + (storedData.products[productCode]?.nome || 'Desconhecido') + ",(" + productCode + ")\r\n";
            }
            if (reportType === 'custom' && startDate && endDate) {
                excelContent += "Período:," + formatDate(startDate) + " a " + formatDate(endDate) + "\r\n";
            }
            excelContent += "\r\n";
            
            // Pesagens
            if (filteredWeighings.length > 0) {
                excelContent += "Pesagens\r\n";
                excelContent += "Data/Hora,Funcionário,Produto,Código,Peso Líquido,Valor\r\n";
                
                filteredWeighings.forEach(w => {
                    excelContent += `${formatDateTime(w.date)},${w.employee},${w.productName},${w.code},${formatNumber(w.netWeight, settings.decimalPrecision)} kg,${formatCurrency(w.totalValue)}\r\n`;
                });
                
                excelContent += "\r\n";
            }
            
            // Processos
            if (filteredProcesses.length > 0) {
                excelContent += "Processos\r\n";
                excelContent += "Data/Hora,Tipo,Produto,Código,Dif. Peso,Dif. Valor,Funcionário\r\n";
                
                filteredProcesses.forEach(p => {
                    excelContent += `${formatDateTime(p.date)},${getProcessTypeName(p.processType)},${p.productName},${p.code},${formatNumber(p.weightDifference, settings.decimalPrecision)} kg,${formatCurrency(p.valueDifference)},${p.employee}\r\n`;
                });
            }
            
            // Totais
            const totalWeight = filteredWeighings.reduce((sum, w) => sum + w.netWeight, 0);
            const totalValue = filteredWeighings.reduce((sum, w) => sum + w.totalValue, 0);
            const totalLoss = filteredProcesses.reduce((sum, p) => sum + p.valueDifference, 0);
            
            excelContent += "\r\n";
            excelContent += "Resumo\r\n";
            excelContent += `Total de Pesagens,${filteredWeighings.length}\r\n`;
            excelContent += `Peso Total,${formatNumber(totalWeight, settings.decimalPrecision)} kg\r\n`;
            excelContent += `Valor Total,${formatCurrency(totalValue)}\r\n`;
            excelContent += `Perdas/Quebras,${formatCurrency(totalLoss)}\r\n`;
            
            // Cria link de download
            const encodedUri = encodeURI(excelContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            
            let fileName = `Relatorio_${getReportTypeName(reportType)}`;
            if (productCode !== 'all') fileName += `_${productCode}`;
            if (reportType === 'custom') fileName += `_${formatDate(startDate)}_a_${formatDate(endDate)}`;
            
            link.setAttribute("download", `${fileName}.xls`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            showNotification('Exportação para Excel realizada com sucesso!');
        }

        // Inicializa gráficos
        function initializeCharts() {
            const salesCtx = document.getElementById('salesChart').getContext('2d');
            const lossesCtx = document.getElementById('lossesChart').getContext('2d');
            
            window.salesChart = new Chart(salesCtx, {
                type: 'bar',
                data: {
                    labels: [],
                    datasets: [{
                        label: 'Vendas por Produto',
                        data: [],
                        backgroundColor: 'rgba(54, 162, 235, 0.5)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            
            window.lossesChart = new Chart(lossesCtx, {
                type: 'pie',
                data: {
                    labels: ['Perdas', 'Sobras', 'Transformações'],
                    datasets: [{
                        data: [0, 0, 0],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(255, 206, 86, 0.5)',
                            'rgba(75, 192, 192, 0.5)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true
                }
            });
        }

        // Atualiza gráficos
        function updateCharts(weighings, processes) {
            // Gráfico de vendas por produto
            const salesByProduct = {};
            
            weighings.forEach(w => {
                if (!salesByProduct[w.productName]) {
                    salesByProduct[w.productName] = 0;
                }
                salesByProduct[w.productName] += w.totalValue;
            });
            
            window.salesChart.data.labels = Object.keys(salesByProduct);
            window.salesChart.data.datasets[0].data = Object.values(salesByProduct);
            window.salesChart.update();
            
            // Gráfico de perdas/sobras
            const lossTypes = {
                'perda': 0,
                'sobra': 0,
                'transformacao': 0
            };
            
            processes.forEach(p => {
                lossTypes[p.processType] += Math.abs(p.valueDifference);
            });
            
            window.lossesChart.data.datasets[0].data = [
                lossTypes['perda'],
                lossTypes['sobra'],
                lossTypes['transformacao']
            ];
            window.lossesChart.update();
        }

        // Salva configurações
        function saveSettings() {
            settings.decimalPrecision = parseInt(document.getElementById('decimalPrecision').value);
            settings.currencySymbol = document.getElementById('currencySymbol').value;
            settings.thousandSeparator = document.getElementById('thousandSeparator').value;
            settings.decimalSeparator = document.getElementById('decimalSeparator').value;
            
            saveData();
            applySettings();
            showNotification('Configurações salvas com sucesso!');
        }

        // Faz backup dos dados
        function backupData() {
            const dataStr = JSON.stringify(storedData);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            
            const exportName = `backup-padaria-${new Date().toISOString().slice(0, 10)}.json`;
            
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportName);
            linkElement.click();
            
            // Atualiza data do último backup
            document.getElementById('lastBackup').textContent = formatDateTime(new Date());
            showNotification('Backup realizado com sucesso!');
        }

        // Restaura dados de backup
        function restoreData() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            
            input.onchange = e => {
                const file = e.target.files[0];
                const reader = new FileReader();
                
                reader.onload = event => {
                    try {
                        const data = JSON.parse(event.target.result);
                        
                        showConfirmationModal(
                            'Confirmar Restauração',
                            'Tem certeza que deseja restaurar este backup? Todos os dados atuais serão substituídos.',
                            function() {
                                storedData = data;
                                saveData();
                                initializeProductList();
                                initializeAllProductsTable();
                                updateWeighingTables();
                                updateProcessHistoryTable();
                                updateCounters();
                                
                                // Atualiza data do último backup
                                document.getElementById('lastBackup').textContent = formatDateTime(new Date());
                                showNotification('Backup restaurado com sucesso!');
                            }
                        );
                    } catch (error) {
                        showNotification('Erro ao ler arquivo de backup!', 'error');
                    }
                };
                
                reader.readAsText(file);
            };
            
            input.click();
        }

        // Confirma limpeza de todos os dados
        function confirmClearAllData() {
            showConfirmationModal(
                'Confirmar Limpeza',
                'Tem certeza que deseja limpar TODOS os dados? Esta ação não pode ser desfeita.',
                function() {
                    clearAllData();
                }
            );
        }

        // Limpa todos os dados
        function clearAllData() {
            storedData = {
                products: {...produtos},
                weighings: [],
                processes: [],
                productPrices: {},
                productTaras: {}
            };
            
            saveData();
            initializeProductList();
            initializeAllProductsTable();
            updateWeighingTables();
            updateProcessHistoryTable();
            updateCounters();
            showNotification('Todos os dados foram limpos!');
        }

        // Atualiza contadores
        function updateCounters() {
            document.getElementById('totalProducts').textContent = Object.keys(storedData.products).length;
            document.getElementById('totalWeighings').textContent = storedData.weighings.length;
            document.getElementById('totalProcesses').textContent = storedData.processes.length;
            
            // Atualiza lista de produtos para relatórios
            const productSelect = document.getElementById('reportProduct');
            productSelect.innerHTML = '<option value="all">Todos</option>';
            
            for (const code in storedData.products) {
                const option = document.createElement('option');
                option.value = code;
                option.textContent = `${code} - ${storedData.products[code].nome}`;
                productSelect.appendChild(option);
            }
        }

        // Mostra modal de confirmação
        function showConfirmationModal(title, message, confirmCallback) {
            const modal = document.getElementById('confirmationModal');
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalMessage').textContent = message;
            
            modal.style.display = 'flex';
            
            document.getElementById('modalConfirmBtn').onclick = function() {
                modal.style.display = 'none';
                confirmCallback();
            };
            
            document.getElementById('modalCancelBtn').onclick = function() {
                modal.style.display = 'none';
            };
        }

        // Mostra notificação
        function showNotification(message, type = 'success') {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.className = 'notification show ' + type;
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }

        // Formata número com casas decimais
        function formatNumber(value, decimals) {
            if (isNaN(value)) return '0';
            
            return value.toFixed(decimals).replace('.', settings.decimalSeparator);
        }

        // Formata valor monetário
        function formatCurrency(value) {
            if (isNaN(value)) return `${settings.currencySymbol} 0${settings.decimalSeparator}00`;
            
            return `${settings.currencySymbol} ${value.toFixed(2).replace('.', settings.decimalSeparator)}`;
        }

        // Formata data/hora
        function formatDateTime(isoString) {
            const date = new Date(isoString);
            return date.toLocaleString('pt-BR');
        }

        // Formata data
        function formatDate(isoStringOrDate) {
            const date = typeof isoStringOrDate === 'string' ? new Date(isoStringOrDate) : isoStringOrDate;
            return date.toLocaleDateString('pt-BR');
        }

        // Atualiza display com configurações
        function updateDisplay() {
            // Atualiza exibições de peso e valor
            document.getElementById('pesoLiquidoDisplay').textContent = `0${settings.decimalSeparator}${'0'.repeat(settings.decimalPrecision)} kg`;
            document.getElementById('valorTotalDisplay').textContent = `${settings.currencySymbol} 0${settings.decimalSeparator}00`;
            
            // Atualiza tabelas
            updateWeighingTables();
            updateProcessHistoryTable();
        }
    
    // Função para gerar relatório de pesagens por tipo de produto
        function generateWeighingReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Agrupa pesagens por tipo de produto
    const weighingsByProduct = {};
    
    storedData.weighings.forEach(w => {
        if (!weighingsByProduct[w.productName]) {
            weighingsByProduct[w.productName] = [];
        }
        weighingsByProduct[w.productName].push(w);
    });
    
    // Cabeçalho
    doc.setFontSize(18);
    doc.text('Relatório de Pesagens por Produto', 105, 15, { align: 'center' });
    doc.setFontSize(12);
    doc.text(`PadariaPlus - ${formatDate(new Date())}`, 105, 25, { align: 'center' });
    
    let y = 35;
    
    // Para cada tipo de produto
    for (const productName in weighingsByProduct) {
        const productWeighings = weighingsByProduct[productName];
        
        // Cálculo de totais
        const totalWeight = productWeighings.reduce((sum, w) => sum + w.netWeight, 0);
        const totalValue = productWeighings.reduce((sum, w) => sum + w.totalValue, 0);
        
        // Adiciona seção do produto
        doc.setFontSize(14);
        doc.text(`Produto: ${productName}`, 20, y);
        y += 10;
        
        doc.setFontSize(12);
        doc.text(`Total de Pesagens: ${productWeighings.length}`, 20, y);
        y += 7;
        
        doc.text(`Peso Total: ${formatNumber(totalWeight, settings.decimalPrecision)} kg`, 20, y);
        y += 7;
        
        doc.text(`Valor Total: ${formatCurrency(totalValue)}`, 20, y);
        y += 10;
        
        // Adiciona tabela com detalhes
        const tableData = productWeighings.map(w => [
            formatDateTime(w.date),
            w.employee,
            w.code,
            `${formatNumber(w.netWeight, settings.decimalPrecision)} kg`,
            formatCurrency(w.totalValue)
        ]);
        
        doc.autoTable({
            startY: y,
            head: [['Data/Hora', 'Funcionário', 'Código', 'Peso Líquido', 'Valor']],
            body: tableData,
            margin: { left: 20 },
            styles: { fontSize: 9 }
        });
        
        y = doc.lastAutoTable.finalY + 15;
        
        // Quebra de página se estiver perto do final
        if (y > 250) {
            doc.addPage();
            y = 20;
        }
    }
    
    // Cálculo de totais gerais
    const totalWeighings = storedData.weighings.length;
    const grandTotalWeight = storedData.weighings.reduce((sum, w) => sum + w.netWeight, 0);
    const grandTotalValue = storedData.weighings.reduce((sum, w) => sum + w.totalValue, 0);
    
    // Adiciona totais gerais
    doc.setFontSize(14);
    doc.text('Totais Gerais', 20, y);
    y += 10;
    
    doc.setFontSize(12);
    doc.text(`Total de Pesagens: ${totalWeighings}`, 20, y);
    y += 7;
    
    doc.text(`Peso Total: ${formatNumber(grandTotalWeight, settings.decimalPrecision)} kg`, 20, y);
    y += 7;
    
    doc.text(`Valor Total: ${formatCurrency(grandTotalValue)}`, 20, y);
    
    // Rodapé
    doc.setFontSize(10);
    doc.text('Sistema PadariaPlus - Relatório gerado automaticamente', 105, 280, { align: 'center' });
    
    // Salva o PDF
    doc.save(`Relatorio_Pesagens_${formatDate(new Date()).replace(/\//g, '-')}.pdf`);
    
    showNotification('Relatório de pesagens gerado com sucesso!');
}
