function esconderSideBar(sidebarId, menuId) {
    console.log("FUNCAO CHAMADA")
    const sidebar = document.getElementById(sidebarId);
    let menu = document.getElementById(menuId);
    if (!sidebar || !menu) {
        // console.warn('Sidebar não encontrada.');
        // return;
        if (!sidebar)
        {
            console.warn('Sidebar não encontrada');
            return;
        }
        else if(!menu)
        {
            menu = document.getElementById("menu-sanduiche-escondido");

            if(!menu)
            {
                console.warn('Menu não encontradao');
                return;
            }
        }
    }

    sidebar.classList.toggle("sidebar-escondida");

    if(menu.id == "menu-sanduiche") menu.id = "menu-sanduiche-escondido"; 
    else if(menu.id == "menu-sanduiche-escondido") menu.id = "menu-sanduiche";

}   