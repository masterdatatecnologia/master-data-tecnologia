//menu nav
document.addEventListener('DOMContentLoaded', function() { const menuHTML = `  <div>
    <header class="header">         
        <div class = "logo">        
        <a href="index.html"><img src="./Imagens/masterDataLogo.png" alt="Master Data" class="logo"></a>
            <!--<h1>Manual Sistema - Petros</h1>-->
        </div> 
            <nav class="nav">
                <div>   
                <div class="hamburger" id="hamburger">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                </div>
                 </div> 
                <ul class="nav-links" id="nav-links">
                <li><a href="index.html">Inicio</a></li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropdownbtn">Frente de Caixa</a>
                    <div class="dropdown-content">
                        <a href="loginFrenteCaixa.html" >Login / Fechamento PDV</a>
                        <a href="baixaDeAbastecimentos.html" >Baixa de Abastecimentos</a>
                        <a href="formaRecebimento.html" >Forma de Recebimento</a>
                        <a href="vendaDeItens.html" >Venda de Itens</a>
                        <a href="baixaRapidaDeAbastecimentos.html" >Baixa rápida de Abastecimentos</a>
                        <a href="cancelamentoDeVenda.html" >Cancelamento de Venda</a>
                        <a href="nfeNoFrenteDeCaixa.html" >Emitindo NFe no PDV</a>
                        <a href="AdiantamentoDeCliente.html" >Adiantamento de Cliente</a>
                        <a href="monitoramentoPista.html" >Cadastro de cartão IDF no PDV</a>
                        <a href="consultasERelatorios.html" >Consultas e Relatórios</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropdownbtn">Corporativo</a>
                    <div class="dropdown-content">
                        <a href="cadastropessoa.html" >Cadastro Pessoa</a>
                        <a href="cadastrocliente.html">Cadastro Cliente</a>
                        <a href="#">Cadastro Cliente Simplificado</a>
                        <a href="#">Classe de Cliente</a>
                        <a href="#">Contrato de Crédito</a>
                        <a href="#">Cadastro de Colaborador</a>
                        <a href="#">Cadastro de Usuário</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropdownbtn">Suprimento</a>
                    <div class="dropdown-content">
                        <a href="#">Cadastro de Item</a>
                        <a href="#">Ajuste de Estoque</a>
                    </div>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropdownbtn">L.M.C</a>
                    <div class="dropdown-content">
                        <a href="#">Fechamento de LMC</a>
                        <a href="#">Movimento LMC em lote</a>
                    </div>                
                </li>
                    <li><a href="#">Sobre</a></li>
                </ul>
                </div>
            </nav>
    </header>
    `;

document.body.insertAdjacentHTML('afterbegin', menuHTML);
});

document.getElementById('footer').innerHTML = `
  <footer>
        <div class="footer-content">
            <p>&copy; 2024 Master Data. Todos os direitos reservados.</p>
        </div>
    </footer>
`;

//menu hamburger
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const mainContent = document.getElementById('main-content');
    const navbar = document.getElementById('navbar')
    const body = document.body;
  
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            body.classList.add('lock-scroll');
        } else { 
            body.classList.remove('lock-scroll');
            mainContent.style.marginTop = '0';
        }
    });
    // Fechar o menu ao clicar fora dele
    document.addEventListener('click', function(event) {
      if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove('active');
      }
    });
  });
  
  