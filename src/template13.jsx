function Template({children}){
    return<>
        <header>
            <img src="https://picsum.photos/200" alt="logo" />
            <h1>Ma TODO LIST</h1>
            <nav>
                <li>Accueil</li>
                <li>Contact</li>
            </nav>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <h2>
                MON FOOTER
            </h2>
        </footer>
    </>
    
}
    
export default Template