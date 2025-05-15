function esconderSideBar(sidebarID) {
    console.log("FUNCAO CHAMADA")
    
    const sidebar = document.getElementById(sidebarID);
    
    if (!sidebar){
        console.warn('Sidebar não encontrada.');
        return;
    }
    
    sidebar.classList.toggle("sidebar-escondida");
}   