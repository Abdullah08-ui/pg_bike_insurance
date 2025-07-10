document.addEventListener('DOMContentLoaded', () => {
            const tabs = document.querySelectorAll('.tab-link');
            const tabContents = document.querySelectorAll('.tab-content');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Deactivate all tabs and content
                    tabs.forEach(item => item.classList.remove('active'));
                    tabContents.forEach(content => content.classList.remove('active'));

                    // Activate the clicked tab
                    tab.classList.add('active');
                    // Activate the corresponding content
                    document.getElementById(tab.dataset.tab).classList.add('active');
                });
            });
        });

        //header
        document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const dropdownTriggers = document.querySelectorAll('.nav-links .dropdown > a');

    // Toggle mobile menu open/close
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Handle dropdowns in mobile view
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(event) {
            // Check if we are in mobile view by seeing if the hamburger is visible
            const isMobileView = getComputedStyle(hamburger).display !== 'none';
            
            if (isMobileView) {
                // Prevent the link from going to a new page
                event.preventDefault(); 
                
                // Get the parent LI element of the clicked link
                const parentDropdown = this.parentElement;
                
                // Toggle the 'active' class on the LI to show/hide the dropdown content
                parentDropdown.classList.toggle('active');
            }
        });
    });
});