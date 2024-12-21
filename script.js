document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const dashboardContainer = document.getElementById('dashboard-container');
    const sections = document.querySelectorAll('.content-section');
    const headerTitle = document.getElementById('header-title');
    const logoutMessage = document.querySelector('#logout p');
    const settingsForm = document.getElementById('settings-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'Admin' && password === 'admin@2005') {
            loginContainer.style.display = 'none';
            dashboardContainer.classList.add('active');
            document.getElementById('dashboard').classList.add('active'); 
        } else {
            alert('Invalid username or password');
        }
    });

    const links = {
        'dashboard-link': 'dashboard',
        'users-link': 'users',
        'settings-link': 'settings',
        'logout-link': 'logout'
    };

    Object.keys(links).forEach(linkId => {
        document.getElementById(linkId).addEventListener('click', (event) => {
            event.preventDefault();
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(links[linkId]).classList.add('active');
            headerTitle.textContent = links[linkId].charAt(0).toUpperCase() + links[linkId].slice(1);
            if (linkId === 'logout-link') {
                setTimeout(() => {
                    dashboardContainer.classList.remove('active');
                    loginContainer.style.display = 'flex';
                
                    logoutMessage.textContent = 'You have logged out successfully.';
                }, 1000);
            }
        });
    });

    settingsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Handle settings form data here if needed
        
        // Redirect to the dashboard
        sections.forEach(section => section.classList.remove('active'));
        document.getElementById('dashboard').classList.add('active');
        headerTitle.textContent = 'Dashboard';
    });
});